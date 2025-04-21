import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Import hero images
import heroImage1 from '/w3.jpg';
import heroImage2 from '/w4.webp';
import heroImage3 from '/w5.avif';


const heroSlides = [
  {
    image: heroImage1,
    title: 'Premium Quality Wheat, Rice and Flour Products',
    cta: 'Learn More',
    link: "/about" 
  },
  {
    image: heroImage2,
    title: 'Farm-Fresh Grains Sourced Directly from Local Farmers',
    cta: 'Our Products',
    link: "/products"
  },
  {
    image: heroImage3,
    title: 'High-Quality Grain Products for Wholesale and Retail',
    cta: 'Contact Us',
    link: "/contact"
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative h-screen">
      {/* Hero slides */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 ${index === current ? 'z-20' : 'z-10'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-20 h-full flex items-center">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl"
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-shadow-lg">
                  {slide.title}
                </h1>
                <Link to={slide.link}>
                  <button 
                    className={`px-5 py-2 rounded font-medium transition-all 
                    ${slide.cta === 'Learn More' ? 
                      'bg-green-600 hover:bg-green-700 text-white' : 
                      'bg-primary hover:bg-primary-dark text-white'}`}
                  >
                    {slide.cta}
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;