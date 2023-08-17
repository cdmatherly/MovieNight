import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [popularMovies, setPopularMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const baseUrl = "https://image.tmdb.org/t/p/"

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => {
        console.log(res);
        setPopularMovies(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className="flex flex-wrap justify-center gap-5 my-5">
      { !isLoading && popularMovies.map((movie, idx) => 
      <div className='flex flex-col justify-center items-center p-5 bg-slate-300 gap-2'>
        <img className='duration-200 hover:scale-105' src={`${baseUrl}w185${movie.poster_path}`} alt="" />
        <p>{movie.title}</p>
      </div>
      )}
    </div>
  );
}

export default App;
