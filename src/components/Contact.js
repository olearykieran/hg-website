"use client";
import React, { useState, CSSProperties } from "react";

/* AI gradient styles */
const aiGradientStyle = {
  background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'gradientFlow 3s linear infinite'
};

const aiGradientBorder = {
  position: 'relative',
  borderRadius: '1rem',
  padding: '1px',
  background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
  backgroundSize: '200% auto',
  animation: 'gradientFlow 3s linear infinite'
};

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({
      submitted: true,
      success: false,
      message: "Sending your message...",
    });

    try {
      // Send data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        // Success response
        setFormStatus({
          submitted: true,
          success: true,
          message: result.message || "Thanks for reaching out. We'll get back to you shortly.",
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
        setFormStatus({
          submitted: true,
          success: false,
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-[#1e1e2e] py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Header - Always on top */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-gray-900 dark:text-gray-100">
              Get in <span style={aiGradientStyle}>Touch</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 px-4 md:px-0">
              Ready to transform your business with <span style={aiGradientStyle}>intelligent software</span>?
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-3xl mx-auto w-full">
            {formStatus.submitted && formStatus.success ? (
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-xl text-center" style={aiGradientBorder}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="11" stroke="url(#gradient)" strokeWidth="2" />
                    <path
                      d="M7 12L10 15L17 8"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9C27B0" />
                        <stop offset="25%" stopColor="#7B1FA2" />
                        <stop offset="50%" stopColor="#673AB7" />
                        <stop offset="75%" stopColor="#3F51B5" />
                        <stop offset="100%" stopColor="#2196F3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className="text-xl md:text-2xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                    <span style={aiGradientStyle}>Message Sent</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{formStatus.message}</p>
                </div>
              </div>
            ) : formStatus.submitted && !formStatus.success ? (
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-xl text-center" style={aiGradientBorder}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8">
                  {formStatus.message === "Sending your message..." ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-t-2 border-b-2 border-purple-500 mb-4 md:mb-6"></div>
                      <h3 className="text-xl md:text-2xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                        <span style={aiGradientStyle}>Sending Message</span>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{formStatus.message}</p>
                    </div>
                  ) : (
                    <div>
                      <svg
                        className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-red-500"
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
                      <h3 className="text-xl md:text-2xl font-medium mb-2 text-red-500">Error</h3>
                      <p className="text-gray-600 dark:text-gray-300">{formStatus.message}</p>
                      <button
                        onClick={() => setFormStatus({ submitted: false, success: false, message: "" })}
                        className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div style={aiGradientBorder} className="rounded-lg overflow-hidden">
                <div className="bg-white dark:bg-gray-900 p-6 md:p-10 rounded-xl">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6 contact-form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300"
                          placeholder="John Appleseed"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <div>
                      <div style={aiGradientBorder} className="rounded-lg overflow-hidden">
                        <button
                          type="submit"
                          className="w-full bg-white dark:bg-gray-800 font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                        >
                          <span style={aiGradientStyle}>Send Message</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" style={aiGradientStyle}>
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Contact info cards */}
            <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-gray-100">
                  <span style={aiGradientStyle}>Email</span>
                </h4>
                <a
                  href="mailto:kieran@theholygrailstudio.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xs transition-colors break-words"
                >
                  kieran@theholygrailstudio.com
                </a>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-gray-100">Phone</h4>
                <a
                  href="tel:+5163824166"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  +1 (516) 382-4166
                </a>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-gray-100">
                  <span style={aiGradientStyle}>Location</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
