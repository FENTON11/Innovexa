/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import { FaBriefcase, FaTools, FaEnvelope, FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
const variants = {
  hidden: { opacity: 0, x: "40vh", scale: 0, transition: { duration: 0.5 } },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 360,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: "40vh",
    scale: 0,
    transition: { duration: 0.5 },
  },
};
const Drawer = ({ setOpen, open }) => {
  return (
    <motion.div
      variants={variants}
      animate={open ? "visible" : "hidden"}
      exit='exit'
      className={`absolute z-[1000000] w-full max-w-64 bg-main_bg ring-1 ring-gray-500/50 rounded-lg py-4 p-2  duration-75 right-1 top-20 md:hidden bg-background flex flex-col gap-4 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <Link
        href='/'
        className='text-2xl font-bold text-primary hover:text-highlight'
      >
        INNOVEXA
      </Link>
      <li className=' list-none flex items-center gap-2 group'>
        <FaHome className=' group-hover:text-highlight text-xl' />
        <Link
          to='/'
          className='group-hover:text-highlight'
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
      </li>
      <li className=' list-none flex items-center gap-2 group'>
        <FaTools className=' group-hover:text-highlight text-xl' />
        <Link
          to='/services'
          className='hover:text-highlight'
          onClick={() => setOpen(false)}
        >
          Services
        </Link>
      </li>
      <li className=' list-none flex items-center gap-2 group'>
        <FaPeopleGroup className=' group-hover:text-highlight text-xl' />
        <Link
          to='/team'
          className='hover:text-highlight'
          onClick={() => setOpen(false)}
        >
          Team
        </Link>
      </li>
      <li className=' list-none flex items-center gap-2 group'>
        <FaBriefcase className=' group-hover:text-highlight text-xl' />
        <Link
          to='/portfolio'
          className='hover:text-highlight'
          onClick={() => setOpen(false)}
        >
          Portfolio
        </Link>
      </li>
      <li className=' list-none flex items-center gap-2 group'>
        <FaEnvelope className=' group-hover:text-highlight text-xl' />
        <Link
          to='/about'
          className='hover:text-highlight'
          onClick={() => setOpen(false)}
        >
          About Us
        </Link>
      </li>
      <li className=' list-none flex items-center gap-2 group'>
        <IoMdContacts className=' group-hover:text-highlight text-xl' />
        <Link
          to='/contact'
          className='hover:text-highlight'
          onClick={() => setOpen(false)}
        >
          Contact Us
        </Link>
      </li>

      <p className=' pacifico-regular text-text_main'>
        &copy; {new Date().getFullYear()} innovexa.
      </p>
      <p className=' pacifico-regular text-text_main'>All rights reserved.</p>
    </motion.div>
  );
};

export default Drawer;
