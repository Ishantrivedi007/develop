import React, { useState } from "react";
import { Container, Carousel, Col, Card, CardGroup } from "react-bootstrap";
import Movie from "./images/Moviefirst.png";
import Music from "./images/MusicTwo.jpg";
import openShop from "./images/openShop.jpg";
import Poster from "./images/Poster.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content />
      <meta
        name="author"
        content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
      />
      <meta name="generator" content="Hugo 0.101.0" />
      <title>Carousel Template · Bootstrap v5.2</title>
      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.2/examples/carousel/"
      />
      <link
        href="/docs/5.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        href="/docs/5.2/assets/img/favicons/apple-touch-icon.png"
        sizes="180x180"
      />
      <link
        rel="icon"
        href="/docs/5.2/assets/img/favicons/favicon-32x32.png"
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href="/docs/5.2/assets/img/favicons/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
      />
      <link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json" />
      <link
        rel="mask-icon"
        href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg"
        color="#712cf9"
      />
      <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico" />
      <meta name="theme-color" content="#712cf9" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    ",
        }}
      />
      {/* Custom styles for this template */}

      <main>
        {/* Marketing messaging and featurettes
  ================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}

        <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold" style={{ color: "white" }}>
              Welcome To D-FLIX!
            </h1>
            <p
              className="col-md-8 fs-4 "
              style={{ marginLeft: "200px", color: "white" }}
            >
              A sample Web-based Application on React to understand API
              integration and how to deal with Data Arrays. Start your Journey
              with either Movies or Music and search the information that you
              always wanted to know!
            </p>
            <a href="movies">
              {" "}
              <button className="btn btn-primary btn-lg" type="button">
                Start your Journey!
              </button>
            </a>
          </div>
        </div>
        <div className="container marketing">
          {/* Three columns of text below the carousel */}

          {/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2
                className="featurette-heading display-5 fw-normal lh-1"
                style={{ color: "white" }}
              >
                Search Info on Every Movie.{" "}
              </h2>
              <p className="lead" style={{ color: "white" }}>
                With the help of TMDB's Open Source API, search the vast
                database of Movies.
              </p>
              <p className="lead" style={{ color: "white" }}>
                Also find a Sample TV Series section there as well. Coming Soon
                with Search Functionality.
              </p>
            </div>
            <div className="col-md-5">
              <Card.Img height={500} width={500} src={Movie} alt=""></Card.Img>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2
                className="featurette-heading fw-normal lh-1 display-5"
                style={{ color: "white" }}
              >
                Song Lyrics are also Here!
              </h2>
              <p className="lead" style={{ color: "white" }}>
                We have integrated Genius Database API also for you. Now Search
                any Song lyrics!
              </p>
              <p className="lead" style={{ color: "white" }}>
                Coming Soon with Save Feature and personalised DB of Lyrics!
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <Card.Img height={500} width={500} src={Music} alt=""></Card.Img>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2
                className="featurette-heading fw-normal lh-1 display-5"
                style={{ color: "white" }}
              >
                And lastly, Our very Own Shop.{" "}
              </h2>
              <p className="lead" style={{ color: "white" }}>
                A mock Representation to give you an idea of how a merchandise
                shop can be implemented in this Web Application.
              </p>
              <p className="lead" style={{ color: "white" }}>
                You can still find some mock products that were added to provide
                a basic representation.
              </p>
            </div>
            <div className="col-md-5">
              <Card.Img
                height={500}
                width={500}
                src={openShop}
                alt=""
              ></Card.Img>
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* /END THE FEATURETTES */}
        </div>
        {/* /.container */}
      </main>
    </div>
  );
};

export default Home;
