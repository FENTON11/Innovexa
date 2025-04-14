/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { extraTechnologies, technologies } from "../data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.73,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75 },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.1)",
    transition: { duration: 0.2 },
  },
};

const TechnologyProgress = ({ level }) => (
  <div className='w-full bg-gray-700 rounded-full h-2.5 overflow-hidden'>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
      className='bg-blue-500 h-2.5 rounded-full'
    />
  </div>
);

const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id='technologies' ref={ref} className='py-20 relative '>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl font-bold text-center mb-4 text-white'>
            Technologies We Use
          </h2>
          <p className='text-center text-gray-400 max-w-2xl mx-auto mb-12'>
            We leverage cutting-edge technologies across different stacks to
            build high-performance applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
        >
          {technologies.map((stack, index) => (
            <motion.div key={index} className='mb-16' variants={itemVariants}>
              <h3 className='text-xl font-semibold text-gray-300 mb-6 border-b border-gray-700 pb-2'>
                {stack.title}
              </h3>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {stack.technologies.map((tech) => (
                  <motion.div
                    key={tech.id}
                    variants={itemVariants}
                    whileHover='hover'
                    className='rounded-xl p-6 flex flex-col transition-all duration-300 border border-gray-700 cursor-pointer bg-gray-800
                    '
                  >
                    <div className='flex items-center gap-4 mb-4'>
                      <motion.img
                        src={tech.image}
                        alt={tech.name}
                        className='w-12 h-12 object-contain rounded-lg'
                        whileHover={{ scale: 1.1 }}
                      />
                      <h4 className='text-lg font-semibold text-white'>
                        {tech.name}
                      </h4>
                    </div>
                    <p className='text-sm text-gray-400 mb-4 flex-grow'>
                      {tech.description}
                    </p>
                    <div>
                      <div className='flex justify-between text-xs text-gray-500 mb-1'>
                        <span>Proficiency</span>
                        <span>{tech.level}%</span>
                      </div>
                      <TechnologyProgress level={tech.level} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            className='grid md:grid-cols-3 gap-6 mt-12'
            variants={containerVariants}
          >
            {extraTechnologies.map((stack, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className='cursor-pointer p-6 rounded-xl border border-gray-700 bg-gray-800'
              >
                <h3 className='text-xl font-semibold text-gray-300 mb-6 border-b border-gray-700 pb-2'>
                  {stack.title}
                </h3>
                <div className='space-y-6'>
                  {stack.technologies.map((tech) => (
                    <motion.div
                      key={tech.id}
                      className='flex gap-4'
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className='w-10 h-10 object-contain rounded-lg'
                      />
                      <div className='flex-1'>
                        <h4 className='font-medium text-white'>{tech.name}</h4>
                        <p className='text-sm text-gray-400 mb-2'>
                          {tech.description}
                        </p>
                        <TechnologyProgress level={tech.level} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
