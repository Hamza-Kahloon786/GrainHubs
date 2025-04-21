import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import image1 from '/founder.jpg';
 import image2 from '/manger.jpg';
 import image3 from '/FIELD_INCHARGE.jpg';
 import image4 from '/investor.jpg';
 import image5 from '/Mhmmad_sheraz.jpg';
 import image6 from '/zahid.jpg';
 import image7 from '/admin_malik_naseer.jpg';
 import image8 from '/Ahtisham.jpg';
 import image9 from '/Hussnain_Raza.jpg';
 import image10 from '/Hamza.jpg';
 import image11 from '/Muhammad_Hassan.jpg';
 import image12 from '/Muhammad_Kamran.jpg';

 


const TeamPage = () => {
  const executiveTeam = [
    {
      name: 'Aftab korotana',
      position: 'Founder & CEO',
      image: 'founder.jpg',
      bio: 'With over 20 years of experience in agricultural economics and policy, Aftab korotana founded Grain Hub to bridge the gap between traditional farming and modern technology.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'Ahmadnagra456@gmail.com',
      },
    },
    {
      name: 'Ahmad Nagra',
      position: 'Manger of Grain hub',
      image: 'manger.jpg',
      bio: 'Mark oversees all operational aspects of Grain Hub, bringing 15 years of experience in agricultural operations management and business development.',
      social: {
        instagram: 'https://www.instagram.com/grains_hub?igsh=MWQyZXZ6Zzc0OWJuYw%3D%3D&utm_source=qr',
        twitter: '#',
        email: 'Ahmadnagra456@gmail.com',
      },
    },
    {
      name: 'Muhammad Asharaf',
      position: 'Field Incharge',
      image: 'FIELD_INCHARGE.jpg',
      bio: 'Emma leads our technology integration team, helping clients implement cutting-edge agricultural technology solutions to improve efficiency and yield.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'Ahmadnagra456@gmail.com',
      },
    },
    {
      name: 'Hamid Dhillon',
      position: 'Chief Financial Officer',
      image: 'investor.jpg',
      bio: 'David provides financial analysis and investment advice specifically tailored to the unique challenges and opportunities in the agricultural sector.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@agritechconsult.com',
      },
    },
  ];

  const consultants = [
    {
      name: 'Muhammad Sheraz',
      position: 'Senior Agricultural Consultant',
      image: 'Mhmmad_sheraz.jpg',
      specialization: 'Sustainable Farming Practices',
    },
    {
      name: 'Zahid Korotana',
      position: 'Market Analyst',
      image: 'zahid.jpg',
      specialization: 'Agricultural Commodities',
    },
    {
      name: 'Malik Naser',
      position: 'Admin of Brain Hub',
      image: 'admin_malik_naseer.jpg',
      specialization: 'Precision Agriculture',
    },
    {
      name: 'Ahtisham Hunjra',
      position: 'Supply Chain Consultant',
      image: 'Ahtisham.jpg',
      specialization: 'Logistics & Distribution',
    },
    {
      name: 'Hussnain Raza',
      position: 'Sustainability Advisor',
      image: 'Hussnain_Raza.jpg',
      specialization: 'Environmental Compliance',
    },
    {
      name: 'Hamza Kahloon',
      position: 'Financial Analyst',
      image: 'Hamza.jpg',
      specialization: 'Investment Planning',
    },
    {
      name: 'Muhammad_Hassan',
      position: 'Project Manager',
      image: 'Muhammad_Hassan.jpg',
      specialization: 'Implementation Strategy',
    },
    {
      name: 'Muhammad Kamran',
      position: 'Research Specialist',
      image: 'Muhammad_Kamran.jpg',
      specialization: 'Agricultural Innovation',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the experienced professionals who make Grain Hub the leading agricultural consultancy in
              kotli Korotana.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              Our executive team brings decades of combined experience in agricultural consulting and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-lg overflow-hidden h-full"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-primary-dark">{member.name}</h3>
                    <p className="text-primary mb-4">{member.position}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 transition-colors hover:bg-primary hover:text-white"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 transition-colors hover:bg-primary hover:text-white"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 transition-colors hover:bg-primary hover:text-white"
                        aria-label={`Email ${member.name}`}
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Our Consultants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              Specialists in various agricultural domains who work directly with our clients to implement solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultants.map((consultant, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-lg overflow-hidden h-full"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 text-primary-dark">{consultant.name}</h3>
                    <p className="text-primary text-sm mb-2">{consultant.position}</p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Specialization:</span> {consultant.specialization}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title text-left">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented professionals who are passionate about agriculture and innovation to
                join our growing team.
              </p>
              <p className="text-gray-600 mb-6">
                At Grain Hub, you'll have the opportunity to work on challenging projects with leading
                agricultural businesses across Australia, while continuing to develop your skills and expertise.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md text-lg shadow-lg"
                >
                  View Current Openings
                </motion.button>
              </Link>
            </div>

            <div data-aos="fade-left" className="bg-secondary-light rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-dark">Benefits of Working With Us</h3>
              <ul className="space-y-4">
                {[
                  'Competitive salary and benefits package',
                  'Ongoing professional development opportunities',
                  'Flexible working arrangements',
                  'Collaborative and innovative work environment',
                  'Opportunity to make a real difference in the agricultural sector',
                  'Work with diverse clients across Australia',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary text-xl mr-3">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;