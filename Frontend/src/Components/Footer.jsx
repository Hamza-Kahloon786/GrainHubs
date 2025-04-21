import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Grain Hub</h3>
            <p className="mb-4">
              Providing strategic advisory and innovative solutions to the Australian Agricultural sector for over two
              decades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Agriculture Security & Supply</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Procurement Strategies</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Strategic Agribusiness</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Management Strategies</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span>kotli Korotana</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-3" />
                <span>0334 9832166</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <span>Ahmadnagra456@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Grain Hub. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;