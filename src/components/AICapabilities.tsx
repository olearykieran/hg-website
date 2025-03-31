import React from "react";

const AICapabilities = () => {
  const capabilities = [
    {
      title: "Natural Language Processing",
      description: "Understand and generate human language with remarkable accuracy.",
      image: "/nlp-icon.svg"
    },
    {
      title: "Computer Vision",
      description: "Analyze and interpret visual information from the world.",
      image: "/vision-icon.svg"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors with precision.",
      image: "/analytics-icon.svg"
    },
    {
      title: "Automation",
      description: "Streamline workflows and eliminate repetitive tasks.",
      image: "/automation-icon.svg"
    }
  ];

  return (
    <section id="ai-capabilities" className="section bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            AI Capabilities
          </h2>
          <p className="text-lg text-gray-600">
            Our intelligent solutions leverage cutting-edge AI to solve complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover-lift"
            >
              <div className="flex items-start">
                <div className="relative w-16 h-16 mr-6 flex-shrink-0">
                  <img
                    src={capability.image}
                    alt={capability.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured capability */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-medium mb-4">Machine Learning Integration</h3>
              <img
                src="/code.png"
                alt="Machine Learning Integration"
                width={64}
                height={64}
                className="mb-4"
              />
              <p className="text-gray-600 mb-6">
                We seamlessly integrate machine learning models into your existing systems, 
                enabling intelligent decision-making and continuous improvement.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom model development",
                  "Seamless API integration",
                  "Continuous learning & improvement",
                  "Real-time predictions"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 lg:h-auto bg-gray-100">
              <img
                src="/code.png"
                alt="Machine Learning Integration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
