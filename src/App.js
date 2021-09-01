import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import React,{ useState } from "react"; 
function App() {
  const[movies, setMovies]= useState([
    {title: "The shawshank redemption", description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.", posterURL:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", rating:'9.3', id:1 },
    {title: "eternal sunshine of the spotless mind", description:"Eternal Sunshine of the Spotless Mind (also simply known as Eternal Sunshine) is a 2004 American science fiction romantic comedy-drama film written by Charlie Kaufman and directed by Michel Gondry. It follows an estranged couple who have erased each other from their memories", posterURL:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlDad1DnSApJJ9OHQM9IazQ_goiHSRYibeIYk0xF5cURWL9vlm", rating:'8.3', id:2 }

])
  const handleAdd =() => {
    const tiltex= prompt("please enter title");
    const descriptionx= prompt("please enter description");
    const url= prompt("please enter poster URL");
    const ratings= prompt("please enter rating");
    const idx= (movies.length+1);
    console.log(movies);
    setMovies(movies=>[...movies, {title:tiltex, description:descriptionx, posterURL:url, rating:ratings, id:idx }]);
  }
  const handleFilterRating = () =>{
    const lower= parseFloat(prompt("please enter rating lower limit(if you want one rating enter it in both prompts)"),10);
    const higher= parseInt(prompt("please enter rating higher limit"),10);
    if(lower==higher){
      const newMovies= movies.filter(rating=> rating==higher);
      setMovies(newMovies);
    }
    else if (higher<lower){
      alert("Please enter right data!!");
    }
    else{
      
      const newMovies= movies.filter(movie=>(movie.rating>lower && movie.rating<higher ));
      console.log(newMovies)
      setMovies(newMovies);
    }
    
  }
  const handleFilterName = () =>{
    const name= prompt("please enter required name or key word")
    const newMovies= movies.filter(movie => movie.title.includes(name))
    setMovies(newMovies);
    
  }
  return (
    
    <div className="App">
    <div className="content">
    <Navbar sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Best movies</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" onClick={() => handleAdd()}>Add movie</Nav.Link>
      <Nav.Link href="#home" onClick={() => handleFilterRating()}>Filter by rating</Nav.Link>
      <Nav.Link href="#home" onClick={() => handleFilterName()}>Filter by name</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
    <div>
      <MovieList movies={movies}/>
    </div>
    </div>
  );
}

export default App;
