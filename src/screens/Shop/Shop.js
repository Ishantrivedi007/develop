import React from "react";
import "./ShopStyles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import One from "../ProductDetails/images/1.jpg";
import Two from "../ProductDetails/images/2.png";
import Three from "../ProductDetails/images/3.jpg";
import Four from "../ProductDetails/images/4.jpg";
import Five from "../ProductDetails/images/5.jpg";
import Six from "../ProductDetails/images/6.jpg";
import Seven from "../ProductDetails/images/7.jpg";
import Eight from "../ProductDetails/images/8.png";
import Nine from "../ProductDetails/images/10.jpg";

const Shop = () => {
  return (
    <div className="SHOP">
      <div className="WHOLE p-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="IMGA" variant="top" src={One} />
          <Card.Body>
            <Card.Title className="TITLE "> NIKE TSHIRT</Card.Title>
            <div className="BTN">
              <Button
                href="http://localhost:3000/productpage"
                variant="primary "
              >
                KNOW MORE
              </Button>
            </div>
          </Card.Body>
        </Card>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="IMGA" variant="top" src={Two} />
            <Card.Body>
              <Card.Title className="TITLE "> ADDIDAS CAP</Card.Title>
              <div className="BTN">
                <Button href="http://localhost:3000/pcap" variant="primary ">
                  KNOW MORE
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="IMGA" variant="top" src={Three} />
            <Card.Body>
              <Card.Title className="TITLE "> SLIENCE POSTER</Card.Title>
              <div className="BTN">
                <Button href="http://localhost:3000/poster" variant="primary ">
                  KNOW MORE
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="IMGA" variant="top" src={Nine} />
            <Card.Body>
              <Card.Title className="TITLE ">TSHIRT</Card.Title>

              <div className="BTN">
                <Button href="http://localhost:3000/tshirt" variant="primary ">
                  KNOW MORE
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="WHOLE mt-5 ml-3">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="IMGA" variant="top" src={Five} />
            <Card.Body>
              <Card.Title className="TITLE ">APPLE AIRPODS</Card.Title>

              <div className="BTN">
                <Button href="http://localhost:3000/airpods" variant="primary ">
                  KNOW MORE
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="IMGA" variant="top" src={Six} />
            <Card.Body>
              <Card.Title className="TITLE ">LUXURY WATCH</Card.Title>

              <div className="BTN">
                <Button href="http://localhost:3000/watch" variant="primary ">
                  KNOW MORE
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="IMGA" variant="top" src={Seven} />
            <Card.Body>
              <Card.Title className="TITLE ">AVENGERS MOBILE COVER</Card.Title>

              <div className="BTN">
                <Button href="http://localhost:3000/mobile" variant="primary ">
                  KNOW MORE
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="IMGA" variant="top" src={Eight} />
            <Card.Body>
              <Card.Title className="TITLE ">SUNGLASESS</Card.Title>

              <div className="BTN">
                <Button
                  href="http://localhost:3000/sunglasses"
                  variant="primary "
                >
                  KNOW MORE
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shop;
