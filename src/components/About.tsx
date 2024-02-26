import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Image from "next/image";

const images = {
  first: "/logoo.png",
  second: "/comp.png",
  third: "/people.png",
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
      <h1 className="text-5xl text-center mt-32 font-arialBlack">Who We Are</h1>
      <BackgroundAnimation />
      <div
        className="relative flex flex-col container mx-auto px-4 max-w-6xl min-h-screen"
        style={{ zIndex: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center my-10">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              height: "400px",
              transform: "skewY(10deg)", // Skew container
              overflow: "hidden",
              boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              opacity: 0.8,
            }}
          >
            <Image
              src={images.first}
              alt="Innovative Software Solutions"
              fill
              style={{ objectFit: "cover", transform: "skewY(-10deg)" }} // Reverse skew for image
            />
          </div>

          <div className="md:w-2/2 w-full md:ml-10 text-center md:text-left  mt-10 md:mt-0">
            <h2 className="text-3xl font-arialBlack text-center mb-6">Custom Software</h2>
            <p className="font-sans text-xl text-center">
              Pioneering the digital frontier, Holy Grail Studio offers trendsetting
              software and design solutions. From apps and websites to XR and gaming, we
              transform visions into reality, ensuring excellence across all platforms for
              businesses big and small.
            </p>
          </div>
        </div>
        {/* Mission section with responsive adjustments */}
        <div className="flex flex-col-reverse md:flex-row items-center my-10">
          <div className="md:w-2/2 w-full md:mr-10 text-center md:text-right mt-10 md:mt-0">
            <h2 className="text-4xl mb-6 text-center font-arialBlack">Mission</h2>
            <p className="font-sans text-xl text-center">
              Our mission is to drive innovation with exceptional software services, from
              web to immersive experiences, pushing boundaries to turn visionary ideas
              into realities.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              height: "400px",
              transform: "skewY(-10deg)", // Skew container
              overflow: "hidden",
              boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              opacity: 0.8,
            }}
          >
            <Image
              src={images.second}
              alt="Our Mission"
              fill
              style={{ objectFit: "cover", transform: "skewY(10deg)" }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center my-10">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              height: "400px",
              transform: "skewY(10deg)", // Skew container
              overflow: "hidden",
              boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              opacity: 0.8,
            }}
          >
            <Image
              src={images.third}
              alt="Foundations of Success"
              fill
              style={{ objectFit: "cover", transform: "skewY(-10deg)" }}
            />
          </div>

          <div className="md:w-2/2 w-full md:ml-10 text-center md:text-left  mt-10 md:mt-0">
            <h2 className="text-4xl mb-6 text-center font-arialBlack ">
              Foundations of Success
            </h2>
            <p className="font-sans text-xl text-center">
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
