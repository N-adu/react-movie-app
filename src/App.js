import { useEffect, useState } from 'react';
import './App.css';
import FeaturedMovie from './FeaturedMovie/FeaturedMovie.js';
import MovieCard from './MovieCard/MovieCard.js';
import TvCard from './TvCard/tvCard.js';



function App() {
  const [movieList, setMovieList] = useState([])
  const [tvList, setTvList] = useState([])
  
  async function getMovieList() {
    const data = fetch('https://api.themoviedb.org/3/movie/451048/similar?api_key=96bf2ff2331bc41423f172d6c5f45d56');
    const response = await data;
    const jsonResponse = await response.json();
    setMovieList(jsonResponse.results);
  }

  async function getTvList() {
    const data = fetch('https://api.themoviedb.org/3/discover/tv?api_key=96bf2ff2331bc41423f172d6c5f45d56');
    const response = await data;
    const jsonResponse = await response.json();
    setTvList(jsonResponse.results);
  }

  useEffect(()=>
  {getMovieList()
  getTvList()
  }, [])
  // useEffect(()=>{getTvList()}, [])
  console.log(tvList)
  return (
    <div className = "App" >
      <FeaturedMovie/>
      
      <main>
      
      <section className="movie-list">
      {
        movieList.map((movie)=> <MovieCard title={movie.original_title} genre={movie.genres} poster={movie.poster_path} key={movie.original_title}/>)
      }
      </section>

      <section className="tv-list">
        {
          tvList.map((tv)=> <TvCard title={tv.original_name} genre={tv.genres} poster={tv.poster_path} key={tv.id}/>)
        }

      </section>
      </main>
    </div>
  );
}



// function App() {
//   const actresses = [
//     'Meryl Streep',
//     'Viola Davis',
//     'Taraji P. Henson',
//     'Angela Bassett'
//   ]

//   return (
//     <div className='App'>
//       {
//         actresses.map((actress, index) => {
//           return <Actress name={actress} />
//         })
//       }
      
//     </div>
//   );
// }

export default App;
