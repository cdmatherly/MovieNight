import { useState } from "react";
import { Link } from "react-router-dom";
import MovieModal from "../components/MovieModal"

const Poster = (props) => {
    const { movie, baseUrl } = props;

    return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-56 gap-2 p-5 rounded-lg bg-slate-300 h-80">
        <Link to={`/`}>
            <div className="relative duration-200 hover:scale-105">

                <img
                    className=" h-60"
                    src={`${baseUrl}w185${movie.poster_path}`}
                    alt=""
                    />
                <div className="absolute flex items-center justify-center w-5 h-5 duration-100 bottom-1 right-1 bg-slate-800 hover:scale-110 hover:shadow-slate-300 hover:shadow-md">
                    <MovieModal></MovieModal>
                </div>
            </div>
        </Link>
        <p className="text-center">{movie.title}</p>
    </div>
    );
};

export default Poster;
