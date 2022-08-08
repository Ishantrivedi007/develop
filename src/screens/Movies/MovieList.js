import React, { useState, useEffect } from "react";
import { getNowPlayingMovies } from "./Movies.services";
import { Container, Card, Col, CardGroup, Spinner } from "react-bootstrap";
import "./Movies.styles.css";

const MovieList = () => {
  const [nowPlayingMoviesdata, setNowPlayingMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNowPlayingMovies(setNowPlayingMoviesData, setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <Container>
            <Col
              className="my-2 mx-2"
              style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: "bolder",
                  fontStyle: "italic",
                  color: "white",
                }}
              >
                <u>Our Movie Showcase</u>
              </span>
            </Col>
          </Container>
          <CardGroup className="mx-5 my-5">
            {nowPlayingMoviesdata.map((entry, index) => (
              <Col style={{ display: "flex" }}>
                <Col lg={3} className="mx-2 my-2">
                  <Card style={{ width: "18rem", borderRadius: "40px" }}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w200/" + entry?.poster_path
                      }
                      alt=""
                      height="282.172px"
                      width="194.609px"
                    />
                    <Card.Body>
                      <Card.Title>{entry?.original_title}</Card.Title>
                      <Card.Text className="overflow-cell">
                        {entry?.overview}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Col>
            ))}
          </CardGroup>
        </div>
      )}
    </>
  );
};

export default MovieList;
