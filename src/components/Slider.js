"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export const slides = [
  {
    background: "avp.png",
    text: "Mixed Reality Apps and Games",
  },
  {
    background: "webapp.png",
    text: "Web Applications",
  },
  {
    background: "ff.png",
    text: "Website Creation and Design",
  },
  {
    background: "VidBM.png",
    text: "Mobile Apps",
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
    let slide =
      this.state.activeSlide - 1 < 0
        ? this.props.slides.length - 1
        : this.state.activeSlide - 1;
    this.setState({
      activeSlide: slide,
    });
  };

  nextSlide = () => {
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
      <div id="our-work" className="bg-black py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl text-center mt-8 md:mt-32 font-arialBlack text-white">What We Do</h1>
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
            <FontAwesomeIcon icon={faArrowCircleRight} size="2x" className="md:text-4xl" />
          </div>
          <div className="rightArrow" onClick={this.prevSlide}>
            <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" className="md:text-4xl" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
