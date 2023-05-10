import React, { useEffect, useState } from "react";
import "./WelcomeHome.css";
import { Row, Col, Container } from "react-bootstrap";
import {
  getMovieList,
  baseImgUrl,
  searchMovie,
} from "../../config/apimovie/apimovie.js";

const WelcomeHomePages = () => {
  const [popularMovies, setPopularMovie] = useState([]);
  // const [popularQuery, setPopularQuery] = useState("");

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

  // const searchpopular = (q) => {
  //   q.preventDefault();
  //   setPopularQuery(q.target.value);
  //   fetch(searchMovie())
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const searchpopular = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.result);
    }
  };

  return (
    <div className="my-home-section" id="welcome">
      <Container>
        <Row>
          <Col>
            <div className="box-welcome-title">
              <h1>Welcome to</h1>
              <h1 className="box-welcome-text-red">LazyWatchLists</h1>
              <img
                className="rounded-circle box-welcome-imglogo"
                src="../../src/assets/icons/logo.svg"
                alt="welcome logo"
              />
            </div>
            <div className="box-welcome-content">
              <p>
                Browse movies, add them to watchlists and share them with
                friends. Just click the{" "}
                <img
                  src="../../src/assets/iconsvg/createwatchlist.svg"
                  alt="add watchlist"
                />{" "}
                to add a movie.
              </p>
            </div>
            <div className="p-4">
              <input
                className="form-control me-2"
                placeholder="Search Movie by Title"
                // value={popularQuery}
                // onChange={searchpopular}
                onChange={({ target }) => searchpopular(target.value)}
                aria-label="Search"
              />
              {/* <form className="d-flex" role="search">
                <button className="btn btn-outline-warning" type="submit">
                  Search
                </button>
              </form> */}
            </div>
            {/* <a href="#ListPreview">
              <button type="button" className="btn btn-success mt-3 mb-5">
                Get Started
              </button>
            </a> */}
          </Col>
        </Row>
        <Row>
          <div className="welcome-popular-title">
            <h1>Popular Movie Right Now</h1>
          </div>
          <div className="welcome-movie-container">
            <PopularMovieList />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeHomePages;
