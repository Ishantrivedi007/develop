import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "./Pdppage.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Cap from "./images/2.png";

const ProductCap = () => {
  return (
    <div className="totalpdpage">
      <Carousel
        slide={false}
        className="Carousel"
        //style={{ marginTop: "100px" }}
      >
        <Carousel.Item>
          <img className="imagesize" src={Cap} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Cap} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Cap} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="boxx">
        <div className="description">
          <p className="product_title">ADDIDAS CAP</p>
          <div class="p-list">
            <span>
              M.R.P. : <i className="fa fa-inr"></i>{" "}
              <del className="offer"> 1399 </del>
            </span>
            <span className="price"> Rs. 699 </span>
          </div>
          <div className="_p-features">
            <span className="des"> Description About this product:- </span>
            Lightweight / Durable / Smooth. Great Fit for Most Head Sizes.
            Material: acrylic. One size fits for most people. Special design
            will make you attractive, Ideal for men women. Stop risking your
            health and safety by walking outdoors without adequate sun
            protection. Protect your skin from harmful UV rays and keep your
            hair out of your face and eyes by wearing this comfortable cap
            during all your outdoor activities. Made of breathable, it is the
            perfect companion for your active lifestyle.Use the convenient
            Velcro closure to custom fit the baseball cap to your head and
            ensure maximum comfort and a secure fit at all times.The hottest
            fashion styles for men & women, this cap come in a free size that
            can be adjusted on anybody's head. Great comfortable fit, perfect
            for outdoor activities. You can pair off with your favorite outfit.
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

export default ProductCap;
