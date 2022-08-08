import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "./Pdppage.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Cover from "./images/7.jpg";

const ProductMobile = () => {
  return (
    <div className="totalpdpage">
      <Carousel slide={false} className="Carousel">
        <Carousel.Item>
          <img className="imagesize" src={Cover} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Cover} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="imagesize" src={Cover} alt="Third slide" />
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
            Ideal for family lounge or living room wall decor, bedroom, cafe and
            restaurant, kids room, commercial spaces etc. , non-tearable and
            waterproof. These wall poster decorate your home and instantly
            brighten day and boost your motivation. Largest collection of
            Posters, decals, wallpapers, paintings, home and wall decor, office
            stationery and Inspirational, quirky and artsy gifts for all ages by
            Paper Plane Design. Note: The surface you wish to attach your decal
            must be clean and free from dust, grease or any other contamination.
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
