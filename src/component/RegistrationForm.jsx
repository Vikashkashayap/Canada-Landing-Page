import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const RegistrationForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setIsFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center lg:justify-end order-1 lg:order-2"
      >
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl w-full max-w-sm lg:max-w-md">
          <div className="text-center mb-4 lg:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Get Your Free Consultation
            </h3>
            <p className="text-gray-200 text-xs lg:text-sm">
              Start your journey to success today
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-3 lg:space-y-4">
            <div className="space-y-2 lg:space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                required
              />
              <select className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm lg:text-base appearance-none">
                <option value="" className="text-gray-800 bg-white">
                  Select Course of Interest
                </option>
                <option value="business" className="text-gray-800 bg-white">
                  Business Management
                </option>
                <option value="cs" className="text-gray-800 bg-white">
                  Computer Science
                </option>
                <option value="engineering" className="text-gray-800 bg-white">
                  Engineering
                </option>
                <option value="nursing" className="text-gray-800 bg-white">
                  Nursing
                </option>
                <option value="it" className="text-gray-800 bg-white">
                  Information Technology
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2.5 lg:py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm lg:text-base"
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
    </>
  );
};

export default RegistrationForm;
