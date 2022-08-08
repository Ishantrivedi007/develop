import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutUsStyles.css";

const AboutUs = () => {
  return (
    <div>
      <div className="section">
        <h1>Our Company</h1>
      </div>
      <div>
        <p className="section-2">
          At DFLEX, we want to entertain the world. Whatever your taste, and no
          matter where you live, we give you access to best-in-class TV series,
          documentaries, feature films and mobile games. Our members control
          what they want to watch, when they want it, with no ads, in one simple
          subscription. We’re streaming in more than 30 languages and 190
          countries, because great stories can come from anywhere and be loved
          everywhere. We are the world’s biggest fans of entertainment, and
          we’re always looking to help you find your next favorite story.
        </p>
      </div>
      <div className="section-3">
        <h1 className="t-statement">Vision, Mission and Values</h1>
        <div className="threetitles">
          <div className="threetitledivideo">
            <h3 className="heder">
              Our Vision
              <div>
                <p className="para">
                  Becoming the best global entertainment distribution service.
                  Licensing entertainment content around the world, creating
                  markets that are accessible to film makers and helping content
                  creators around the world to find a global audience.’ The
                  brand promise is a quest;
                </p>
              </div>
            </h3>
            <h3 className="heder">
              Our Mission
              <div>
                <p className="para">
                  Our core strategy is to grow our streaming subscription
                  business domestically and globally. We are continuously
                  improving the customer experience with a focus on expanding
                  our streaming content, enhancing our user interface and
                  extending our streaming service to even more
                  internet-connected devices, while staying within the
                  parameters of our consolidated net income and operating
                  segment contribution profit targets.
                </p>
              </div>
            </h3>
            <h3 className="heder">
              Our Core Values
              <div>
                <p className="para">
                  At Netflix, we aspire to entertain the world—creating great
                  stories from anywhere and offering greater choice and control
                  for people everywhere. To help us succeed, we've created an
                  unusual employee culture.
                </p>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
