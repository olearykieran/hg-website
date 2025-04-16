"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import WebsiteCard from "./WebsiteCard";
import AppCard from "./AppCard";

type PortfolioKey = "websites" | "apps";

interface PortfolioItem {
  title: string;
  description: string;
  url?: string;
  icon?: string;
  technologies: string[];
}

type PortfolioData = {
  [key in PortfolioKey]: PortfolioItem[];
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<PortfolioKey>("websites");

  const portfolio: PortfolioData = {
    websites: [
      {
        title: "Forever Friends Vet",
        description:
          "A veterinary clinic website providing comprehensive pet care services and information.",
        url: "https://foreverfriendsvet.com",
        technologies: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Negin Poure",
        description:
          "Personal portfolio website showcasing professional work and achievements.",
        url: "https://neginpoure.com",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Empowered AE",
        description: "Business website for an architectural engineering firm.",
        url: "https://empoweredae.com",
        technologies: ["WordPress", "Firebase", "Cloud Functions"],
      },
      {
        title: "RPG Souls",
        description:
          "A gaming platform for role-playing game enthusiasts, created in 2 weeks for the VibeJam AI Game Jam.",
        url: "https://rpgsouls.com",
        technologies: ["Vanilla JS", "Three.js", "AI Integration"],
      },
      {
        title: "O'Home Services",
        description:
          "Long Island's premier home service experts, specializing in construction, renovation, and home improvement solutions.",
        url: "https://www.ohomeservices.com",
        technologies: ["WordPress", "Custom Theme", "Responsive Design"],
      },
    ],
    apps: [
      {
        title: "RW-Suite",
        description:
          "Construction management software for project tracking and resource management.",
        icon: "🏗️",
        technologies: ["React Native", "Node.js", "MongoDB"],
      },
      {
        title: "Bathhouse Inventory",
        description: "Inventory management system for bathhouse products and supplies.",
        icon: "🛁",
        technologies: ["Swift", "Firebase", "Cloud Functions"],
      },
      {
        title: "Philly Coin Expo",
        description: "Mobile app for the Philadelphia Coin Expo event management.",
        icon: "💰",
        technologies: ["React Native", "Redux", "Firebase"],
      },
    ],
  };

  const tabs = Object.keys(portfolio) as PortfolioKey[];

  return (
    <div className="bg-white dark:bg-[#1a1a1a] py-16 md:py-32" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our diverse range of projects and solutions
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-lg ${
                  activeTab === tab
                    ? "bg-gray-700 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio[activeTab].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "websites" ? (
                <WebsiteCard {...item} />
              ) : (
                <AppCard {...item} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
