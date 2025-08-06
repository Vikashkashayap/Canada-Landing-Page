import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { Globe, CheckCircle } from "lucide-react";
import backgroundImage from '../assets/image.png';
import backgroundImage1 from '../assets/image1.png';
import backgroundImage2 from '../assets/image_gg.png';

const Hero = ({ stats, handleFormSubmit, isFormSubmitted }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    backgroundImage,
    backgroundImage1,
    backgroundImage2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background Images */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Canada Study Background ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1 : 1.1
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-[70vh] py-8 lg:py-0">
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
                  className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mb-3"
                >
                  <Globe className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  <span className="hidden sm:inline">Trusted by 50,000+ International Students</span>
                  <span className="sm:hidden">50,000+ Students</span>
                </motion.div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Study in Canada with Scholarships  
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mt-2 lg:mt-3 text-blue-200">
                  Apply Now for 2025 Intake!
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Join thousands of international students achieving their dreams in one of the world's most welcoming countries
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
                  <div className="text-xs sm:text-sm text-gray-300">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {Math.floor(stats.universities)}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {Math.floor(stats.successRate)}%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {Math.floor(stats.countries)}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Countries</div>
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
                  <span className="text-xs lg:text-base font-medium">World-Class Education</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-base font-medium">PR Opportunities</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-base font-medium">High Employability</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-base font-medium">Diverse Culture</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="bg-white/15 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl w-full max-w-sm lg:max-w-md">
                <div className="text-center mb-4 lg:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Get Your Free Consultation</h3>
                  <p className="text-gray-200 text-xs lg:text-base">Start your journey to success today</p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-3 lg:space-y-4">
                  <div className="space-y-2 lg:space-y-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                      required
                    />
                    <select className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base appearance-none">
                      <option value="" className="text-gray-800 bg-white">Select Course of Interest</option>
                      <option value="business" className="text-gray-800 bg-white">Business Management</option>
                      <option value="cs" className="text-gray-800 bg-white">Computer Science</option>
                      <option value="engineering" className="text-gray-800 bg-white">Engineering</option>
                      <option value="nursing" className="text-gray-800 bg-white">Nursing</option>
                      <option value="it" className="text-gray-800 bg-white">Information Technology</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm lg:text-base"
                  >
                    {isFormSubmitted ? (
                      <span className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                        Thank You!
                      </span>
                    ) : (
                      "Get Free Consultation"
                    )}
                  </button>
                </form>
                
                <div className="mt-3 lg:mt-4 text-center">
                  <p className="text-gray-300 text-xs lg:text-sm">
                    ✓ No commitment required
                  </p>
                  <p className="text-gray-300 text-xs lg:text-sm">
                    ✓ Expert guidance included
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Hero
