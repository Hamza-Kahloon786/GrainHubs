import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope,FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../Components/ContactForm';

const LocationSection = () => {
  // The Google Maps URL for your specific location
  const mapUrl = "https://www.google.com/maps?q=R65W%2BH5V+Punjab+gala+mandi+muridke,+Sheikhupura+Road,+Peer+Colony+Afzal+Colony,+Muridke&output=embed";
  
  // URL for when someone clicks to open in Google Maps
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=R65W%2BH5V+Punjab+gala+mandi+muridke,+Sheikhupura+Road,+Peer+Colony+Afzal+Colony,+Muridke";

  return (
    <div data-aos="fade-left">
      <h2 className="section-title text-left mb-8">Our Location</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video bg-gray-200 relative">
          {/* Embedded Google Maps iframe */}
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
          
          {/* Overlay button to open in Google Maps */}
          <div className="absolute bottom-4 right-4">
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4 text-primary-dark">Muridke Office</h3>
          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
            <p className="text-gray-600">
              R65W+H5V Punjab gala mandi muridke, Sheikhupura Road, Peer Colony Afzal Colony, Muridke
            </p>
          </div>
          <p className="text-gray-600 mb-4">
            Our main office is strategically located in Muridke with convenient access to Sheikhupura Road, 
            serving as a central hub for our operations in the region.
          </p>
          
          {/* Additional contact information */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start">
              <FaPhone className="text-primary mt-1 mr-3" />
              <p className="text-gray-600">+92 3349832166</p>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-primary mt-1 mr-3" />
              <p className="text-gray-600">Ahmadnagra456@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with our team to discuss how we can help your agricultural business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div data-aos="fade-up">
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-lg p-8 text-center h-full shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <FaPhoneAlt />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-dark">Phone</h3>
                <p className="text-gray-600 mb-2">Main Office</p>
                <p className="text-xl font-medium text-primary">+0334 9832166</p>
              </motion.div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-lg p-8 text-center h-full shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <FaEnvelope />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-dark">Email</h3>
                <p className="text-gray-600 mb-2">General Inquiries</p>
                <p className="text-xl font-medium text-primary">Ahmadnagra456@gmail.com</p>
              </motion.div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-lg p-8 text-center h-full shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <FaClock />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-dark">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Sunday</p>
                <p className="text-xl font-medium text-primary">9:00 AM - 9:00 PM </p>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <h2 className="section-title text-left mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div data-aos="fade-left">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                
              <LocationSection/>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-primary-dark">Regional Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-primary-dark mb-2">Sydney Office</h4>
                    <p className="text-gray-600 text-sm">456 Harbour View, Sydney, NSW 2000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-primary-dark mb-2">Brisbane Office</h4>
                    <p className="text-gray-600 text-sm">789 River Road, Brisbane, QLD 4000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-primary-dark mb-2">Perth Office</h4>
                    <p className="text-gray-600 text-sm">321 West Coast Hwy, Perth, WA 6000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-primary-dark mb-2">Adelaide Office</h4>
                    <p className="text-gray-600 text-sm">654 Wine Valley, Adelaide, SA 5000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              Find answers to common questions about our services and how we work with clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            {[
              {
                question: 'What industries do you primarily serve?',
                answer:
                  'We primarily serve all sectors within the agriculture Korotana traders, including crop farming, livestock production, horticulture, viticulture, and agribusiness. Our services are tailored to meet the specific needs of each sector.',
              },
              {
                question: 'How do you charge for your consulting services?',
                answer:
                  'Our fee structure depends on the scope and complexity of the project. We offer both fixed-price project-based fees and hourly consulting rates. We provide detailed proposals with transparent pricing before beginning any work.',
              },
              {
                question: 'Do you work with small family farms or only large agribusinesses?',
                answer:
                  'We work with agricultural businesses of all sizes, from family farms to large corporations. We believe that all agricultural operations can benefit from strategic consulting, and we tailor our approach to meet the specific needs and budget of each client.',
              },
              {
                question: 'What is your typical consulting process?',
                answer:
                  'Our process typically begins with an initial consultation to understand your needs, followed by a detailed assessment of your current situation. We then develop a tailored strategy, work with you on implementation, and provide ongoing support and evaluation to ensure optimal results.',
              },
              {
                question: 'Do you offer ongoing support after the initial consultation?',
                answer:
                  'Yes, we offer various levels of ongoing support based on your needs. This can range from monthly check-ins to more intensive implementation assistance. Our goal is to ensure the long-term success of the strategies we recommend.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;