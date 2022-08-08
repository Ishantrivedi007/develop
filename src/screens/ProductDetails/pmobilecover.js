import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "./Pdppage.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const ProductMobile = () => {
  return (
    <div className="totalpdpage">
      <Carousel slide={false} className="Carousel">
        <Carousel.Item>
          <img className="imagesize" src="./images/1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src="./images/1.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src="./images/1.jpg" alt="Third slide" />
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
            Care Instructions: Machine Wash Fit Type: Regular Fit Fabric Type:
            100% Cotton, Pattern name: Checkered Ocassion: Casual and formal
            Create a lasting impression in this Regular Fit Men’s T-Shirt.
            Crafted in Premium, Bio-washed 100% Cotton, which is breathable,
            comfortable, skin friendly, odourless and all natural. This T-shirt
            has Checkered pattern, has half sleeve and a round collar which is
            stretchy and durable and is definitely a must-have in your wardrobe.
            Care Instruction : Machine wash with similar colours
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

export default ProductMobile;
