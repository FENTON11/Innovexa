import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaCogs } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const WhyUs = () => {
  return (
    <motion.section
      className="min-h-screen bg-background py-20 px-6 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 font-rubik-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Innovexa?
        </motion.h2>

        <motion.p
          className="text-center text-white max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Innovexa, we blend innovation, expertise, and technology to deliver powerful web, mobile, and TV app solutions that help your business grow.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="text-primary text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Experienced Team</h3>
            <p className="text-white">
              Our team consists of highly skilled developers, designers, and engineers who are passionate about building exceptional digital products.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="text-primary text-4xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Client-Centered Approach</h3>
            <p className="text-white">
              We listen to your goals and tailor each solution to match your needs. Your success is our top priority.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="text-primary text-4xl mb-4">
              <FaCogs />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">End-to-End Solutions</h3>
            <p className="text-white">
              From idea to deployment and beyond, we offer complete development services — including UI/UX, frontend, backend, and support.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300"
          >
            Let’s Build Together
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
