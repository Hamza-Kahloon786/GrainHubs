import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    { number: 250, label: 'Clients', suffix: '+' },
    { number: 75, label: 'Projects', suffix: '+' },
    { number: 25, label: 'Years Experience', suffix: '+' },
    { number: 98, label: 'Satisfaction Rate', suffix: '%' },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
                </h3>
                <p className="text-secondary-light text-lg">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
