//import React,{ useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
const MovieList = (props) => {
    const movies=props.movies;
    return (<div>
        {movies.map((movies) => (
            <div key={movies.id}>
                <Link to={`/MovieDescription/${movies.title}/${movies.description}/${movies.trailerURL}`} className="movieCardLink">
                <MovieCard posterURL={movies.posterURL}/>
                <h2>{movies.title}</h2>
                <p>rating: {movies.rating}/10</p>
                </Link>
            </div>
        ))} 
    </div>  
    );
}

export default MovieList;