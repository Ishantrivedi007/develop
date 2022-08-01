import React, { useState, useEffect } from "react";
import { getLyrics, getSong } from "genius-lyrics-api";

//import { getMusicList } from "./Music.services";
const Music = () => {
  const [musicdata, setMusicData] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // useEffect(() => {
  //   getMusicList(setMusicData);
  // }, []);

  //console.log("title", musicdata);

  const options = {
    apiKey: "Q4zP-L6VbpAOnIKULBoWIOkL1j556fdRN64TXHAz_YZ01fwpyB0NGfl466FaxRvn",
    title: "grenade",
    artist: "Bruno",
    client_id:
      "aQksVr6xt5tMbr-XC4Xr0GB16cKeZ4m4u0EWKgX2YyMLoNPaFeO4j5MJYJ_yJXJT",
    client_secret:
      "BvsEKBfR32c6-fQ_Gi_xNPeH7vrNqym3NmAZi3hs6ULlzCq1oK4o9CDiJ8eQQJMOdLHtpi6T7F_Wwgia4Rk2cw",
    "Access-Control-Allow-Origin": null,
    optimizeQuery: true,
  };

  //const R = getLyrics(options).then((lyrics) => console.log(lyrics));

  getSong(options).then((song) => console.log(song.albumArt, song.lyrics));

  return (
    <>
      {" "}
      <div>
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div>{musicdata}</div>
    </>
  );
};

export default Music;
