import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
emailjs.init('u_IwJegKEzYgprqiR'); // Replace with your actual EmailJS user ID

import  image1 from '/wheat1.jpeg';
 import image2 from '/rice1.jpeg';
 import image3 from '/wheat_flour.jpeg';

const OrderForm = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Get product details based on productId
  const getProductDetails = (id) => {
    const products = {
      wheat: {
        name: 'Premium Wheat',
        image: image1,
        price: 'Based on Quality',
        minOrder: 1,
      },
      rice: {
        name: 'Organic Rice',
        image: image2,
        price: 'Based on Quality',
        minOrder: 1 ,
      },
      flour: {
        name: 'Wheat Flour',
        image: image3,
        price: 'Based on Quality',
        minOrder: 1,
      },
    };
    
    return products[id] || null;
  };
  
  const product = getProductDetails(productId);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: product ? product.minOrder : 1,
    deliveryAddress: '',
    specialInstructions: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      console.log("Sending email with the following data:", {
        product_name: product.name,
        product_price: product.price,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        quantity: formData.quantity,
        delivery_address: formData.deliveryAddress,
        special_instructions: formData.specialInstructions,
      });
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'Nagraa_007',  // Replace with your actual service ID
        'template_xqlz2qg', // Replace with your actual template ID
        {
          to_email: 'hamzaakahloon903@gmail.com',
          product_name: product.name,
          product_price: product.price,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          quantity: formData.quantity,
          delivery_address: formData.deliveryAddress,
          special_instructions: formData.specialInstructions,
          order_date: new Date().toLocaleDateString()
        },
        't94CNnpdLB2LX6Z6_'  // Replace with your actual user ID
      );
      
      console.log("Email sent successfully:", result);
      setSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        navigate('/order-success');
      }, 2000);
      
    } catch (err) {
      console.error('Submission error details:', err);
      setError('There was an error submitting your order. Please try again. Error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };
  
  if (!product) {
    return (
      <div className="pt-24 section">
        <div className="container-custom text-center">
          <h2 className="section-title text-red-600">Product Not Found</h2>
          <p className="section-subtitle">The product you're looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24">
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Order {product.name}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Complete the form below to place your order.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1" data-aos="fade-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">{product.name}</h3>
                  <p className="text-xl font-bold text-primary mb-4">{product.price}</p>
                  <div className="text-gray-600">
                    <p className="mb-2"><strong>Minimum Order:</strong> {product.minOrder} kg to ton</p>
                    <p><strong>Delivery:</strong> 5-7 business days</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2" data-aos="fade-left">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {success ? (
                  <div className="text-center text-green-600 py-8">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">Order Submitted Successfully!</h3>
                    <p className="mb-4">We'll be in touch with you shortly to confirm your order.</p>
                    <p>Redirecting you to the confirmation page...</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold text-primary-dark mb-6">Your Information</h3>
                    
                    {error && (
                      <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company/Farm Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary-dark mb-6">Order Details</h3>
                    
                    <div className="mb-6">
                      <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity (tons) *</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min={product.minOrder}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="deliveryAddress" className="block text-gray-700 font-medium mb-2">Delivery Address *</label>
                      <textarea
                        id="deliveryAddress"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        rows="3"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="specialInstructions" className="block text-gray-700 font-medium mb-2">Special Instructions</label>
                      <textarea
                        id="specialInstructions"
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        rows="3"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors disabled:bg-gray-400"
                      disabled={submitting}
                    >
                      {submitting ? 'Submitting...' : 'Place Order'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderForm;