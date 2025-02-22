/* eslint-disable react/prop-types */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const variants = {
  initial: (index) => ({
    x: index % 2 === 0 ? -200 : 200,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
const Card = ({ children, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform  flex flex-col gap-2 cursor-pointer group'
      variants={variants}
      initial='initial'
      whileHover={{ scale: 1.02 }}
      custom={index}
      animate={inView ? "animate" : "initial"}
    >
      {children}
    </motion.div>
  );
};

export default Card;
