import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "./Pdppage.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Watch from "./images/6.jpg";

const ProductWatch = () => {
  return (
    <div className="totalpdpage">
      <Carousel
        slide={false}
        className="Carousel"
        //style={{ marginTop: "100px" }}
      >
        <Carousel.Item>
          <img className="imagesize" src={Watch} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Watch} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Watch} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="boxx">
        <div className="description">
          <p className="product_title">Bluetooth Watch</p>
          <div class="p-list">
            <span>
              M.R.P. : <i className="fa fa-inr"></i>{" "}
              <del className="offer"> 1399 </del>
            </span>
            <span className="price"> Rs. 699 </span>
          </div>
          <div className="_p-features">
            <span className="des"> Description About this product:- </span>
            Fire-Boltt Talk 2 enables you to make and receive calls directly
            from your watch via the built-in speaker and microphone. This
            smartwatch features a dial pad, option to access recent calls & sync
            your phone’s contacts.;【Dual Button Technology】- This smartwatch
            has dual buttons to carry out the tasks more efficiently and easily.
            Use the first button to change the menu style and to return to the
            first page, use the second button to quickly land to the exercise
            page
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

export default ProductWatch;
