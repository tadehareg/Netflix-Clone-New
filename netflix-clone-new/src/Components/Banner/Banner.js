import React, { useState, useEffect } from 'react';
import requests from '../../Utils/requests'; 
import axios from '../../Utils/axios' ;
import './Banner.css';
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    (async ()=> {
      try{
        const request = await axios.get(requests.fetchNetflixOrginals);
        console.log(requests);
        setMovie(
        request.data.results[
          Math.floor(Math.random()*request.data.results.length)
        ]);
      }catch(error){
        console.log("Error", error);
      }
    })()
},[]);
function  truncate(str, n){
  return str?.length > n? str.substr(0, n-1)+ '...':str;
}
  return (
    <div className='Banner'
    style={{
      backgroundSize:"cover",
      backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }}
    >

<div className='banner_contents'>
        <h1 className='banner_title'>
        {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
        <button className='banner_button' id="play">Play</button>
        <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
    </div>
    <div className='banner_fadeBottom'></div>
    </div>
  )
}
export default Banner
// import React, { useState, useEffect } from 'react';
// import requests from '../../utils/requests';
// import axios from '../../utils/axios';
// import './Banner.css';

// function Banner() {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(requests.fetchNetflixOrginals);
//         const movies = response.data.results;
        
//         if (movies?.length > 0) {
//           const randomIndex = Math.floor(Math.random() * movies.length);
//           setMovie(movies[randomIndex]);
//         } else {
//           console.log("No movies found in API response");
//         }
//       } catch (error) {
//         console.error("Error fetching Netflix originals:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   function truncate(str, n) {
//    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
//    }

//   return (
//     <div className='Banner'
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className='banner_contents'>
//         <h1 className='banner_title'>
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className='banner_buttons'>
//           <button className='banner_button'>Play</button>
//           <button className='banner_button'>My List</button>
//         </div>
//         <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1> 
//       </div>
//       <div className='banner_fadeBottom'></div>
//     </div>
//   );
// }

// export default Banner;
