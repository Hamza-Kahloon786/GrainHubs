import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="section-title text-left font-bold text-green-600">About Grain Hub</h2>
            <p className="text-gray-600 mb-6">
              With over 25 years of combined experience in the agricultural sector, we provide tailored solutions to
              farmers, agribusinesses, and government agencies across korotana traders
            </p>
            <p className="text-gray-600 mb-6">
            We offer top-quality rice and wheat, grown with care and processed with precision. Trusted by thousands of families and businesses for consistent quality and rich taste. 
            </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold text-green-600 hover:text-green-700 transition-colors"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="aspect-video bg-primary-light rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Agricultural consulting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <h3 className="text-primary-dark font-bold text-xl mb-2">Our Approach</h3>
              <p className="text-gray-600">
                We combine data-driven insights with practical expertise to deliver real-world solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;