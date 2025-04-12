import react from "../assets/react.png";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.jpeg";
import node from "../assets/node.png";
import appwrite from "../assets/appwrite.jpeg";
// import next from "../assets/next.jpeg";
import mongodb from "../assets/mongodb.jpeg";
// import mysql from "../assets/mysql.jpeg";
// import prisma from "../assets/prisma.jpeg";
// import webSocket from "../assets/sockets.jpeg";
// import reactNative from "../assets/react-native.jpeg";
// import python from "../assets/python.jpeg";
// import photoshop from "../assets/photoshop.png";
// import figma from "../assets/figma.jpeg";
import freshGrub from "../assets/fresh grub.png";
// import streamHaven from "../assets/strean-haven.png";
import excellent from "../assets/excellent-health-care.png";
import eden from "../assets/eden.png";
// import jumia from "../assets/jumia.png";
import digitech from "../assets/digitech.png";
// import linkUp from "../assets/link up.png";
import express from "../assets/express.png";
import stripe from "../assets/stripe.png";
import styled from "../assets/styled.png";
// import sass from "../assets/sass.png";
// import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
// import paypal from "../assets/paypal.png";
// import sketch from "../assets/sketch.png";
// import typedscript from "../assets/typedscript.jpeg";
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { FaBrush } from "react-icons/fa6";
import { IoMdBug } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";

export const portfolios = [
  {
    id: 1,
    title: "Excellent health care app ",
    images: [excellent, digitech, eden],
    link: "https://excellent-health-care.vercel.app",
    completed: true,
    desc: "Excellent Health Care is a comprehensive training system designed to enhance the skills and knowledge of healthcare professionals. It focuses on delivering high-quality education in areas such as patient care, medical procedures, healthcare management, and communication. The system aims to improve the effectiveness of healthcare delivery by offering both theoretical and practical learning experiences, ensuring that practitioners are well-equipped to meet the demands of modern healthcare environments.",
    technologies: [
      {
        name: "react",
        image: react,
      },
      {
        name: "mongodb",
        image: mongodb,
      },
      {
        name: "express",
        image: express,
      },
      {
        name: "node",
        image: node,
      },
      {
        name: "styled-components",
        image: styled,
      },
      {
        name: "stripe",
        image: stripe,
      },
    ],
  },
  {
    id: 2,
    title: "digitech E-ccomerce app",
    images: [digitech, excellent, digitech, eden],
    completed: true,
    link: "https://digitech-plum.vercel.app",
    desc: "DigiTech is a sleek and easy-to-navigate eCommerce app specializing in electronics. It offers a wide range of the latest gadgets, from smartphones and laptops to home appliances and accessories. With secure payment options, fast delivery, and competitive pricing, DigiTech makes shopping for high-quality electronics convenient and reliable, all from the palm of your hand.",
    technologies: [
      {
        name: "react",
        image: react,
      },
      {
        name: "mongodb",
        image: mongodb,
      },
      {
        name: "express",
        image: express,
      },
      {
        name: "node",
        image: node,
      },
      {
        name: "styled-components",
        image: styled,
      },
      {
        name: "stripe",
        image: stripe,
      },
    ],
  },
  {
    id: 4,
    title: "fresh grub food app",
    images: [freshGrub, excellent, digitech, eden],
    completed: true,
    link: "https://fresh-grub-kenya.onrender.com",
    desc: " Fresh Grub Kenya is a user-friendly food delivery app that connects customers with local restaurants and food vendors across Kenya. The app offers a wide variety of fresh, delicious meals, allowing users to browse menus, place orders, and have food delivered right to their doorstep. With a focus on convenience and quality, Fresh Grub Kenya provides a seamless and reliable way for people to enjoy tasty meals from their favorite eateries.",
    technologies: [
      {
        name: "react",
        image: react,
      },
      {
        name: "appwrite",
        image: appwrite,
      },
      {
        name: "styled-components",
        image: styled,
      },
      {
        name: "redux",
        image: redux,
      },
      {
        name: "stripe",
        image: stripe,
      },
    ],
  },
  {
    id: 7,
    title: "Eden- real estate app",
    images: [eden, excellent, digitech, eden],
    completed: true,
    link: "https://eden-estate-front.onrender.com",
    desc: "Eden is a comprehensive real estate app that simplifies the process of buying, selling, and renting properties. With an intuitive interface, Eden allows users to browse listings, view detailed property information, and connect directly with agents or sellers. Whether you're looking for a new home, office space, or investment opportunity, Eden offers a seamless experience to help you find your ideal property.",
    technologies: [
      {
        name: "react",
        image: react,
      },
      {
        name: "appwrite",
        image: appwrite,
      },
      {
        name: "mongodb",
        image: mongodb,
      },
      {
        name: "express",
        image: express,
      },
      {
        name: "node",
        image: node,
      },
      {
        name: "styled-components",
        image: styled,
      },
      {
        name: "framer-motion",
        image: styled,
      },
      {
        name: "stripe",
        image: stripe,
      },
    ],
  },
];
export const services = [
  {
    id: 1,
    icon: FaMobileAlt,
    title: "Android App Development",
    description:
      "Craft seamless, high-performance Android apps tailored to your unique needs. From concept to launch, we bring your ideas to life on the world's most popular mobile platform.",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Hybrid Mobile App Development",
    description:
      "Build once, deploy everywhere. Our hybrid apps offer cross-platform compatibility and a native-like experience, saving you time and resources.",
  },
  {
    id: 3,
    icon: FaBrush,
    title: "UI/UX Design",
    description:
      "Create stunning, user-centric designs that captivate and engage. Our UI/UX experts ensure your app or website is intuitive, beautiful, and a joy to use.",
  },
  {
    id: 4,
    icon: FaLaptopCode,
    title: "Front End Development",
    description:
      "Transform your designs into responsive, interactive web experiences. We use the latest technologies to deliver fast, visually appealing front-end solutions.",
  },
  {
    id: 5,
    icon: FaServer,
    title: "Backend End Development",
    description:
      "Power your applications with robust, scalable backend solutions. Our experts handle databases, servers, and APIs to ensure smooth, reliable performance.",
  },
  {
    id: 6,
    icon: TbTestPipe,
    title: "Unit Testing",
    description:
      "Ensure your software is bug-free and reliable with comprehensive unit testing. We identify and fix issues early, saving you time and money.",
  },
  {
    id: 7,
    icon: TbSeo,
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic with expert SEO strategies. We optimize your content and structure to rank higher on search engines.",
  },
  {
    id: 8,
    icon: IoMdBug,
    title: "Bug Fixing and Debugging",
    description:
      "Keep your software running smoothly with our expert bug fixing and debugging services. We quickly identify and resolve issues to minimize downtime.",
  },
];
