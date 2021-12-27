import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/team/mint.gif";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div className="about-control">
        <Container>
          <Row>
            <Col md={6} xs={12} className="about-description">
              <header>
                <span>7777</span> TWERPS.
                <br />
                <span>1</span> FUTURE.
              </header>
              <p>
                Twerps, They’re more than just one of the best ecosystems in the
                Metaverse, protecting the surrounding land from havoc and what
                not. An intelligent new collection of 7,777 randomly generated
                twerps ready to take on the future. They’ve been working on a
                special portal to freedom since the dawn of time and now they’re
                here to take that massive next step into Base 7. It’s a whole
                new world full of fun if you dare to look close enough. Sure,
                theres a lot of adventure and lots of mayhem going down in The
                City, but it’s a place where you can be who you are and share
                with your fellow Twerps.{" "}
              </p>
              <p>
                Join our family of Twerps! We’re a community of fun, fabulous,
                and fresh collectors ready to party whenever the beat drops.
                fighting on the Ethereum blockchain, The Crypto Twerps and their
                owners become one with The Metaverse, where it’s always go-time
                for a good time. It's a dangerous place, but it's our home of
                mayhem and debauchery. Welcome to Base 7 and get ready to have a
                blast.{" "}
              </p>

              {/* <div><YButton text='COMING SOON' /></div> */}
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 10px", borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
