import React from "react";
import godie from "../assets/godie.png";
import fenton from "../assets/fenton.png";
import { motion } from "framer-motion";
import { FaUserTie, FaLaptopCode } from "react-icons/fa";

const teamMembers = [
  {
    name: "Fenton Mwangi",
    role: "Chief Executive Officer",
    icon: <FaUserTie className="inline mr-2" />,
    image: fenton,
    bio: "Fenton is the visionary behind VexaCode, leading with a passion for innovation, growth, and impact. He ensures clients receive nothing but the best through strategic leadership and client engagement.",
  },
  {
    name: "Godfrey Maina",
    role: "Senior Lead Developer",
    icon: <FaLaptopCode className="inline mr-2" />,
    image: godie,
    bio: "Godfrey architects and leads the development of web, mobile, and TV applications. His full-stack expertise and dedication to clean, scalable code power our technical excellence.",
  },
];

function Team() {
  return (
    <section className='bg-background text-text min-h-screen flex flex-col justify-center items-center px-6 py-16'>
      <motion.h1
        className='text-4xl font-bold text-primary mb-10 text-center'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h1>

      <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className='bg-gray-800 p-8 rounded-xl shadow-xl text-center transition transform hover:scale-105'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className='w-40 h-40 mx-auto rounded-full mb-4 object-cover object-top border-4 border-primary'
            />
            <h2 className='text-2xl font-semibold text-highlight mb-1'>
              {member.name}
            </h2>
            <p className='text-primary mb-4'>{member.icon}{member.role}</p>
            <p className='text-gray-300 text-sm leading-relaxed'>{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Team;
