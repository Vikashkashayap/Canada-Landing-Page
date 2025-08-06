import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  GraduationCap,
  CheckCircle,
  Globe,
  Calendar,
  MapPin,
  MessageCircle
} from 'lucide-react';

const FormPage = ({ onBack }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    courseInterest: '',
    educationLevel: '',
    preferredUniversity: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      onBack(); // Go back to main page after submission
    }, 3000);
  };

  const courses = [
    "Business Management",
    "Computer Science",
    "Engineering",
    "Nursing",
    "Information Technology",
    "Project Management",
    "Data Science",
    "Marketing",
    "Finance",
    "Healthcare Administration"
  ];

  const universities = [
    "University of Toronto",
    "University of British Columbia",
    "McGill University",
    "University of Alberta",
    "University of Waterloo",
    "University of Calgary",
    "University of Ottawa",
    "Simon Fraser University",
    "York University",
    "University of Victoria"
  ];

  const educationLevels = [
    "High School",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Diploma",
    "Certificate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors self-start sm:self-auto"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">Back to Home</span>
            </button>
            <div className="flex items-center space-x-3 self-center sm:self-auto">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center sm:text-left">
                Free Consultation Form
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Start Your Journey to Canada
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Fill out this form to get personalized guidance from our education experts. 
            We'll help you choose the right course and university for your future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
            >
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your country"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      Current Education Level *
                    </label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select your education level</option>
                      {educationLevels.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Course of Interest *
                  </label>
                  <select
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select your course of interest</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Preferred University (Optional)
                  </label>
                  <select
                    name="preferredUniversity"
                    value={formData.preferredUniversity}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select preferred university (optional)</option>
                    {universities.map((university, index) => (
                      <option key={index} value={university}>{university}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals, concerns, or any specific questions you have..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isFormSubmitted}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isFormSubmitted ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Thank You! We'll Contact You Soon
                    </span>
                  ) : (
                    "Submit Free Consultation Request"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Benefits Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Free Consultation</h4>
                    <p className="text-xs sm:text-sm text-gray-600">No cost for initial assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Expert Guidance</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Experienced education consultants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Personalized Support</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">95% Success Rate</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Proven track record</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Get in Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm sm:text-base">Call Us</div>
                    <div className="text-xs sm:text-sm opacity-90">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm sm:text-base">Email Us</div>
                    <div className="text-xs sm:text-sm opacity-90">info@studyincanada.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm sm:text-base">Visit Us</div>
                    <div className="text-xs sm:text-sm opacity-90">Toronto, Ontario, Canada</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Response</h3>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">24 Hours</div>
                <p className="text-xs sm:text-sm opacity-90">We'll get back to you within 24 hours with personalized guidance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FormPage; 