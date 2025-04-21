import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-lg p-6 border border-gray-100"
    >
      <div className="w-16 h-16 mx-auto mb-6 text-primary-light flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center mb-4 text-primary-dark">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="mt-6 text-center">
        <a
          href="#"
          className="inline-block text-primary font-medium hover:text-primary-dark transition-colors"
        >
          Learn More →
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;