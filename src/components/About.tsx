import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

const images = {
  first: "/hg.jpg",
  second: "/sword.png",
  third: "/city.jpeg",
};

const AboutSection = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen"
      style={{
        background:
          "radial-gradient(circle at center, transparent, rgba(0, 0, 0, 0.5) 80%)",
      }}
    >
      <BackgroundAnimation />
      <div
        className="relative flex flex-col container mx-auto px-4 max-w-6xl min-h-screen"
        style={{ zIndex: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center my-10">
          <img
            src={images.first}
            alt="Innovative Software Solutions"
            className="circular-image opacity-75"
          />
          <div className="md:w-2/2 w-full md:ml-10 text-center md:text-left">
            <h2 className="text-3xl font-arialBlack text-center mb-6">
              Innovative Software Solutions
            </h2>
            <p className="font-sans text-center">
              We craft affordable, high-quality software solutions, leveraging
              cutting-edge technologies for comprehensive services across development,
              website creation, and video games, ensuring accessibility for all business
              sizes.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center my-10">
          <div className="md:w-2/2 w-full md:mr-10 text-center md:text-right">
            <h2 className="text-3xl mb-6 text-center font-arialBlack ">Mission</h2>
            <p className="font-sans text-center">
              Our mission is to drive innovation with exceptional software services, from
              web to immersive experiences, pushing boundaries to turn visionary ideas
              into realities.
            </p>
          </div>
          <img
            src={images.second}
            alt="Our Mission"
            className="circular-image opacity-75 md:order-2"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center my-10">
          <img
            src={images.third}
            alt="Our Values"
            className=" opacity-75 circular-image"
          />
          <div className="md:w-2/2 w-full md:ml-10 text-center md:text-left">
            <h2 className="text-3xl mb-6 text-center font-arialBlack ">
              Foundations of Success
            </h2>
            <p className="font-sans text-center">
              Quality and passion drive us to deliver exceptional solutions. Our
              client-centric approach ensures transformative solutions with a deep
              understanding of industry needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
