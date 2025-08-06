import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  Clock,
  Search,
  Laptop,
  FileText,
  Upload,
  Users,
  MapPin,
  Plane
} from 'lucide-react'

const FlowChart = () => {
  const steps = [
    {
      id: 1,
      title: "Set up an appointment",
      icon: <div className="flex items-center justify-center space-x-1 sm:space-x-2">
        <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
        <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
      </div>,
      description: "Schedule your initial consultation"
    },
    {
      id: 2,
      title: "Search and apply for programs",
      icon: <div className="flex items-center justify-center">
        <Search className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </div>,
      description: "Find and apply to study abroad programs"
    },
    {
      id: 3,
      title: "Funding Planning/ Apply for scholarships",
      icon: <div className="flex items-center justify-center">
        <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </div>,
      description: "Plan your finances and apply for scholarships"
    },
    {
      id: 4,
      title: "Upload/Submit required paperwork",
      icon: <div className="flex items-center justify-center">
        <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </div>,
      description: "Submit all required documents"
    },
    {
      id: 5,
      title: "Attend departure orientation",
      icon: <div className="flex items-center justify-center">
        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </div>,
      description: "Complete pre-departure orientation"
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-3 sm:mb-4 px-2">
            Steps To Study Abroad
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Follow our comprehensive 5-step process to study abroad
          </p>
        </motion.div>

        <div className="relative">
          {/* Start Icon - Location Pin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -left-2 sm:-left-4 top-1/2 transform -translate-y-1/2 z-10"
          >
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-current" />
            </div>
          </motion.div>

          {/* End Icon - Airplane */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 z-10"
          >
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Plane className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-current" />
            </div>
          </motion.div>

          {/* Flow Chart Container */}
          <div className="relative overflow-x-auto">
            <div className="min-w-[800px] md:min-w-[1000px] lg:min-w-full">
              {/* Desktop Flow Chart */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-between relative">
                  {/* Dotted Connection Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 border-t-2 border-dotted border-blue-500 transform -translate-y-1/2 z-0"></div>
                  
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative z-10 flex-1 mx-2 lg:mx-4"
                    >
                      <FlowNode step={step} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tablet Flow Chart */}
              <div className="hidden md:block lg:hidden">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative ${index === 4 ? 'col-span-2 mx-auto max-w-xs' : ''}`}
                    >
                      <FlowNode step={step} />
                      {index < steps.length - 1 && index !== 3 && (
                        <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-blue-500 transform translate-y-1/2"></div>
                      )}
                      {index === 1 && (
                        <div className="absolute top-full left-1/2 w-0.5 h-4 bg-blue-500 transform -translate-x-1/2"></div>
                      )}
                      {index === 3 && (
                        <div className="absolute top-full left-1/2 w-0.5 h-4 bg-blue-500 transform -translate-x-1/2"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Flow Chart */}
              <div className="md:hidden space-y-4 sm:space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <FlowNode step={step} />
                    {index < steps.length - 1 && (
                      <div className="flex justify-center mt-3 sm:mt-4">
                        <div className="w-1 h-6 sm:h-8 bg-blue-500"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Flow Node Component
const FlowNode = ({ step }) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 max-w-xs mx-auto">
      {/* Step Number */}
      <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-lg">
        {step.id}
      </div>
      
      {/* Icon */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg">
        {step.icon}
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{step.title}</h3>
        <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export default FlowChart
