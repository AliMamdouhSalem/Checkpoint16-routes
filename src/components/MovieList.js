//import React,{ useState } from "react";
import MovieCard from "./MovieCard";
const MovieList = (props) => {
    const movies=props.movies;
    return (<div>
        {movies.map((movies) => (
            <div key={movies.id}>
                <MovieCard posterURL={movies.posterURL}/>
                <h2>{movies.title}</h2>
                <p>description: {movies.description}</p>
                <p>rating: {movies.rating}/10</p>
            </div>
        ))}
     
    </div>  
    );
}

export default MovieList;