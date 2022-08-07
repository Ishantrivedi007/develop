import React, { useState, useEffect } from "react";
import {
  getLatestMovies,
  //getMovieList,
  getNowPlayingMovies,
  getPopularMoviesList,
  getTopRatedMovies,
  getUpcomingMovies,
  // getMostPopularTVSeries,
  getTopRatedTVSeries,
} from "./Movies.services";
import {
  Container,
  Table,
  Card,
  Carousel,
  Button,
  Col,
  CardGroup,
  Form,
  Modal,
  Spinner,
} from "react-bootstrap";
import moment from "moment";
import Slider from "react-slick";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./Movies.styles.css";
//import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const TVList = () => {
  const { id } = useParams();
  const action = window.location.pathname.split("/")[3];
  //const history = useHistory();
  const [moviedata, setMovieData] = useState([]);
  const [popularMoviesdata, setPopularMovieData] = useState([]);
  const [upcomingMoviesdata, setUpcomingMoviesData] = useState([]);
  const [topRatedMoviesdata, setTopRatedMoviesData] = useState([]);
  const [nowPlayingMoviesdata, setNowPlayingMoviesData] = useState([]);
  const [latestMoviesdata, setLatestMoviesData] = useState([]);
  const [mostPopularTVSeries, setMostPopularTVSeries] = useState([]);
  const [topRatedTVSeries, setTopRatedTVSeries] = useState([]);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseOne = () => setIsOpen(false);
  const handleShowOne = () => setIsOpen(true);
  const handleCloseTwo = () => setShowModal(false);
  const handleShowTwo = () => setShowModal(true);
  const handleCloseThree = () => setOpen(false);
  const handleShowThree = () => setOpen(true);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    //getMovieList(setMovieData);
    getPopularMoviesList(setPopularMovieData);
    getLatestMovies(setLatestMoviesData);
    getNowPlayingMovies(setNowPlayingMoviesData);
    getUpcomingMovies(setUpcomingMoviesData);
    getTopRatedMovies(setTopRatedMoviesData);
    //getMostPopularTVSeries(setMostPopularTVSeries);
    getTopRatedTVSeries(setTopRatedTVSeries, setLoading);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <CardGroup className="mx-5 my-5">
            {topRatedTVSeries.map((entry, index) => (
              <Col style={{ display: "flex" }}>
                <Col lg={3} className="mx-2 my-2">
                  <Card style={{ width: "18rem" }}>
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

export default TVList;
