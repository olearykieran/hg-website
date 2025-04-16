"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaImage, FaPaw, FaHome } from "react-icons/fa";

interface WebsiteCardProps {
  title: string;
  description: string;
  url?: string;
  technologies: string[];
}

const getDirectImageUrl = (url: string): string => {
  const urlMap: { [key: string]: string } = {
    "https://empoweredae.com": "https://empoweredae.com/images/logo.png",
    "https://rpgsouls.com": "https://rpgsouls.com/assets/gameplay.png",
  };
  return urlMap[url] || "";
};

export default function WebsiteCard({
  title,
  description,
  url,
  technologies,
}: WebsiteCardProps) {
  const [metadata, setMetadata] = useState<{ image: string; description: string }>({
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      const directImageUrl = getDirectImageUrl(url);
      if (directImageUrl) {
        setMetadata({
          image: directImageUrl,
          description: description,
        });
        setLoading(false);
        return;
      }

      const fetchMetadata = async () => {
        try {
          const response = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
          const data = await response.json();
          setMetadata({
            image: data.image || "",
            description: data.description || description,
          });
        } catch (error) {
          console.error("Error fetching metadata:", error);
          setMetadata({
            image: "",
            description: description,
          });
        } finally {
          setLoading(false);
        }
      };

      fetchMetadata();
    } else {
      setLoading(false);
      setMetadata({
        image: "",
        description: description,
      });
    }
  }, [url, description]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        {metadata.image ? (
          <Image
            src={metadata.image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700">
            {url === "https://foreverfriendsvet.com" ? (
              <FaPaw className="h-16 w-16 text-gray-500 dark:text-gray-400" />
            ) : url === "https://www.ohomeservices.com" ? (
              <FaHome className="h-16 w-16 text-gray-500 dark:text-gray-400" />
            ) : (
              <FaImage className="h-12 w-12 text-gray-400 dark:text-gray-500" />
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{metadata.description}</p>
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
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-gray-700 dark:text-gray-300 hover:underline"
          >
            Visit Website →
          </a>
        )}
      </div>
    </motion.div>
  );
}
