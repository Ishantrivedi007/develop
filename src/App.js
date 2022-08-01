import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home";
import Music from "./screens/Music/Music";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./screens/Movies/Movies";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Home />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" exact element/> */}
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/music" exact element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
