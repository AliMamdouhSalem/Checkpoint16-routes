import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MovieDescription from "./components/MovieDescription";
function App() {
  const [movies, setMovies] = useState([
    {
      title: "The shawshank redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      rating: "9",
      trailerURL:"https://www.youtube.com/embed/6hB3S9bIaco",
      id: 1,
    },
    {
      title: "eternal sunshine of the spotless mind",
      description:
        "Eternal Sunshine of the Spotless Mind (also simply known as Eternal Sunshine) is a 2004 American science fiction romantic comedy-drama film written by Charlie Kaufman and directed by Michel Gondry. It follows an estranged couple who have erased each other from their memories",
      posterURL:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlDad1DnSApJJ9OHQM9IazQ_goiHSRYibeIYk0xF5cURWL9vlm",
      rating: "6",
      trailerURL:"https://www.youtube.com/embed/yE-f1alkq9I",
      id: 2,
    },
  ]);

  const [addForm, setAddForm] = useState({
    title: "",
    description: "",
    url: "",
    rate: "",
    trailer:"",
    id: 0,
  });
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(0);
  const [title, setTitle] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showFilterName, setShowFilterName] = useState(false);
  const [showFilterRate, setShowFilterRate] = useState(false);
  const handleAddFormOpen = () => setShowAdd(true);
  const handleAddFormClose = () => setShowAdd(false);
  const handleFilterRatingFormOpen = () => setShowFilterRate(true);
  const handleFilterRatingFormClose = () => setShowFilterRate(false);
  const handleFilterNameFormOpen = () => setShowFilterName(true);
  const handleFilterNameFormClose = () => setShowFilterName(false);
  const handleAdd = () => {
    setAddForm({ ...addForm, id: movies.length + 1 });
    setMovies((movies) => [...movies, addForm]);
  };
  const handleFilterRating = () => {
    console.log(minRating, maxRating);
    if (maxRating < minRating) {
      alert("Please enter right data!!");
    }
    if (minRating === maxRating) {
      const newMovies = movies.filter((rating) => rating === maxRating);
      console.log(newMovies);
      setMovies(newMovies);
    }

    const newMovies = movies.filter(
      (movie) => movie.rating > minRating && movie.rating < maxRating
    );
    console.log(newMovies);
    setMovies(newMovies);
  };
  const handleFilterName = () => {
    const newMovies = movies.filter((movie) => movie.title.includes(title));
    setMovies(newMovies);
  };
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Best movies</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home" onClick={() => handleAddFormOpen()}>
                  Add movie
                </Nav.Link>
                <Nav.Link
                  href="#home"
                  onClick={() => handleFilterRatingFormOpen()}
                >
                  Filter by rating
                </Nav.Link>
                <Nav.Link href="#home" onClick={() => handleFilterNameFormOpen()}>
                  Filter by name
                </Nav.Link>
                <Nav.Link>
                  <Link to="/" className="links">Home</Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          {/* Popup Add Movie */}
          <Modal
            show={showAdd}
            onHide={handleAddFormClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Group className="mb-3" controlId="movieTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={addForm.title}
                    onChange={(e) =>
                      setAddForm({ ...addForm, title: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="movieDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter description"
                    value={addForm.description}
                    onChange={(e) =>
                      setAddForm({ ...addForm, description: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="moviePoster">
                  <Form.Label>Poster URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter poster URL"
                    value={addForm.url}
                    onChange={(e) =>
                      setAddForm({ ...addForm, url: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="movieTrailer">
                  <Form.Label>Trailer embed URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter trailer URL"
                    value={addForm.trailer}
                    onChange={(e) =>
                      setAddForm({ ...addForm, trailer: e.target.value })
                    }
                  />
                  </Form.Group>
                <Form.Group className="mb-3" controlId="movieRating">
                  <Row>
                    <Col>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter rate"
                        value={addForm.rate}
                        onChange={(e) =>
                          setAddForm({ ...addForm, rate: e.target.value })
                        }
                      />
                    </Col>
                    <Col className="mt-3 pt-3">
                      <h2>/10</h2>
                    </Col>
                  </Row>
                </Form.Group>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleAddFormClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAdd}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Popup Filter Rating */}
          <Modal
            show={showFilterRate}
            onHide={handleFilterRatingFormClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Filter by rate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Group className="mb-3" controlId="minRating">
                  <Row>
                    <Col>
                      <Form.Label>From</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter starting rate"
                        value={minRating}
                        onChange={(e) => setMinRating(+e.target.value)}
                      />
                    </Col>
                    <Col className="mt-4 pt-2">
                      <h2>/10</h2>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="maxRating">
                  <Row>
                    <Col>
                      <Form.Label>To</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter max rate"
                        value={maxRating}
                        onChange={(e) => setMaxRating(+e.target.value)}
                      />
                    </Col>
                    <Col className="mt-4 pt-2">
                      <h2>/10</h2>
                    </Col>
                  </Row>
                </Form.Group>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleFilterRatingFormClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleFilterRating}>
                Filter
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Popup Filter Name */}
          <Modal
            show={showFilterName}
            onHide={handleFilterNameFormClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Filter by Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Group>
                  <Form.Label>Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter search term"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleFilterNameFormClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleFilterName}>
                Filter
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <MovieList movies={movies} />
            </Route>
            <Route path="/MovieDescription/:name/:desc/:trailerLink" component="MovieDescription">
              <MovieDescription/>
            </Route>
          </Switch>
        </div> 
      </div>
      
    </Router>
  );
}

export default App;
