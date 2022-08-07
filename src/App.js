import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import Music from "./screens/Music/Music";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./screens/Movies/Movies";
import Header from "./components/Header";
import MovieList from "./screens/Movies/MovieList";
import TVList from "./screens/Movies/TVList";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/movielist" exact element={<MovieList />} />
          <Route path="/tvlist" exact element={<TVList />} />
          <Route path="/music" exact element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
