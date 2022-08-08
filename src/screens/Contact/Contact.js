import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <div classname="contactform">
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4 className="Classtext">CONTACT FORM</h4>
        <Form>
          <Form.Group className="form-gap">
            <Form.Label className="TEXT">Enter your full name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
          <Form.Group className="form-gap">
            <Form.Label className="TEXT">Enter your email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your your email address"
            />
          </Form.Group>
          <Form.Group className="form-gap">
            <Form.Label className="TEXT">Description Of The Issue:</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
          </Form.Group>
          <Form.Group className="form-gap">
            <Form.Label className="TEXT">TOKEN ID:</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
          </Form.Group>
          <Form.Group className="form-gap">
            <Form.Label className="TEXT"> Enter your mobile number:</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
          </Form.Group>

          <Button className="BTN-CONTACT p-2" variant="success" type="submit">
            Click here to submit form
          </Button>
        </Form>
      </div>
      <div className="address">
        <div className="contact-box"></div>
      </div>
    </div>
  );
};

export default Contact;
