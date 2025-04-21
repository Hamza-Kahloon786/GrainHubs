import React from 'react';
import { FaSeedling, FaHandshake, FaChartLine, FaTractor, FaGlobeAmericas, FaLeaf, FaCalculator } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <FaSeedling size={48} />,
      title: 'Agriculture SECURITY / SUPPLY',
      description: 'On the other hand, we denounce with righteous indignation and dislike so beguiled',
    },
    {
      icon: <GiCow size={48} />,
      title: 'PROCUREMENT STRATEGIES',
      description: 'On the other hand, we denounce with righteous indignation and dislike so beguiled',
    },
    {
      icon: <FaHandshake size={48} />,
      title: 'STRATEGIC AGRIBUSINESS',
      description: 'On the other hand, we denounce with righteous indignation and dislike so beguiled',
    },
    {
      icon: <FaChartLine size={48} />,
      title: 'MANAGEMENT STRATEGIES',
      description: 'On the other hand, we denounce with righteous indignation and dislike so beguiled',
    },
  ];

  return (
    <section className="section bg-secondary-light">
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-wide">OUR SERVICES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are here to provide solutions to <span className="font-medium"></span> all of our Clients needs and desires within the Agricultural space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;