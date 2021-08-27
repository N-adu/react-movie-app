import React, { useState, useEffect } from 'react';
import Tag from '../Tag/tag.js';

function FeaturedMovie() {
    // eslint-disable-next-line no-unused-vars
    const [FeaturedMovie, setFeaturedMovies] = useState({});

    console.log(FeaturedMovie)

    async function getFeaturedMovie() {
        const data = fetch('https://api.themoviedb.org/3/movie/451048?api_key=96bf2ff2331bc41423f172d6c5f45d56');
        const response = await data;
        const jsonResponse = await response.json();
        setFeaturedMovies(jsonResponse);
    }

    useEffect(() => {getFeaturedMovie()},[])

    console.log(FeaturedMovie)
        

    return(
        <div>
            {
                FeaturedMovie.original_title &&
                <div className="featured-movie flex" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${FeaturedMovie.backdrop_path}')`, color: 'white'}}>
        
                    <h1>{FeaturedMovie.original_title}</h1>
                    <Tag genre={FeaturedMovie?.genres[1].name}/>
                    <p>{FeaturedMovie.overview}</p>
                    <button>Watch Now</button>
                    <h3>{FeaturedMovie.vote_average}</h3> 
                </div>
            }
                
        </div>
       
    )
}
 export default FeaturedMovie;