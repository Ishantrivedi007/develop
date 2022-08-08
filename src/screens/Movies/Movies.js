import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getTopRatedTVSeries,
} from "./Movies.services";
import {
  Container,
  Table,
  Card,
  Button,
  Col,
  CardGroup,
  Modal,
  FormControl,
  Spinner,
  Row,
} from "react-bootstrap";
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
  Legend,
} from "recharts";
import "./Movies.styles.css";
import axios from "axios";

const Movies = () => {
  const [moviedata, setMovieData] = useState([]);

  const [topRatedMoviesdata, setTopRatedMoviesData] = useState([]);
  const [nowPlayingMoviesdata, setNowPlayingMoviesData] = useState([]);

  const [topRatedTVSeries, setTopRatedTVSeries] = useState([]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [tvModalOpen, setTVModalOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseOne = () => setIsOpen(false);
  const handleShowOne = () => setIsOpen(true);
  const handleCloseTwo = () => setShowModal(false);
  const handleShowTwo = () => setShowModal(true);
  const handleCloseThree = () => setOpen(false);
  const handleShowThree = () => setOpen(true);
  const handleCloseTV = () => setTVModalOpen(false);
  const handleShowTV = () => setTVModalOpen(true);

  useEffect(() => {
    getNowPlayingMovies(setNowPlayingMoviesData, setLoading);
    getTopRatedMovies(setTopRatedMoviesData);
    getTopRatedTVSeries(setTopRatedTVSeries, setLoading);
  }, []);

  const Bardata = topRatedMoviesdata.slice(0, 5);
  const NewLineData = topRatedTVSeries.slice(0, 5);

  const barColors = ["#1f77b4", "#ff7f0e", "#F2B37C", "#96d3e3", "#EF97AB"];

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
            <span style={{ fontWeight: "bold" }}>Rating by Users: </span>
            <span>{nowPlayingMoviesdata[2]?.vote_average}</span>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>Release Date: </span>
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
            <span style={{ fontWeight: "bold" }}>Rating by Users: </span>
            <span>{nowPlayingMoviesdata[3]?.vote_average}</span>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>Release Date: </span>
            <span>{nowPlayingMoviesdata[3]?.release_date}</span>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseThree}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={tvModalOpen} onHide={handleCloseTV}>
        <Modal.Header closeButton>
          <Modal.Title>{topRatedTVSeries[0]?.original_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {" "}
            <img
              src={
                "https://image.tmdb.org/t/p/w200/" +
                topRatedTVSeries[0]?.poster_path
              }
              alt=""
              height="282.172px"
              width="300px"
            ></img>
          </Col>
          <Col>
            <span>{topRatedTVSeries[0]?.overview}</span>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>Rating by Users: </span>
            <span>{topRatedTVSeries[0]?.vote_average}</span>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTV}>
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
              <Col lg={6} className="mx-2 my-2 p-2">
                <FormControl
                  id="movie_search"
                  type="text"
                  placeholder="Search your Movie"
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                  }}
                  style={{ borderRadius: "40px" }}
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
              disabled={moviedata?.length === 0}
            >
              Hide Table
            </Button>
          </div>

          {moviedata?.length !== 0 ? (
            <Container>
              <Col>
                <Table bordered hover style={{ backgroundColor: "white" }}>
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
              </Col>
            </Container>
          ) : null}
          {moviedata?.length === 0 ? (
            <Container>
              <Row>
                <Col>
                  <span
                    style={{
                      marginRight: "900px",
                      fontSize: 20,
                      fontWeight: "bolder",
                      color: "white",
                    }}
                  >
                    <u> Latest Movies</u>
                  </span>

                  <Link to={"/movielist"}>
                    <span>View More</span>
                  </Link>
                </Col>
              </Row>
            </Container>
          ) : null}
          {moviedata?.length === 0 ? (
            <div>
              <CardGroup className="mx-5 my-5">
                <Col style={{ display: "flex" }}>
                  <Col lg={3}>
                    <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
                    <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
                    <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
                    <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
            <Container fluid>
              <Col className="flex">
                <Col lg className="mx-2 my-3">
                  <Card style={{ borderRadius: 43 }}>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart
                        width={500}
                        height={300}
                        data={NewLineData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />

                        <YAxis
                          label={{
                            value: "Popularity",
                            angle: "-90",
                            position: "inside-left",
                          }}
                          dx={10}
                          // dy={20}
                          // minTickGap={-100}
                          tickMargin={10}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="popularity"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="vote_average"
                          name="Avg. User Rating"
                          stroke="#82ca9d"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <Card.Text style={{ fontWeight: "bolder" }}>
                      <u>"New TV Shows on the Block"</u>
                    </Card.Text>
                  </Card>
                </Col>
              </Col>
            </Container>
          ) : null}

          {moviedata?.length === 0 ? (
            <Container fluid>
              <Col className="flex">
                <Col lg className="mx-2 my-3">
                  <Card style={{ borderRadius: 43 }}>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                        data={Bardata}
                        width={500}
                        height={400}
                      >
                        <XAxis dataKey="title" stroke="#000000" />
                        <YAxis
                          stroke="#000000"
                          dataKey="popularity"
                          label={{
                            value: "Popularity",
                            angle: "-90",
                            position: "inside-left",
                          }}
                          dx={10}
                          // dy={20}
                          // minTickGap={-100}
                          tickMargin={10}
                        />
                        <Tooltip
                          wrapperStyle={{ width: 250, backgroundColor: "#ccc" }}
                          formatter={function (popularity) {
                            return `${popularity}`;
                          }}
                        />
                        <Bar
                          dataKey="popularity"
                          fill="#00a0fc"
                          stroke="#000000"
                          strokeWidth={1}
                        >
                          {Bardata.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={barColors[index % 20]}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                    <Card.Text style={{ fontWeight: "bolder" }}>
                      <u>"Most Popular Movies of All Time"</u>
                    </Card.Text>
                  </Card>
                </Col>
              </Col>
            </Container>
          ) : null}

          {moviedata?.length === 0 ? (
            <Container>
              <Row className="my-4">
                <Col style={{ marginTop: "30px" }}>
                  <span
                    style={{
                      marginRight: "900px",
                      fontSize: 20,
                      fontWeight: "bolder",
                      color: "white",
                    }}
                  >
                    <u> Latest in TV</u>
                  </span>

                  <Link to={"/tvlist"}>
                    <span>View More</span>
                  </Link>
                </Col>
              </Row>
            </Container>
          ) : null}
          {moviedata?.length === 0 ? (
            <div>
              <CardGroup className="mx-5 my-5">
                <Col>
                  <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
                      <Button variant="primary" onClick={handleShowTV}>
                        See Info
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
                  <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
                  <Card style={{ width: "18rem", borderRadius: "40px" }}>
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
      <Container></Container>
    </>
  );
};

export default Movies;
