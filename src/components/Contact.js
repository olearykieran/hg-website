"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSoundContext } from "@/components/SoundProvider";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { playSound } = useSoundContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Play sound when submitting
    playSound("engage");

    // Set loading state
    setFormStatus({
      submitted: true,
      success: false,
      message: "Establishing secure connection...",
    });

    try {
      // Send data to API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success response
        setFormStatus({
          submitted: true,
          success: true,
          message: "TRANSMISSION COMPLETE. We'll contact you shortly.",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        // Error response from server
        playSound("error");
        setFormStatus({
          submitted: true,
          success: false,
          message: result.message || "TRANSMISSION FAILED. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      playSound("error");
      setFormStatus({
        submitted: true,
        success: false,
        message: "CONNECTION LOST. Please try again later.",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-mgs-black py-16 md:py-32 overflow-x-hidden"
    >
      {/* MGS Grid Background */}
      <div className="absolute inset-0 mgs-grid-bg opacity-20" />
      <div className="absolute inset-0 mgs-noise opacity-10" />

      {/* Scanline effect */}
      <div className="mgs-scanline" />

      <div className="w-full px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div
            className={`w-full text-center mb-10 md:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* MGS Codec Header */}
            <div className="inline-block mb-8">
              <div className="mgs-codec px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-mgs-black/80 backdrop-blur">
                <p className="text-mgs-green font-mgs2-menu text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase">
                  Communications Protocol
                </p>
                <h2 className="text-mgs-white/60 font-tactical text-xs mt-1 uppercase">
                  Secure Channel Open
                </h2>
              </div>
            </div>

            <h2 className="display-text mb-6 md:mb-8 text-center text-mgs-white">
              <span className="text-mgs-white">CONTACT</span>
            </h2>
            <p className="subtitle text-lg md:text-xl text-center">
              Ready to deploy{" "}
              <span className="text-mgs-green">tactical software solutions</span>?
            </p>
          </div>

          {/* Form Section */}
          <div
            className={`w-full max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {formStatus.submitted && formStatus.success ? (
              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-green p-4 sm:p-6 md:p-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgs-green to-transparent animate-pulse" />
                <div className="text-center">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-mgs-green"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 12L10 15L17 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-xl md:text-2xl font-mgs2-menu mb-2 text-mgs-white uppercase tracking-wider">
                    <span className="text-mgs-green">Mission Success</span>
                  </h3>
                  <p className="text-mgs-white/60 font-roboto">{formStatus.message}</p>
                  <div className="mt-4 text-xs text-mgs-green/60 font-tactical uppercase">
                    [CODEC FREQUENCY: 140.85]
                  </div>
                </div>
              </div>
            ) : formStatus.submitted && !formStatus.success ? (
              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-red p-4 sm:p-6 md:p-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgs-red to-transparent animate-pulse" />
                <div className="text-center">
                  {formStatus.message === "Establishing secure connection..." ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-t-2 border-b-2 border-mgs-green mb-4 md:mb-6"></div>
                      <h3 className="text-xl md:text-2xl font-mgs2-menu mb-2 text-mgs-white uppercase tracking-wider">
                        <span className="text-mgs-green">Transmitting</span>
                      </h3>
                      <p className="text-mgs-white/60 font-roboto">
                        {formStatus.message}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <svg
                        className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-mgs-red"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h3 className="text-xl md:text-2xl font-mgs2-menu mb-2 text-mgs-red uppercase tracking-wider">
                        Transmission Error
                      </h3>
                      <p className="text-mgs-white/60 font-roboto mb-4">
                        {formStatus.message}
                      </p>
                      <button
                        onClick={() =>
                          setFormStatus({ submitted: false, success: false, message: "" })
                        }
                        className="btn btn-outline"
                      >
                        RETRY TRANSMISSION
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-gray p-4 sm:p-6 md:p-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent" />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-tactical text-mgs-green/80 mb-2 uppercase"
                      >
                        Operative Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-mgs-black/50 border border-mgs-gray text-mgs-white font-roboto placeholder-mgs-white/30 focus:ring-2 focus:ring-mgs-green focus:border-transparent transition-all"
                        placeholder="Enter codename..."
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-tactical text-mgs-green/80 mb-2 uppercase"
                      >
                        Secure Channel
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-mgs-black/50 border border-mgs-gray text-mgs-white font-roboto placeholder-mgs-white/30 focus:ring-2 focus:ring-mgs-green focus:border-transparent transition-all"
                        placeholder="codec@frequency.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-tactical text-mgs-green/80 mb-2 uppercase"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-mgs-black/50 border border-mgs-gray text-mgs-white font-roboto placeholder-mgs-white/30 focus:ring-2 focus:ring-mgs-green focus:border-transparent transition-all"
                      placeholder="Unit designation..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-tactical text-mgs-green/80 mb-2 uppercase"
                    >
                      Mission Brief
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-mgs-black/50 border border-mgs-gray text-mgs-white font-roboto placeholder-mgs-white/30 focus:ring-2 focus:ring-mgs-green focus:border-transparent transition-all resize-none"
                      placeholder="Describe your operation..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-8 py-3 relative group overflow-hidden"
                    >
                      <span className="relative font-tactical lg:text-3xl z-10">
                        TRANSMIT MESSAGE
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-mgs-green to-mgs-green-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </button>
                  </div>
                </form>

                {/* Security Notice */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-mgs-white/40 font-tactical uppercase">
                    All transmissions encrypted • bit tactical encryption
                  </p>
                </div>
              </div>
            )}

            {/* Contact info cards */}
            <div
              className={`mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border border-mgs-gray p-4 hover:border-mgs-green transition-all duration-300 group">
                <h4 className="text-sm font-mgs2-menu mb-2 text-mgs-white uppercase">
                  <span className="text-mgs-green">CODEC</span>
                </h4>
                <a
                  href="mailto:kieran@theholygrailstudio.com"
                  className="text-mgs-white/60 hover:text-mgs-green text-xs font-roboto transition-colors break-words"
                >
                  kieran@theholygrailstudio.com
                </a>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border border-mgs-gray p-4 hover:border-mgs-green transition-all duration-300 group">
                <h4 className="text-xs font-mgs2-menu mb-2 text-mgs-white uppercase">
                  FREQUENCY
                </h4>
                <a
                  href="tel:+5163824166"
                  className="text-mgs-white/60 hover:text-mgs-green font-roboto transition-colors"
                >
                  +1 (516) 382-4166
                </a>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border border-mgs-gray p-4 hover:border-mgs-green transition-all duration-300 group">
                <h4 className="text-sm font-mgs2-menu mb-2 text-mgs-white uppercase">
                  <span className="text-mgs-green">HQ</span>
                </h4>
                <p className="text-mgs-white/60 font-roboto">New York, NY</p>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent" />
    </section>
  );
};

export default Contact;
