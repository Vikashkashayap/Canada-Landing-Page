import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle } from "lucide-react";
import backgroundImage from "../assets/image.png";
import backgroundImage2 from "../assets/image1.png";
import backgroundImage3 from "../assets/image_gg.png";
import RegistrationForm from "./RegistrationForm";

const Hero = ({ stats, handleFormSubmit, isFormSubmitted }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    backgroundImage,
    backgroundImage2,
    backgroundImage3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImages[currentImageIndex]}
            alt="Canada Study Background"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[80vh] py-8 lg:py-0">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-4 lg:space-y-6 order-2 lg:order-1"
            >
              <div className="space-y-3 lg:space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mb-3"
                >
                  <Globe className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  <span className="hidden sm:inline">
                    Trusted by 50,000+ International Students
                  </span>
                  <span className="sm:hidden">50,000+ Students</span>
                </motion.div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Study in Canada with Scholarships
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mt-2 lg:mt-3 text-blue-200">
                    Apply Now for 2025 Intake!
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Join thousands of international students achieving their
                  dreams in one of the world's most welcoming countries
                </p>
              </div>

              {/* Animated Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-3 lg:gap-4 pt-4 lg:pt-6"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {Math.floor(stats.students).toLocaleString()}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Students Placed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {Math.floor(stats.universities)}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Universities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {Math.floor(stats.successRate)}%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Success Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {Math.floor(stats.countries)}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Countries
                  </div>
                </div>
              </motion.div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 pt-4 lg:pt-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-base font-medium">
                    World-Class Education
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-base font-medium">
                    PR Opportunities
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-base font-medium">
                    High Employability
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-base font-medium">
                    Diverse Culture
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Form */}

            <RegistrationForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
