"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export const slides = [
  {
    background: "vdp2.png",
    text: "Vet Logistics Solutions",
  },
  {
    background: "vbm.png",
    text: "Video Bookmark App",
  },
  {
    background: "ff.png",
    text: "Forever Friends Website",
  },
];

class Slide extends React.Component {
  render() {
    let slideStyle = { backgroundImage: `url(${this.props.background})` };
    return (
      <div
        className="slider__slide"
        data-active={this.props.active.toString()}
        style={slideStyle}
      >
        <div className="slider__slide__text">{this.props.text}</div>
      </div>
    );
  }
}

class Slider extends React.Component {
  state = { activeSlide: 0 };

  prevSlide = () => {
    console.log("Prev slide clicked");
    let slide =
      this.state.activeSlide - 1 < 0
        ? this.props.slides.length - 1
        : this.state.activeSlide - 1;
    this.setState(
      {
        activeSlide: slide,
      },
      () => console.log(this.state.activeSlide)
    );
  };

  nextSlide = () => {
    console.log("Next slide clicked");
    let slide =
      this.state.activeSlide + 1 < this.props.slides.length
        ? this.state.activeSlide + 1
        : 0;
    this.setState({
      activeSlide: slide,
    });
  };

  render() {
    return (
      <div id="our-work" className="bg-black">
        <h1 className="text-6xl text-center mt-32 font-arialBlack">Our Work</h1>
        <div id="slide" className="container-fluid">
          {this.props.slides.map((slide, index) => (
            <Slide
              key={index}
              background={slide.background}
              text={slide.text}
              active={index === this.state.activeSlide}
            />
          ))}
          <div className="leftArrow" onClick={this.nextSlide}>
            <FontAwesomeIcon icon={faArrowCircleRight} size="4x" />
          </div>
          <div className="rightArrow" onClick={this.prevSlide}>
            {" "}
            <FontAwesomeIcon icon={faArrowCircleLeft} size="4x" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
