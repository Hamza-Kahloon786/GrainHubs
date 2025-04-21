import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '/Hamza.jpg';
 import image2 from '/Ahtisham.jpg';
 import image3 from '/Hussnain_Raza.jpg';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote:
        "Grain Hub transformed our farm's efficiency with tailored solutions that increased our yield by 30% in the first year alone.",
      author: 'Hamza Kahloon',
      position: 'Farm Owner, Queensland',
      image: 'Hamza.jpg',
    },
    {
      quote:
        'The strategic planning and market analysis provided by the team helped us expand into new markets with confidence.',
      author: 'Ahtisham Hunjra',
      position: 'CEO, Harvest Solutions',
      image: 'Ahtisham.jpg',
    },
    {
      quote:
        'Their deep understanding of agricultural economics and sustainability practices made all the difference in our transition to more eco-friendly methods.',
      author: 'Hussnain_Raza',
      position: 'Director, EcoFarms Australia',
      image: 'Hussnain_Raza.jpg',
    },
  ];

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section bg-secondary-light">
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-700 mb-4 tracking-wide">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            >
              <FaQuoteLeft className="text-primary-light text-4xl mb-6" />
              <p className="text-xl text-gray-700 mb-8 italic">"{testimonials[current].quote}"</p>

              <div className="flex items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[current].author}</h4>
                  <p className="text-gray-600">{testimonials[current].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="bg-primary text-white rounded-full p-3"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="bg-primary text-white rounded-full p-3"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;