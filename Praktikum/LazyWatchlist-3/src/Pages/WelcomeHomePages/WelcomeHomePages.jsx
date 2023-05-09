import React from "react";
import "./WelcomeHome.css";
import { Row, Col, Container } from "react-bootstrap";

const WelcomeHomePages = () => {
  const searchpopular = (q) => {
    console.log({q})
  }
  return (
    <div className="my-home-section" id="welcome">
      <Container>
        <Row>
          <Col>
            <div className="box-welcome-title">
              <h1>Welcome to</h1>
              <h1 className="box-welcome-text-red">
                LazyWatchLists
              </h1>
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
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Movie by Title"
                  onChange={({target}) => searchpopular(target.value)}
                  aria-label="Search"
                />
                <button className="btn btn-outline-warning" type="submit">
                  Search
                </button>
              </form>
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
            <div className="welcome-movie-wrapper">
              <div className="welcome-movie title">gfh</div>
              <img src="" className="welcome-movie-image"/>
              <div className="welcome-movie-date">gj</div>
              <div className="welcome-movie-rate">gh</div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeHomePages;
