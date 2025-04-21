import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: 'Sustainability',
      description:
        'We are committed to promoting sustainable agricultural practices that protect our environment for future generations.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: 'Innovation',
      description:
        'We constantly seek innovative solutions to complex agricultural challenges, leveraging technology and research.',
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: 'Partnership',
      description:
        'We believe in building strong partnerships with our clients, working together for mutual success and growth.',
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: 'Excellence',
      description:
        'We strive for excellence in all we do, maintaining the highest standards of quality and professionalism.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      bio: 'With over 20 years of experience in agricultural economics and policy, Dr. Johnson founded Grain Hub to bridge the gap between traditional farming and modern technology.',
    },
    {
      name: 'Mark Williams',
      position: 'Agricultural Strategist',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      bio: 'Mark specializes in developing strategic plans for large-scale agricultural operations, with expertise in sustainability and market analysis.',
    },
    {
      name: 'Emma Thompson',
      position: 'Technology Specialist',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      bio: 'Emma leads our technology integration team, helping clients implement cutting-edge agricultural technology solutions to improve efficiency and yield.',
    },
    {
      name: 'David Chen',
      position: 'Financial Advisor',
      image: 'https://randomuser.me/api/portraits/men/34.jpg',
      bio: 'David provides financial analysis and investment advice specifically tailored to the unique challenges and opportunities in the agricultural sector.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn about our mission, our values, and the dedicated team behind Grain Hub.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title text-left">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2005, Grain Hub began with a simple mission: to help Korotana farmers navigate the
                increasingly complex agricultural landscape through innovative solutions and strategic guidance.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've expanded our services to encompass all aspects of agricultural consulting, from
                farm management and technology integration to market analysis and sustainability planning.
              </p>
              <p className="text-gray-600">
                Today, we are proud to work with clients of all sizes across Pakistan, from family farms to large
                agribusinesses and government agencies, helping them achieve their goals and adapt to the changing
                agricultural sector.
              </p>
            </div>

            <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="flour.webp"
                  alt="Agricultural landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="rice.avif"
                  alt="Modern farming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 transform translate-y-8">
                <img
                  src="wheat.jpeg"
                  alt="Agricultural technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 transform translate-y-8">
                <img
                  src="combine.jpeg"
                  alt="Sustainable farming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              These core principles guide everything we do at Grain Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-lg p-6 text-center h-full flex flex-col items-center"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};
export default AboutPage;