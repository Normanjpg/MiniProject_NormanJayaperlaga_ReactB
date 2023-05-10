import React, { useEffect, useState } from "react";
import "./SeriesPages.css";
import { Row, Col, Container } from "react-bootstrap";
import {
  getSeriesList,
  baseImgUrl,
  searchSeries,
} from "../../config/apimovie/apimovie.js";

const SeriesPages = () => {
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    getSeriesList().then((result) => {
      setPopularSeries(result);
    });
  }, []);

  const PopularSeriesList = () => {
    return popularSeries.map((series, i) => {
      return (
        <div className="series-wrapper" key={i}>
          <div className="series-title" style={{ fontWeight: "bold" }}>
            {series.name} ({series.original_name})
          </div>
          <img
            src={`${baseImgUrl}/${series.poster_path}`}
            className="series-image"
          />
          <div className="series-date">
            Release Date: {series.first_air_date}
          </div>

          <div className="series-country">
            Origin Country: {series.origin_country}
          </div>


          <div className="series-rate">
            <img src="../../src/assets/iconsvg/rated.svg" alt="rated" />
            {series.vote_average}
          </div>
        </div>
      );
    });
  };

  const searchpagesSeries = async (s) => {
    if (s.length > 3) {
      const queryseries = await searchSeries(s)
      setPopularSeries(queryseries.results);
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
              onChange={({ target }) => searchpagesSeries(target.value)}
              aria-label="Search"
            />
          </div>
        </Row>
        <Row>
          <div className="popular-title">
            <h1>Popular Series</h1>
          </div>
          <div className="series-container">
            <PopularSeriesList />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SeriesPages;
