import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const TopRated = (props) => {
    const [topRatedMovies, setTopRatedMovies] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const baseUrl = "https://image.tmdb.org/t/p/"
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
            .then(res => {
                console.log(res);
                setTopRatedMovies(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    return (
        <>
            <div>
                <p>Top Rated Movies</p>
            </div>
            <div className='grid gap-5 px-48 md:grid-cols-5'>
                {!isLoading && topRatedMovies.map((movie, idx) =>
                    <div className='flex flex-col items-center justify-center gap-2 p-5 rounded-lg bg-slate-300'>
                        <Link to={`/`}>
                            <img className='duration-200 hover:scale-105' src={`${baseUrl}w185${movie.poster_path}`} alt="" />
                        </Link>
                        <p>{movie.title}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default TopRated