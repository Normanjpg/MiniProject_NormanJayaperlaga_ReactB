import React, { useEffect, useState } from "react";
import "./MoviePages.css";
import { Row, Col, Container } from "react-bootstrap";
import {
  getMovieList,
  baseImgUrl,
  searchMovie,
} from "../../config/apimovie/apimovie.js";

const MoviePages = () => {
  const [popularMovies, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="welcome-movie-wrapper" key={i}>
          <div className="welcome-movie-title" style={{ fontWeight: "bold" }}>
            {movie.title}
          </div>
          <img
            src={`${baseImgUrl}/${movie.poster_path}`}
            className="welcome-movie-image"
          />
          <div className="welcome-movie-date">
            Release Date: {movie.release_date}
          </div>

          <div className="welcome-movie-rate">
            <img src="../../src/assets/iconsvg/rated.svg" alt="rated" />
            {movie.vote_average}
          </div>
        </div>
      );
    });
  };

  const searchpagesMovie = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results)
    }
  };

  return (
    <div className="my-home-section" id="welcome">
      <Container>
        <Row>
          <div className="p-4">
            <input
              className="form-control me-2"
              placeholder="Search Movie by Title"
              onChange={({ target }) => searchpagesMovie(target.value)}
              aria-label="Search"
            />
          </div>
        </Row>
        <Row>
          <div className="popular-title">
            <h1>Popular Movie</h1>
          </div>
          <div className="movie-container">
            <PopularMovieList />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MoviePages;
