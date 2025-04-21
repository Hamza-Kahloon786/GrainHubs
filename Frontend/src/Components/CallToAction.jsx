import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-dark">
      <div className="container-custom">
        <div className="text-center text-white" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your agricultural business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get in touch with our team of experts and discover how we can help you achieve sustainable growth and
            profitability.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-dark px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary transition-colors"
          >
            Contact Us Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;