import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "./Pdppage.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Glasses from "./images/8.png";

const Productsunglasses = () => {
  return (
    <div className="totalpdpage">
      <Carousel slide={false} className="Carousel">
        <Carousel.Item>
          <img className="imagesize" src={Glasses} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Glasses} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Glasses} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="boxx">
        <div className="description">
          <p className="product_title">ADDIDAS TSHIRTS</p>
          <div class="p-list">
            <span>
              M.R.P. : <i className="fa fa-inr"></i>{" "}
              <del className="offer"> 1399 </del>
            </span>
            <span className="price"> Rs. 699 </span>
          </div>
          <div className="_p-features">
            <span className="des"> Description About this product:- </span>
            We use 100% UV400 protective coating which can block 99% of harmful
            UVA UVB and UVC rays, and POLARIZED coating which can also filter
            out 99% of reflected glare without haze or optical distortion. So
            our advanced polarized sunglasses provide a high clarity vision in
            front of you to see clearly and more comfortably. The Advanced
            quality of alloy material was in the exquisite process during the
            streamline under manufacturing to be worn softly and easily. From
            the classic style brand design which has the modern and ergonomic
            frame. They are the ideal choice for daily collocation. Take them
            when you go out, no matter driving, travelling, fishing, hiking,
            climbing or other outdoor activaties, just show your personality and
            charm!
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

export default Productsunglasses;
