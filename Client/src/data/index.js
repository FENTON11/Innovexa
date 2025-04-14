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
import ui from "../assets/ui.jpg";

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
    image: ui,
    description: `We specialize in building robust and responsive Android applications tailored to your business needs. From sleek interfaces to efficient performance, our development process ensures that your app is optimized for both speed and scalability on Android devices.

Whether you're launching a brand-new idea or revamping an existing app, we provide end-to-end development — from planning and UI/UX design to deployment and maintenance. We ensure compatibility across devices and adhere to best practices to deliver a seamless user experience.`,
  },
  {
    id: 2,
    icon: FaMobileAlt,
    image: ui,
    title: "Hybrid Mobile App Development",
    description: `Our hybrid app development services allow you to launch your product across multiple platforms with a single codebase. Using modern frameworks, we create apps that feel and perform like native apps on both Android and iOS.

This cross-platform approach saves time and reduces development costs while ensuring a consistent user experience. Whether you're targeting broad user bases or need quick market entry, our hybrid solutions offer the flexibility and efficiency you need.`,
  },
  {
    id: 3,
    icon: FaBrush,
    image: ui,
    title: "UI/UX Design",
    description: `Design is more than just aesthetics — it’s about creating intuitive, enjoyable experiences. Our UI/UX design team crafts interfaces that are not only visually appealing but also user-focused and functional.

We conduct thorough research to understand your users’ behavior and pain points, allowing us to design wireframes and prototypes that truly connect with your audience. The result is a smooth, engaging experience that drives retention and satisfaction.`,
  },
  {
    id: 4,
    icon: FaLaptopCode,
    image: ui,
    title: "Front End Development",
    description: `We bring your designs to life through clean, responsive, and interactive front-end development. Our team leverages modern frameworks and technologies like React to ensure fast performance and a seamless user experience.

From landing pages to complex dashboards, we prioritize accessibility, scalability, and maintainability. Whether you need animations, API integration, or component-based architecture, we deliver front-end solutions that work beautifully across devices.`,
  },
  {
    id: 5,
    icon: FaServer,
    image: ui,
    title: "Backend End Development",
    description: `A powerful backend is the foundation of any high-performing app. We build secure, scalable, and maintainable server-side solutions that handle everything from data storage to user authentication and real-time features.

Whether it's RESTful APIs or complex business logic, our backend development ensures your application runs smoothly and efficiently. We use technologies like Node.js, Express, and MongoDB to provide fast and reliable infrastructure for your digital products.`,
  },
  {
    id: 6,
    icon: TbTestPipe,
    image: ui,
    title: "Unit Testing",
    description: `Our unit testing services ensure that your application’s codebase remains stable, reliable, and easy to maintain. By testing components in isolation, we catch issues early in development before they become costly bugs.

We use industry-standard testing frameworks and tools to automate testing processes, increase coverage, and support CI/CD workflows. This proactive approach saves time in the long run and results in more robust, error-free software.`,
  },
  {
    id: 7,
    icon: TbSeo,
    image: ui,
    title: "SEO Optimization",
    description: `Visibility is everything in today’s digital landscape. Our SEO optimization services help your website rank higher on search engines by improving technical performance, content relevance, and keyword targeting.

We conduct in-depth audits, implement on-page and off-page strategies, and continuously monitor results. Whether you're a local business or global brand, we help drive organic traffic and increase your reach online.`,
  },
  {
    id: 8,
    icon: IoMdBug,
    image: ui,
    title: "Bug Fixing and Debugging",
    description: `Even the best software can run into issues. Our bug fixing and debugging services are designed to quickly identify, diagnose, and resolve errors in your application to keep it running smoothly.

We dive into codebases to trace the root cause of issues, using advanced debugging tools and systematic analysis. Whether it’s performance hiccups or broken functionality, we ensure your software stays reliable and user-friendly.`,
  },
];
