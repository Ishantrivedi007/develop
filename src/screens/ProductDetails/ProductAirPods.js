import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "./Pdppage.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pods from "./images/5.jpg";

const ProductAirPods = () => {
  return (
    <div className="totalpdpage">
      <Carousel
        slide={false}
        className="Carousel"
        //style={{ marginTop: "100px" }}
      >
        <Carousel.Item>
          <img className="imagesize" src={Pods} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Pods} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Pods} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="boxx">
        <div className="description">
          <p className="product_title">Apple Air Pods</p>
          <div class="p-list">
            <span>
              M.R.P. : <i className="fa fa-inr"></i>{" "}
              <del className="offer"> 1399 </del>
            </span>
            <span className="price"> Rs. 699 </span>
          </div>
          <div className="_p-features">
            <span className="des"> Description About this product:- </span>
            In-Ear True Wireless Stereo Earphones with Hi-Fi Audio & High Bass;
            Built-in Mic in Each Earbud for Stereo Calls; Ergonomic,
            Lightweight, Secure-fit & Sweat/Splash Resistant Earbuds; Made in
            India On-the earbuds multi-function buttons allow calls & music
            control for a hands-free experience. Inline Remote : No Bluetooth
            5.0; Fast Pairing; 10m Wireless Range; 4 Hours Playback Time
            (Earbuds) & 8 Hours Extended Playtime using Charging Case; 3.5 Hours
            Talk-time; 1.2 Hour Charge Time 8mm Dynamic Driver; Voice Assistant
            Support; Binaural Call Function; Stereo/Mono Use; 300mAh Digital
            Display Magnetic Charging Case; Micro USB Charging Cable Provided
          </div>
          <div className="button_pdes">
            <Button type="button" className="btn btn-secondary ">
              ADD TO CART
            </Button>
            <Button
              id="spec-btn"
              type="button"
              className="btn btn-success ml-5"
            >
              BUY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAirPods;
