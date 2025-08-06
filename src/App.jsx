import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './component/Hero';

import { 
  GraduationCap, 
  Globe, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Building2,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  X,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Award,
  Heart,
  Flag,
  ArrowRight,
  FileText,
  Plane,
  Home,
  Briefcase,
  UserCheck,
  CreditCard,
  Clipboard,
  GraduationCap as GraduationCapIcon,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2
} from 'lucide-react';
import backgroundImage from './assets/image.png';
import FormPage from './FormPage';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
  const [stats, setStats] = useState({
    students: 0,
    universities: 0,
    successRate: 0,
    countries: 0
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showFormPage, setShowFormPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated statistics counter
  useEffect(() => {
    const targetStats = {
      students: 50000,
      universities: 150,
      successRate: 95,
      countries: 120
    };

    const duration = 2000;
    const steps = 60;
    const stepValue = {};
    
    Object.keys(targetStats).forEach(key => {
      stepValue[key] = targetStats[key] / steps;
    });

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setStats(prev => ({
        students: Math.min(prev.students + stepValue.students, targetStats.students),
        universities: Math.min(prev.universities + stepValue.universities, targetStats.universities),
        successRate: Math.min(prev.successRate + stepValue.successRate, targetStats.successRate),
        countries: Math.min(prev.countries + stepValue.countries, targetStats.countries)
      }));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setShowFormPage(true); // Redirect to detailed form page
    }, 2000);
  };

  const toggleVideo = () => setIsVideoPlaying(!isVideoPlaying);
  const toggleMute = () => setIsVideoMuted(!isVideoMuted);
  const toggleFullscreen = () => setIsVideoFullscreen(!isVideoFullscreen);

  const popularCourses = [
    {
      id: 1,
      title: "Diploma in Business Management",
      duration: "2 years",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Develop essential business skills and management expertise",
      tuition: "$25,000/year",
      employment: "92%",
      salary: "$65,000",
      features: ["Leadership Skills", "Global Business", "Internship", "Career Support"]
    },
    {
      id: 2,
      title: "MS in Computer Science",
      duration: "2 years",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Advanced computer science with cutting-edge technology",
      tuition: "$35,000/year",
      employment: "98%",
      salary: "$85,000",
      features: ["AI/ML Focus", "Research Opportunities", "Industry Projects", "Tech Hub Access"]
    },
    {
      id: 3,
      title: "Project Management",
      duration: "1-2 years",
      icon: <Building2 className="w-8 h-8" />,
      description: "Master project planning, execution, and leadership",
      tuition: "$28,000/year",
      employment: "89%",
      salary: "$70,000",
      features: ["PMP Certification", "Real Projects", "Mentorship", "Networking"]
    },
    {
      id: 4,
      title: "Bachelors in IT",
      duration: "4 years",
      icon: <Globe className="w-8 h-8" />,
      description: "Comprehensive IT education with practical applications",
      tuition: "$30,000/year",
      employment: "94%",
      salary: "$75,000",
      features: ["Software Development", "Cybersecurity", "Co-op Program", "Industry Partners"]
    },
    {
      id: 5,
      title: "Nursing",
      duration: "4 years",
      icon: <Heart className="w-8 h-8" />,
      description: "Healthcare excellence with hands-on clinical experience",
      tuition: "$32,000/year",
      employment: "96%",
      salary: "$80,000",
      features: ["Clinical Training", "Healthcare Tech", "Licensing Prep", "Hospital Partners"]
    },
    {
      id: 6,
      title: "Mechanical Engineering",
      duration: "4 years",
      icon: <Award className="w-8 h-8" />,
      description: "Innovation in engineering with modern technology",
      tuition: "$33,000/year",
      employment: "91%",
      salary: "$78,000",
      features: ["Design Projects", "Lab Experience", "Industry Visits", "Research Labs"]
    }
  ];

  const benefits = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "World-Class Education",
      description: "Top-ranked universities with internationally recognized degrees"
    },
    {
      icon: <Flag className="w-12 h-12" />,
      title: "PR Opportunities",
      description: "Pathway to permanent residency after graduation"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "High Employability",
      description: "95% employment rate within 6 months of graduation"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Diverse Culture",
      description: "Multicultural environment fostering global perspectives"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Affordable Education",
      description: "Quality education at competitive international rates"
    }
  ];

  const universities = [
    { name: "University of Toronto", location: "Toronto, ON", ranking: "#1 in Canada" },
    { name: "University of British Columbia", location: "Vancouver, BC", ranking: "#2 in Canada" },
    { name: "McGill University", location: "Montreal, QC", ranking: "#3 in Canada" },
    { name: "University of Alberta", location: "Edmonton, AB", ranking: "#4 in Canada" },
    { name: "University of Waterloo", location: "Waterloo, ON", ranking: "#5 in Canada" },
    { name: "University of Calgary", location: "Calgary, AB", ranking: "#6 in Canada" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      country: "China",
      course: "MS in Computer Science",
      university: "University of Toronto",
      rating: 5,
      text: "Studying in Canada opened incredible opportunities. The education quality is outstanding and I got a great job right after graduation!"
    },
    {
      name: "Raj Patel",
      country: "India",
      course: "Business Management",
      university: "University of British Columbia",
      rating: 5,
      text: "The multicultural environment helped me grow both personally and professionally. Highly recommend studying in Canada!"
    },
    {
      name: "Maria Rodriguez",
      country: "Mexico",
      course: "Nursing",
      university: "McGill University",
      rating: 5,
      text: "The practical training and supportive faculty made my learning experience exceptional. Canada truly values international students."
    }
  ];

  const faqs = [
    {
      question: "What are the admission requirements for international students?",
      answer: "Requirements vary by program but typically include academic transcripts, English proficiency (IELTS/TOEFL), letters of recommendation, and a statement of purpose. Some programs may require standardized tests like GRE or GMAT."
    },
    {
      question: "How much does it cost to study in Canada?",
      answer: "Tuition fees range from CAD 20,000 to 40,000 per year for international students, depending on the program and university. Living expenses are approximately CAD 15,000 to 20,000 per year."
    },
    {
      question: "Can I work while studying in Canada?",
      answer: "Yes! International students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. You can also work on-campus without a work permit."
    },
    {
      question: "What are the post-graduation work opportunities?",
      answer: "After graduation, you can apply for a Post-Graduation Work Permit (PGWP) valid for up to 3 years, depending on your program length. This provides valuable Canadian work experience."
    },
    {
      question: "How do I apply for a student visa?",
      answer: "You'll need an acceptance letter from a Designated Learning Institution (DLI), proof of financial support, medical examination, and police certificate. The application process takes 4-6 weeks."
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Free assessment of your academic background and career goals",
      icon: <UserCheck className="w-8 h-8" />,
      duration: "1-2 days",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Course Selection",
      description: "Choose the right program and university based on your profile",
      icon: <BookOpen className="w-8 h-8" />,
      duration: "3-5 days",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Document Preparation",
      description: "Gather and prepare all required documents and certificates",
      icon: <FileText className="w-8 h-8" />,
      duration: "1-2 weeks",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 4,
      title: "University Application",
      description: "Submit applications to selected universities and programs",
      icon: <Clipboard className="w-8 h-8" />,
      duration: "2-4 weeks",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Offer Letter",
      description: "Receive acceptance letter from the university",
      icon: <CheckCircle className="w-8 h-8" />,
      duration: "4-8 weeks",
      color: "from-green-600 to-green-700"
    },
    {
      id: 6,
      title: "Financial Planning",
      description: "Arrange tuition fees and living expenses",
      icon: <CreditCard className="w-8 h-8" />,
      duration: "1-2 weeks",
      color: "from-red-500 to-red-600"
    },
    {
      id: 7,
      title: "Visa Application",
      description: "Apply for Canadian student visa and work permit",
      icon: <Plane className="w-8 h-8" />,
      duration: "4-6 weeks",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 8,
      title: "Travel Preparation",
      description: "Book flights, arrange accommodation, and prepare for travel",
      icon: <Home className="w-8 h-8" />,
      duration: "1-2 weeks",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 9,
      title: "Arrival & Orientation",
      description: "Arrive in Canada and attend university orientation programs",
      icon: <Globe className="w-8 h-8" />,
      duration: "1 week",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 10,
      title: "Academic Journey",
      description: "Complete your studies and gain valuable experience",
      icon: <GraduationCapIcon className="w-8 h-8" />,
      duration: "2-4 years",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 11,
      title: "Graduation",
      description: "Complete your degree and receive your diploma",
      icon: <Award className="w-8 h-8" />,
      duration: "Graduation Day",
      color: "from-gold-500 to-gold-600"
    },
    {
      id: 12,
      title: "Career Success",
      description: "Secure employment or pursue further studies in Canada",
      icon: <Briefcase className="w-8 h-8" />,
      duration: "Lifetime",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  // If form page is shown, render the form page
  if (showFormPage) {
    return <FormPage onBack={() => setShowFormPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     <Hero 
       stats={stats}
       handleFormSubmit={handleFormSubmit}
       isFormSubmitted={isFormSubmitted}
     />

      {/* Popular Courses Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose from our most sought-after programs designed for international students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer group"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="p-6 sm:p-8">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{course.description}</p>
                  
                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-blue-600">{course.tuition}</div>
                      <div className="text-xs text-gray-500">Tuition</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-green-600">{course.employment}</div>
                      <div className="text-xs text-gray-500">Employment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-purple-600">{course.salary}</div>
                      <div className="text-xs text-gray-500">Avg Salary</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {course.duration}
                    </div>
                    <button 
                      onClick={() => setShowFormPage(true)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Course Comparison Modal */}
          <AnimatePresence>
            {selectedCourse && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedCourse(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 50 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedCourse.title}</h3>
                      <button 
                        onClick={() => setSelectedCourse(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                      {/* Course Details */}
                      <div>
                        <div className="text-blue-600 mb-4 text-3xl sm:text-4xl">{selectedCourse.icon}</div>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">{selectedCourse.description}</p>
                        
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                            <span className="font-medium text-sm sm:text-base">Duration:</span>
                            <span className="text-blue-600 font-bold text-sm sm:text-base">{selectedCourse.duration}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                            <span className="font-medium text-sm sm:text-base">Tuition Fee:</span>
                            <span className="text-green-600 font-bold text-sm sm:text-base">{selectedCourse.tuition}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                            <span className="font-medium text-sm sm:text-base">Employment Rate:</span>
                            <span className="text-purple-600 font-bold text-sm sm:text-base">{selectedCourse.employment}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                            <span className="font-medium text-sm sm:text-base">Average Salary:</span>
                            <span className="text-orange-600 font-bold text-sm sm:text-base">{selectedCourse.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Course Features */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                        <div className="space-y-2 sm:space-y-3">
                          {selectedCourse.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 sm:mt-8">
                          <button 
                            onClick={() => {
                              setSelectedCourse(null);
                              setShowFormPage(true);
                            }}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Why Study in Canada Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Study in Canada?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover the advantages that make Canada the perfect destination for your education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flowchart Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Journey to Success
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Follow our comprehensive 12-step process from initial consultation to career success
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-emerald-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-blue-600 z-10">
                    {step.id}
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative z-20">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto`}>
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">{step.description}</p>
                      <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                        <Calendar className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-3 sm:mt-4">
                      <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 text-center"
            >
              <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-full px-4 sm:px-8 py-3 sm:py-4 border border-blue-200">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Start</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Middle</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Universities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Partner with Canada's leading institutions for world-class education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{university.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span className="text-sm sm:text-base">{university.location}</span>
                </div>
                <div className="text-xs sm:text-sm text-blue-600 font-semibold">{university.ranking}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Hear from our students who have achieved their dreams in Canada
            </p>
          </motion.div>

          <div className="relative">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                  width: `${testimonials.length * 100}%`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full md:w-1/3 px-2 sm:px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg h-full"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic text-sm sm:text-lg leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-500">{testimonial.country}</p>
                          <p className="text-xs sm:text-sm text-blue-600">{testimonial.course} - {testimonial.university}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 rotate-90" />
            </button>
            <button
              onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 -rotate-90" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Get answers to the most common questions about studying in Canada
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                  {activeFAQ === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-red-600"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Sticky CTA */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
          >
            <button
              onClick={() => setShowFormPage(true)}
              className="bg-red-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-red-700 transition-colors cursor-pointer relative group"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-full right-0 mb-2 px-2 sm:px-3 py-1 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Free Consultation
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Chat Popup */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-end p-2 sm:p-4"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-sm sm:text-base">Live Chat Support</h3>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1 rounded">
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              
              {/* Chat Messages */}
              <div className="p-3 sm:p-4 h-48 sm:h-64 overflow-y-auto bg-gray-50">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      A
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm max-w-xs">
                      <p className="text-xs sm:text-sm text-gray-700">Hi! Welcome to Study in Canada. How can I help you today?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 sm:space-x-3 justify-end">
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 shadow-sm max-w-xs">
                      <p className="text-xs sm:text-sm">I'm interested in studying Computer Science in Canada</p>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      U
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      A
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm max-w-xs">
                      <p className="text-xs sm:text-sm text-gray-700">Great choice! We have excellent CS programs. Would you like to know about specific universities or requirements?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="p-3 sm:p-4 border-t">
                <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4">
                  <button className="bg-blue-50 text-blue-700 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm hover:bg-blue-100 transition-colors">
                    Course Guide
                  </button>
                  <button className="bg-green-50 text-green-700 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm hover:bg-green-100 transition-colors">
                    Visa Info
                  </button>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 sm:py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-xs sm:text-sm">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Call Now (+1-555-123-4567)
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-xs sm:text-sm">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Email Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowFormPage(true)}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-red-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-red-700 transition-colors z-40 group"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <div className="absolute bottom-full left-0 mb-2 px-2 sm:px-3 py-1 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Get Free Consultation
        </div>
      </button>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
          >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Back to top
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Study in Canada
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Your gateway to world-class education and a bright future in Canada. Join thousands of successful international students.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-blue-300">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Popular Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Top Universities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Visa Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Application Process
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-blue-300">Contact Info</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-blue-700 transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Call Us</div>
                    <div className="text-xs sm:text-sm">+1 (555) 123-4567</div>
                  </div>
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-green-700 transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Email Us</div>
                    <div className="text-xs sm:text-sm">info@studyincanada.com</div>
                  </div>
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-purple-700 transition-colors">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Visit Us</div>
                    <div className="text-xs sm:text-sm">Toronto, Ontario, Canada</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-blue-300">Newsletter</h4>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Stay updated with the latest opportunities and news.</p>
              <div className="space-y-2 sm:space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <h5 className="font-medium mb-2 sm:mb-3 text-blue-300 text-sm sm:text-base">Follow Us</h5>
                <div className="flex space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm">&copy; 2024 Study in Canada. All rights reserved.</p>
              <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
