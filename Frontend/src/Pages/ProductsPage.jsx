import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '/wheat1.jpeg';
 import image2 from '/manger.jpg';

const ProductsPage = () => {
  const products = [
    {
      id: 'wheat',
      name: 'Premium Wheat',
      image: 'wheat1.jpeg',
      description: 'High-quality wheat grain sourced from Kotli Korotana farms. Perfect for flour production and various food applications.',
      price: 'Based on Quality',
    },
    {
      id: 'rice',
      name: 'Organic Rice',
      image: 'rice1.jpeg',
      description: 'Organically grown rice from sustainable farms. Available in white and brown varieties.',
      price: 'Based on Quality',
    },
    {
      id: 'flour',
      name: 'Wheat Flour',
      image: 'wheat_flour.jpeg',
      description: 'Finely milled wheat flour, ideal for baking bread, pastries, and other culinary uses.',
      price: 'Based on Quality',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Quality agricultural products sourced directly from Kotli Korotana farms.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
              Browse our selection of premium agricultural products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-lg overflow-hidden h-full shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary-dark">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary-dark">{product.price}</span>
                      <Link 
                        to={`/order/${product.id}`} 
                        className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Call to Action */}
<section className="section bg-secondary-light py-16">
  <div className="container-custom text-center" data-aos="fade-up">
    <h2 className="section-title text-2xl font-bold mb-6">Need Help Choosing?</h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-8">
      Our agricultural experts are available to discuss your specific requirements 
      and help you select the right products.
    </p>
    <Link 
      to="/contact" 
      className="btn btn-primary mt-6 py-3 px-8 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
    >
      Contact Our Team
    </Link>
  </div>
</section>
    </div>
  );
};

export default ProductsPage;