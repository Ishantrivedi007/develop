import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getLatestMovies,
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
  FormControl,
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
import { useParams } from "react-router";
import axios from "axios";
import { Formik } from "formik";

const Movies = () => {
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
  const [selectedFilters, setSelectedFilters] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [dat, SetDat] = useState("");

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
    getNowPlayingMovies(setNowPlayingMoviesData, setLoading);
    getUpcomingMovies(setUpcomingMoviesData);
    getTopRatedMovies(setTopRatedMoviesData);
    //getMostPopularTVSeries(setMostPopularTVSeries);
    getTopRatedTVSeries(setTopRatedTVSeries, setLoading);
  }, []);

  // useEffect(() => {
  //   getMovieList(searchQuery, setMovieData);
  // }, []);
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 500, pv: 2500, amt: 2500 },
    { name: "Page C", uv: 800, pv: 2900, amt: 3000 },
  ];

  const Bardata = [
    { name: "Geeksforgeeks", students: 400, color: "#01678e", total: 1000 },
    {
      name: "Technical scripter",
      students: 700,
      color: "#017fb1",
      total: 2000,
    },
    { name: "Geek-i-knack", students: 200, color: "#6bafc2", total: 3000 },
    { name: "Geek-o-mania", students: 1000, color: "#96d3e3", total: 4000 },
  ];

  const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#96d3e3"];

  // // const renderLineChart = (
  // //   <LineChart width={600} height={300} data={data}>
  // //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  // //     <CartesianGrid stroke="#ccc" />
  // //     <XAxis dataKey="name" />
  // //     <YAxis />
  // //   </LineChart>
  // );
  //console.log("latest", topRatedTVSeries);
  //console.log("NPid", topRatedMoviesdata);

  //Another method to make an API CALL---
  function SearchForMovie(e) {
    var API = `https://api.themoviedb.org/3/search/movie?api_key=4e353b14f43997c0c803a36b5de45a72&query=${searchQuery}&language=en-US&total_results=10`;
    if (searchQuery !== null) {
      setLoading(true);
      axios
        .get(API)
        .then(function (response) {
          console.log("response", response?.data?.results);
          setMovieData(response?.data?.results);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setLoading(false);
        });
    }
  }

  // useEffect(
  //   (e) => {
  //     getMovieList(searchQuery, SetDat);
  //   },
  //   [searchQuery]
  // );
  console.log("mus", moviedata);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{nowPlayingMoviesdata[0]?.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {" "}
            <img
              src={
                "https://image.tmdb.org/t/p/w200/" +
                nowPlayingMoviesdata[0]?.poster_path
              }
              alt=""
              height="282.172px"
              width="300px"
            ></img>
          </Col>
          <Col>
            <span>{nowPlayingMoviesdata[0]?.overview}</span>
          </Col>
          <Col>
            <span>Rating by Users: </span>
            <span>{nowPlayingMoviesdata[0]?.vote_average}</span>
          </Col>
          <Col>
            <span>Release Date: </span>
            <span>{nowPlayingMoviesdata[0]?.release_date}</span>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={isOpen} onHide={handleCloseOne}>
        <Modal.Header closeButton>
          <Modal.Title>{nowPlayingMoviesdata[1]?.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {" "}
            <img
              src={
                "https://image.tmdb.org/t/p/w200/" +
                nowPlayingMoviesdata[1]?.poster_path
              }
              alt=""
              height="282.172px"
              width="300px"
            ></img>
          </Col>
          <Col>
            <span>{nowPlayingMoviesdata[1]?.overview}</span>
          </Col>
          <Col>
            <span>Rating by Users: </span>
            <span>{nowPlayingMoviesdata[1]?.vote_average}</span>
          </Col>
          <Col>
            <span>Release Date: </span>
            <span>{nowPlayingMoviesdata[1]?.release_date}</span>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseOne}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal} onHide={handleCloseTwo}>
        <Modal.Header closeButton>
          <Modal.Title>{nowPlayingMoviesdata[2]?.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {" "}
            <img
              src={
                "https://image.tmdb.org/t/p/w200/" +
                nowPlayingMoviesdata[2]?.poster_path
              }
              alt=""
              height="282.172px"
              width="300px"
            ></img>
          </Col>
          <Col>
            <span>{nowPlayingMoviesdata[2]?.overview}</span>
          </Col>
          <Col>
            <span>Rating by Users: </span>
            <span>{nowPlayingMoviesdata[2]?.vote_average}</span>
          </Col>
          <Col>
            <span>Release Date: </span>
            <span>{nowPlayingMoviesdata[2]?.release_date}</span>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTwo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={open} onHide={handleCloseThree}>
        <Modal.Header closeButton>
          <Modal.Title>{nowPlayingMoviesdata[3]?.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {" "}
            <img
              src={
                "https://image.tmdb.org/t/p/w200/" +
                nowPlayingMoviesdata[3]?.poster_path
              }
              alt=""
              height="282.172px"
              width="300px"
            ></img>
          </Col>
          <Col>
            <span>{nowPlayingMoviesdata[3]?.overview}</span>
          </Col>
          <Col>
            <span>Rating by Users: </span>
            <span>{nowPlayingMoviesdata[3]?.vote_average}</span>
          </Col>
          <Col>
            <span>Release Date: </span>
            <span>{nowPlayingMoviesdata[3]?.release_date}</span>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseThree}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <Container>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col lg={4} className="mx-2 my-2 p-2">
                <FormControl
                  id="movie_search"
                  type="text"
                  placeholder="Search your Movie"
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    console.log("s", searchQuery);
                  }}
                />
              </Col>
            </Col>
          </Container>
          <div>
            <Button
              className="my-3"
              onClick={(e) => {
                SearchForMovie(e);
              }}
            >
              Search
            </Button>
          </div>
          <div>
            <Button
              className="my-3"
              onClick={(e) => {
                setMovieData([]);
              }}
            >
              Hide Table
            </Button>
          </div>

          {moviedata?.length !== 0 ? (
            <div>
              <Table striped>
                <thead>
                  <tr>
                    <th>Movie</th>
                    <th>Release Date</th>
                    <th>Popularity</th>
                    <th>Avg. User Ratings</th>
                  </tr>
                </thead>
                <tbody>
                  {moviedata.slice(0, 9).map((entry, index) => (
                    <tr>
                      <td>{entry.original_title}</td>
                      <td>{entry.release_date}</td>
                      <td>{entry.popularity}</td>
                      <td>{entry.vote_average}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : null}
          {moviedata?.length === 0 ? (
            <Container>
              <Col
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <span>Latest Movies</span>
              </Col>
              <Col>
                <Link to={"/movielist"}>
                  <span>View More</span>
                </Link>
              </Col>
            </Container>
          ) : null}
          {moviedata?.length === 0 ? (
            <div>
              <CardGroup className="mx-5 my-5">
                <Col style={{ display: "flex" }}>
                  <Col lg={3}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={
                          "https://image.tmdb.org/t/p/w200/" +
                          nowPlayingMoviesdata[0]?.poster_path
                        }
                        alt=""
                        height="282.172px"
                        width="194.609px"
                      />
                      <Card.Body>
                        <Card.Title>
                          {nowPlayingMoviesdata[0]?.original_title}
                        </Card.Title>
                        <Card.Text className="overflow-cell">
                          {nowPlayingMoviesdata[0]?.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={handleShow}>
                          See Info
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={
                          "https://image.tmdb.org/t/p/w200/" +
                          nowPlayingMoviesdata[1]?.poster_path
                        }
                        alt=""
                        height="282.172px"
                        width="194.609px"
                      />
                      <Card.Body>
                        <Card.Title>
                          {nowPlayingMoviesdata[1]?.original_title}
                        </Card.Title>
                        <Card.Text className="overflow-cell">
                          {nowPlayingMoviesdata[1]?.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={handleShowOne}>
                          See Info
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={
                          "https://image.tmdb.org/t/p/w200/" +
                          nowPlayingMoviesdata[2]?.poster_path
                        }
                        alt=""
                        height="282.172px"
                        width="194.609px"
                      />
                      <Card.Body>
                        <Card.Title>
                          {nowPlayingMoviesdata[2]?.original_title}
                        </Card.Title>
                        <Card.Text className="overflow-cell">
                          {nowPlayingMoviesdata[2]?.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={handleShowTwo}>
                          See Info
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={
                          "https://image.tmdb.org/t/p/w200/" +
                          nowPlayingMoviesdata[3]?.poster_path
                        }
                        alt=""
                        height="282.172px"
                        width="194.609px"
                      />
                      <Card.Body>
                        <Card.Title>
                          {nowPlayingMoviesdata[3]?.original_title}
                        </Card.Title>
                        <Card.Text className="overflow-cell">
                          {nowPlayingMoviesdata[3]?.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={handleShowThree}>
                          See Info
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Col>
              </CardGroup>
            </div>
          ) : null}
          {moviedata?.length === 0 ? (
            <Container>
              <Col
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <span>Latest in TV</span>
              </Col>
              <Col>
                <Link to={"/tvlist"}>
                  <span>View More</span>
                </Link>
              </Col>
            </Container>
          ) : null}
          {moviedata?.length === 0 ? (
            <div>
              <CardGroup className="mx-5 my-5">
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w200/" +
                        topRatedTVSeries[0]?.poster_path
                      }
                      alt=""
                      height="282.172px"
                      width="194.609px"
                    />
                    <Card.Body>
                      <Card.Title>
                        {topRatedTVSeries[0]?.original_name}
                      </Card.Title>
                      <Card.Text className="overflow-cell">
                        {topRatedTVSeries[0]?.overview}
                      </Card.Text>
                      <Button variant="primary">See Info</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w200/" +
                        topRatedTVSeries[1]?.poster_path
                      }
                      alt=""
                      height="282.172px"
                      width="194.609px"
                    />
                    <Card.Body>
                      <Card.Title>
                        {topRatedTVSeries[1]?.original_name}
                      </Card.Title>
                      <Card.Text className="overflow-cell">
                        {topRatedTVSeries[1]?.overview}
                      </Card.Text>
                      <Button variant="primary">See Info</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w200/" +
                        topRatedTVSeries[2]?.poster_path
                      }
                      alt=""
                      height="282.172px"
                      width="194.609px"
                    />
                    <Card.Body>
                      <Card.Title>
                        {topRatedTVSeries[2]?.original_name}
                      </Card.Title>
                      <Card.Text className="overflow-cell">
                        {topRatedTVSeries[2]?.overview}
                      </Card.Text>
                      <Button variant="primary">See Info</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w200/" +
                        topRatedTVSeries[3]?.poster_path
                      }
                      alt=""
                      height="282.172px"
                      width="194.609px"
                    />
                    <Card.Body>
                      <Card.Title>
                        {topRatedTVSeries[3]?.original_name}
                      </Card.Title>
                      <Card.Text className="overflow-cell">
                        {topRatedTVSeries[3]?.overview}
                      </Card.Text>
                      <Button variant="primary">See Info</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </CardGroup>
            </div>
          ) : null}
        </div>
      )}
      {moviedata?.length === 0 ? (
        <div>
          {" "}
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="amt" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amt" />
          </LineChart>
        </div>
      ) : null}
      {/* <div>
        {" "}
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="amt" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt" />
        </LineChart>
      </div> */}
      {moviedata?.length === 0 ? (
        <ResponsiveContainer width="95%" height={450}>
          <BarChart
            margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
            data={Bardata}
          >
            <XAxis dataKey="name" stroke="#000000" />
            <YAxis stroke="#000000" dataKey="students" />
            <Tooltip
              wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
              formatter={function (total) {
                return `${total}`;
              }}
            />
            <Bar
              dataKey="total"
              fill="#00a0fc"
              stroke="#000000"
              strokeWidth={1}
            >
              {Bardata.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </>
  );
};

export default Movies;
