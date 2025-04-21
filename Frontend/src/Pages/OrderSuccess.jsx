import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderSuccess = () => {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-primary-dark mb-4">Thank You for Your Order!</h1>
            
            <p className="text-gray-600 mb-6">
              Your order has been submitted successfully. We've sent a confirmation email to your provided email address.
              Our team will review your order and contact you shortly to finalize the details.
            </p>
            
            <div className="bg-secondary-light p-6 rounded-lg mb-8">
              <h3 className="font-bold text-primary-dark mb-2">What Happens Next?</h3>
              <ol className="text-left text-gray-600 space-y-2">
                <li>1. Our team will review your order details</li>
                <li>2. We'll contact you to confirm pricing and delivery</li>
                <li>3. Once confirmed, we'll process your order</li>
                <li>4. Your products will be delivered to your specified address</li>
              </ol>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products" className="btn btn-primary">
                Browse More Products
              </Link>
              <Link to="/" className="btn btn-outline">
                Return to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OrderSuccess;