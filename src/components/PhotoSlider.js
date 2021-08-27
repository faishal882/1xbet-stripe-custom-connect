import React from "react";
import "../CSS/PhotoSlider.css";
import { Carousel } from "react-bootstrap";

function PhotoSlider() {
  return (
    <container className="slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://v2l.cdnsfree.com/genfiles/cms/designed_banners/1/image/78fb370dfbe7a4adcb08be93a47223ce.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://v2l.cdnsfree.com/genfiles/cms/designed_banners/1/image/c83ff3def81a4b7a15059173f61c5b17.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://v2l.cdnsfree.com/genfiles/cms/designed_banners/1/image/f2c4e2b71a14cc04d1feecff92248ed2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://v2l.cdnsfree.com/genfiles/cms/designed_banners/1/image/5abda25d1e75a7d182c7793ad95b1c3d.jpg"
            alt="Fourth Slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://v2l.cdnsfree.com/genfiles/cms/designed_banners/1/image/087a339580a24fe7c45c0efaaf22dd92.jpg"
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </container>
  );
}

export default PhotoSlider;
