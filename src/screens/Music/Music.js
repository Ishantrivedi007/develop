import React, { useState, useEffect } from "react";
import { getSong } from "genius-lyrics-api";

import {
  Button,
  Container,
  FormControl,
  Image,
  Col,
  Spinner,
} from "react-bootstrap";

const Music = () => {
  const [musicdata, setMusicData] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchSong, setSearchSong] = useState("");
  const [searchArtist, setSearchArtist] = useState("");

  const options = {
    apiKey: "Q4zP-L6VbpAOnIKULBoWIOkL1j556fdRN64TXHAz_YZ01fwpyB0NGfl466FaxRvn",
    title: searchSong,
    artist: searchArtist,
    client_id:
      "aQksVr6xt5tMbr-XC4Xr0GB16cKeZ4m4u0EWKgX2YyMLoNPaFeO4j5MJYJ_yJXJT",
    client_secret:
      "BvsEKBfR32c6-fQ_Gi_xNPeH7vrNqym3NmAZi3hs6ULlzCq1oK4o9CDiJ8eQQJMOdLHtpi6T7F_Wwgia4Rk2cw",
    "Access-Control-Allow-Origin": null,
    optimizeQuery: true,
  };

  function ShowMusic() {
    setloading(true);
    getSong(options)
      .then((song) => setMusicData([song.albumArt, song.title, song.lyrics]))
      .finally(setloading(false));
  }

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
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
                  type="text"
                  onChange={(event, value) => {
                    setSearchSong(event.target.value);
                  }}
                  placeholder="Search the Song"
                  style={{ borderRadius: "40px" }}
                />
              </Col>
              <Col lg={4} className="mx-2 my-2 p-2">
                <FormControl
                  type="text"
                  onChange={(event, value) => {
                    setSearchArtist(event.target.value);
                  }}
                  placeholder="Search the Artist"
                  style={{ borderRadius: "40px" }}
                />
              </Col>
            </Col>
          </Container>
          <div>
            <Button
              className="my-3"
              onClick={() => {
                ShowMusic();
                console.log(musicdata);
              }}
              disabled={loading}
            >
              Search
            </Button>
          </div>{" "}
          <div>
            {musicdata !== null && musicdata[0] && (
              <Image
                thumbnail
                src={musicdata[0]}
                width="200px"
                height="200px"
                alt=""
              />
            )}
          </div>
          <div style={{ fontWeight: "bold", color: "white" }}>
            {musicdata[1]}
          </div>
          <div style={{ whiteSpace: "pre-wrap", color: "white" }}>
            {musicdata[2]}
          </div>
        </>
      )}
    </>
  );
};

export default Music;
