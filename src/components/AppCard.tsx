"use client";

import { motion } from "framer-motion";

interface AppCardProps {
  title: string;
  description: string;
  icon?: string;
  technologies: string[];
}

export default function AppCard({
  title,
  description,
  icon = "📱",
  technologies,
}: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
            <span className="text-2xl">{icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
