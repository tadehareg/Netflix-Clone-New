import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests'

function RowList() {
    return (
    <>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals}
    isLargeRow={true}
    />
    <Row title="Trending Now" fetchUrl ={requests.fetchTrending} />
    <Row title="Upcoming Movies" fetchUrl ={requests.fetchUpComingMovies} />
    <Row title="Recomendation Movies" fetchUrl={requests.fetchRecomendation} />
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Tv Shows" fetchUrl={requests.fetchTvShow}/>
</>
    )
}

export default RowList