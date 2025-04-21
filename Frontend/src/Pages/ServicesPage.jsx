import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaHandshake, FaChartLine, FaTractor, FaGlobeAmericas, FaLeaf, FaCalculator } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS will send the form data directly to your Gmail
    emailjs.sendForm(
      'Nagraa_007',  // Get this from EmailJS dashboard
      'template_xqlz2qg', // Get this from EmailJS dashboard
      form.current,
      't94CNnpdLB2LX6Z6_'   // Get this from EmailJS dashboard
    )
      .then((result) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! We will get back to you shortly.',
        });
        
        // Reset form after submission
        form.current.reset();
        setLoading(false);
        
        // Reset form status after a delay
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      })
      .catch((error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Oops! Something went wrong. Please try again later.',
        });
        
        setLoading(false);
      });
  };

  return (
    <section className="section bg-secondary-light" id="contact">
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="section-title">Get Started</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
            Ready to transform your agricultural business? Contact us today to schedule a consultation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto" data-aos="fade-up">
          {formStatus.submitted && (
            <div className={`p-4 rounded-md mb-6 ${
              formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {formStatus.message}
            </div>
          )}
          
          <form ref={form} onSubmit={handleSubmit}>
            {/* Hidden field for recipient email */}
            <input type="hidden" name="to_email" value="Ahmadnagra456@gmail.com" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Product of Interest *</label>
              <select
                id="service"
                name="service"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Select a product</option>
                <option value="premium-wheat">Premium Wheat</option>
                <option value="organic-rice">Organic Rice</option>
                <option value="wheat-flour">Wheat Flour</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Request Consultation'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


const ServicesPage = () => {
  const mainServices = [
    {
      icon: <FaSeedling size={48} />,
      title: 'Agriculture SECURITY / SUPPLY',
      description:
        'We help agricultural businesses ensure agriculture security through sustainable farming practices, supply chain optimization, and risk management strategies.',
      link: '#food-security',
    },
    {
      icon: <GiCow size={48} />,
      title: 'PROCUREMENT STRATEGIES',
      description:
        'Our procurement experts develop tailored strategies to optimize resource acquisition, manage supplier relationships, and control costs effectively.',
      link: '#procurement',
    },
    {
      icon: <FaHandshake size={48} />,
      title: 'STRATEGIC AGRIBUSINESS',
      description:
        'We provide comprehensive business planning, market analysis, and growth strategies specifically designed for the agricultural sector.',
      link: '#agribusiness',
    },
    {
      icon: <FaChartLine size={48} />,
      title: 'MANAGEMENT STRATEGIES',
      description:
        'Our management consultants help agricultural operations improve efficiency, productivity, and profitability through effective management systems.',
      link: '#management',
    },
  ];

  const additionalServices = [
    {
      icon: <FaTractor size={32} />,
      title: 'Technology Integration',
      description:
        'Implementing modern agricultural technologies like IoT sensors, drones, and farm management software to improve operational efficiency.',
    },
    {
      icon: <FaGlobeAmericas size={32} />,
      title: 'Market Access & Export',
      description:
        'Helping kotli Koratana agricultural businesses access new markets and navigate the complexities of international trade.',
    },
    {
      icon: <FaLeaf size={32} />,
      title: 'Sustainability Planning',
      description:
        'Developing comprehensive sustainability strategies that balance environmental responsibility with business profitability.',
    },
    {
      icon: <FaCalculator size={32} />,
      title: 'Financial Analysis',
      description:
        'Providing detailed financial analysis, budgeting, and investment planning services tailored to agricultural businesses.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive solutions tailored to the unique needs of the  agricultural sector.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              We provide comprehensive consulting services to address the key challenges facing agricultural businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} id={service.link.substring(1)}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-lg p-8 border border-gray-100 h-full"
                >
                  <div className="text-primary-light mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-primary-dark">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Customized consulting based on your specific needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Data-driven solutions backed by industry expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ongoing support and implementation assistance</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="inline-block btn btn-primary"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              Complementary offerings to address specific needs within the agricultural sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-lg p-6 border border-gray-100 h-full"
                >
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-primary-dark">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              We follow a structured approach to ensure we deliver the best possible solutions.
            </p>
          </div>

          <div className="relative" data-aos="fade-up">
            {/* Process timeline */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-light transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { number: '01', title: 'Assessment', description: 'We thoroughly analyze your current situation and needs.' },
                { number: '02', title: 'Strategy', description: 'We develop a tailored strategy to address your specific challenges.' },
                { number: '03', title: 'Implementation', description: 'We work with you to implement the recommended solutions.' },
                { number: '04', title: 'Evaluation', description: 'We monitor results and make adjustments as needed for optimal outcomes.' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center relative"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection/>
    </div>
  );
};

export default ServicesPage;