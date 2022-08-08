import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import Music from "./screens/Music/Music";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./screens/Movies/Movies";
import Header from "./components/Header";
import MovieList from "./screens/Movies/MovieList";
import TVList from "./screens/Movies/TVList";
import ProductMobile from "./screens/ProductDetails/ProductMobile";
import ProductTshirts from "./screens/ProductDetails/ProductTshirts";
import ProductPoster from "./screens/ProductDetails/ProductPoster";
import ProductSunglasses from "./screens/ProductDetails/ProductSunglasses";
import ProductPage from "./screens/ProductDetails/ProductPage";
import ProductCap from "./screens/ProductDetails/ProductCap";
import Shop from "./screens/Shop/Shop";
import AboutUs from "./screens/AboutUs/AboutUs";
import Contact from "./screens/Contact/Contact";
import ProductAirPods from "./screens/ProductDetails/ProductAirPods";
import ProductWatch from "./screens/ProductDetails/ProductWatch";

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
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/mobile" exact element={<ProductMobile />} />
          <Route path="/tshirt" exact element={<ProductTshirts />} />
          <Route path="/poster" exact element={<ProductPoster />} />
          <Route path="/sunglasses" exact element={<ProductSunglasses />} />
          <Route path="/productpage" exact element={<ProductPage />} />
          <Route path="/pcap" exact element={<ProductCap />} />
          <Route path="/airpods" exact element={<ProductAirPods />} />
          <Route path="/watch" exact element={<ProductWatch />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
