import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaShoppingBasket, 
         FaCogs, FaUsers, FaEnvelope } from 'react-icons/fa';
import wheatLogo from '/wheat_logo.jpg'; // Import your wheat logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navigation links with icons
  const navLinks = [
    { name: 'HOME', path: '/', icon: <FaHome className="inline-block mr-1" /> },
    { name: 'ABOUT US', path: '/about', icon: <FaInfoCircle className="inline-block mr-1" /> },
    { name: 'OUR PRODUCTS', path: '/products', icon: <FaShoppingBasket className="inline-block mr-1" /> },
    { name: 'OUR SERVICES', path: '/services', icon: <FaCogs className="inline-block mr-1" /> },
    { name: 'OUR TEAM', path: '/team', icon: <FaUsers className="inline-block mr-1" /> },
    { name: 'CONTACT', path: '/contact', icon: <FaEnvelope className="inline-block mr-1" /> },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-primary py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo with Circular Wheat Image - consistent appearance */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              {/* Logo container with consistent styling */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden mr-3 border border-primary-light bg-yellow-50">
                <img 
                  src={wheatLogo} 
                  alt="Wheat Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h1 className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
                Grain Hub<span className="text-secondary-light"></span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation with improved hover states */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`font-medium transition-colors flex items-center px-2 py-1 rounded ${
                    location.pathname === link.path
                      ? scrolled
                        ? 'text-primary-dark bg-secondary-light' 
                        : 'text-white bg-primary-dark bg-opacity-30'
                      : scrolled
                        ? 'text-gray-700 hover:bg-secondary hover:text-primary-dark'
                        : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-primary' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-2 px-4 rounded-md font-medium flex items-center ${
                location.pathname === link.path
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-secondary hover:text-primary-dark'
              }`}
            >
              <span className="mr-2">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;