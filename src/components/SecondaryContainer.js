import React  from 'react'
import {useSelector} from "react-redux"

import MovieList from './MovieList'
const SecondaryContainer = () => {
   const movies=useSelector(store=>store.movies);
  return (
       movies.nowPlayingMovies && (
    <div className="bg-black ">
       <div className='-mt-35 pl-12 relative z-20 '>
        <MovieList title={"now playing"}movies={movies.nowPlayingMovies}/>
        <MovieList title={"popular movies"}movies={movies.PopularMovies}/>
        <MovieList title={"Horror movies"}movies={movies.nowPlayingMovies}/>
        <MovieList title={"bollywood movies"}movies={movies.nowPlayingMovies}/>
        </div>
    </div>
       )
  );
};

export default SecondaryContainer