import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import Poster from "../components/Poster"

function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [popularIsLoading, setPopularIsLoading] = useState(true);
  const [topRatedIsLoading, setTopRatedIsLoading] = useState(true);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((res) => {
        console.log(res);
        setTopRatedMovies(res.data.results);
        setTopRatedIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => {
        console.log(res);
        setPopularMovies(res.data.results);
        setPopularIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex w-screen gap-10 px-20">
      <div className="flex flex-col w-3/4 gap-5">
        <div className="flex flex-col gap-2 pt-3 bg-slate-500">
          <p className="self-center">Popular Movies</p>
          <div className="flex items-center gap-5 px-12 py-5 overflow-x-auto">
            {!popularIsLoading &&
              popularMovies.map((movie, idx) => (
                <Poster movie={movie} baseUrl={baseUrl}></Poster>
                // <div className="flex flex-col items-center justify-center flex-shrink-0 w-56 gap-2 p-5 rounded-lg bg-slate-300 h-80">
                //   <Link to={`/`}>
                //     <img
                //       className="duration-200 h-60 hover:scale-105"
                //       src={`${baseUrl}w185${movie.poster_path}`}
                //       alt=""
                //     />
                //   </Link>
                //   <p className="text-center">{movie.title}</p>
                // </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3 bg-slate-500">
          <p className="self-center">Top Rated Movies</p>
          <div className="flex items-center gap-5 px-12 py-5 overflow-x-auto">
            {!topRatedIsLoading &&
              topRatedMovies.map((movie, idx) => (
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-56 gap-2 p-5 rounded-lg bg-slate-300 h-80">
                  <Link to={`/`}>
                    <img
                      className="duration-200 h-60 hover:scale-105"
                      src={`${baseUrl}w185${movie.poster_path}`}
                      alt=""
                    />
                  </Link>
                  <p className="text-center">{movie.title}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center w-full p-10 bg-slate-300">
        <button className="px-2 py-1 bg-green-500 rounded-lg">Create a New List</button>
      </div>
    </div>
  );
}

export default Home;
