import React from "react";
import Image from "next/image";

const FounderSection = () => {
  return (
    <section id="founder" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Founder Photo */}
          <div className="md:w-1/3 w-full mb-8 md:mb-0">
            <Image
              src="/kier2.jpg" // Replace with your actual photo path
              alt="Kieran O'Leary - Founder"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          {/* Founder Bio */}
          <div className="md:w-2/3 w-full md:ml-10">
            <h3 className="text-3xl font-arialBlack text-black mb-6">Meet Our Founder</h3>
            <p className="font-sans text-xl text-black mb-6">
              Kieran O&apos;Leary, a proud native of New York City, embodies the
              innovative spirit that defines the Big Apple. Growing up amidst the vibrant
              energy of NYC, Kieran developed a keen understanding of the dynamic needs of
              businesses striving to make their mark. This deep-rooted connection to New
              York fuels his passion for creating software solutions that empower small
              businesses to thrive in a competitive digital landscape.
            </p>
            <p className="font-sans text-xl text-black mb-6">
              With a proven track record, Kieran successfully expanded the New York branch
              of a unicorn startup and he founded a thriving recording studio in Brooklyn.
              Additionally, Kieran is a seasoned software engineer, proficient in both
              front-end and back-end development, as demonstrated by the various
              applications he has built for diverse industries. These experiences honed
              his leadership skills and instilled a commitment to excellence and customer
              satisfaction. Driven by a desire to make a meaningful impact, Kieran founded
              Holy Grail Studio - Divine Software, dedicated to crafting bespoke software
              solutions that help small businesses harness the power of technology to
              achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
