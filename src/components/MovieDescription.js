import { useParams } from "react-router";

const MovieDescription = () => {
    var {name, desc,trailerLink} = useParams()
    console.log(trailerLink);
    console.log("heyy");
    // console.log(movies);
    // var selectTrailer= movies.filter((movies)=>movies.title==name);
    // const trailer= selectTrailer.trailerURL
    return (
        <div>
            <h1>HIIIII</h1>
            <h2>{name}</h2>
            <p>{desc}</p>
            <iframe width="420" height="315" src={trailerLink} title="trailer"></iframe>
        </div> );
}
export default MovieDescription;