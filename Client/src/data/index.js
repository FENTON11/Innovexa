import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.jpeg";
import node from "../assets/node.png";
import appwrite from "../assets/appwrite.jpeg";
import next from "../assets/next.jpeg";
import mongodb from "../assets/mongodb.jpeg";
import mysql from "../assets/mysql.jpeg";
import figma from "../assets/figma.jpeg";
import webSocket from "../assets/sockets.jpeg";
import reactNative from "../assets/react-native.jpeg";
// import python from "../assets/python.jpeg";
// import photoshop from "../assets/photoshop.png";
// import streamHaven from "../assets/strean-haven.png";
// import jumia from "../assets/jumia.png";
// import linkUp from "../assets/link up.png";
import express from "../assets/express.png";
import stripe from "../assets/stripe.png";
import styled from "../assets/styled.png";
// import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
// import paypal from "../assets/paypal.png";
// import sketch from "../assets/sketch.png";
import typedscript from "../assets/typedscript.jpeg";
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { FaBrush } from "react-icons/fa6";
import { IoMdBug } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";
import ui from "../assets/ui.jpg";
import front from "../assets/front.jpg";
import seo from "../assets/seo.jpg";
import hybrid from "../assets/hybrid.png";
import test from "../assets/test.png";
import mobile from "../assets/mobile.jpg";
import backend from "../assets/backend.png";
import infernovideo from "../assets/inferno.mp4";
import inferno1 from "../assets/inferno-1.png";
import inferno2 from "../assets/inferno-2.png";
import inferno3 from "../assets/inferno-3.png";
import inferno4 from "../assets/inferno-4.png";
import inferno5 from "../assets/inferno-5.png";
import inferno6 from "../assets/inferno-6.png";
import excellentVideo from "../assets/excellent.mp4";
import excellent2 from "../assets/excellent-2.png";
import excellent3 from "../assets/excellent-3.png";
import posVideo from "../assets/pos.mp4";
import pos1 from "../assets/pos-1.png";
import pos4 from "../assets/pos-4.png";

import digitech1 from "../assets/digitech-1.png";
import digitech2 from "../assets/digitech-2.png";
import digitech3 from "../assets/digitech-3.png";
import digitech4 from "../assets/digitech-4.png";
import digitech5 from "../assets/digitech-5.png";
import digitech6 from "../assets/digitech-6.png";
import digitech7 from "../assets/digitech-7.png";

import eden1 from "../assets/eden-1.png";
import eden2 from "../assets/eden-2.png";
import eden3 from "../assets/eden-3.png";
import eden4 from "../assets/eden-4.png";
import eden5 from "../assets/eden-5.png";

import fresh1 from "../assets/fresh-1.png";
import fresh2 from "../assets/fresh-2.png";
import fresh3 from "../assets/fresh-3.png";
import fresh4 from "../assets/fresh-4.png";
export const portfolios = [
  {
    id: 1,
    title: "Excellent health care app ",
    media: [
      { type: "video", src: excellentVideo },
      { type: "image", src: excellent2 },
      { type: "image", src: excellent3 },
    ],
    link: "https://excellenthealthcareer.com",
    completed: true,
    desc: "Excellent Health Care is a comprehensive training system designed to enhance the skills and knowledge of healthcare professionals. It focuses on delivering high-quality education in areas such as patient care, medical procedures, healthcare management, and communication. The system aims to improve the effectiveness of healthcare delivery by offering both theoretical and practical learning experiences, ensuring that practitioners are well-equipped to meet the demands of modern healthcare environments.",
    technologies: [
      {
        name: "react",
        image: react,
      },
      {
        name: "tailwindcss",
        image: tailwind,
      },
    ],
  },
  {
    id: 1,
    title: "Inferno boutique ",
    media: [
      { type: "image", src: inferno1 },
      { type: "image", src: inferno2 },
      { type: "image", src: inferno3 },
      { type: "image", src: inferno4 },
      { type: "image", src: inferno5 },
      { type: "image", src: inferno6 },
      { type: "video", src: infernovideo },
    ],
    link: "https://excellent-health-care.vercel.app",
    completed: false,
    desc: "Excellent Health Care is a comprehensive training system designed to enhance the skills and knowledge of healthcare professionals. It focuses on delivering high-quality education in areas such as patient care, medical procedures, healthcare management, and communication. The system aims to improve the effectiveness of healthcare delivery by offering both theoretical and practical learning experiences, ensuring that practitioners are well-equipped to meet the demands of modern healthcare environments.",
    technologies: [
      {
        name: "next",
        image: next,
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
        name: "tailwind",
        image: tailwind,
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
    media: [
      { type: "image", src: digitech1 },
      { type: "image", src: digitech2 },
      { type: "image", src: digitech3 },
      { type: "image", src: digitech4 },
      { type: "image", src: digitech5 },
      { type: "image", src: digitech5 },
      { type: "image", src: digitech6 },
      { type: "image", src: digitech7 },
    ],
    completed: true,
    link: "https://digitech-plum.vercel.app",
    desc: "DigiTech is a sleek and easy-to-navigate eCommerce app specializing in electronics. It offers a wide range of the latest gadgets, from smartphones and laptops to home appliances and accessories. With secure payment options, fast delivery, and competitive pricing, DigiTech makes shopping for high-quality electronics convenient and reliable, all from the palm of your hand.",
    technologies: [
      {
        name: "next",
        image: next,
      },
      {
        name: "appwrite",
        image: appwrite,
      },
      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "node",
        image: node,
      },
      {
        name: "websockets",
        image: webSocket,
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
    media: [
      { type: "image", src: fresh1 },
      { type: "image", src: fresh2 },
      { type: "image", src: fresh3 },
      { type: "image", src: fresh4 },
    ],
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
    media: [
      { type: "image", src: eden1 },
      { type: "image", src: eden2 },
      { type: "image", src: eden3 },
      { type: "image", src: eden4 },
      { type: "image", src: eden5 },
    ],
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
  {
    id: 7,
    title: `Point  of sale desktop app`,
    media: [
      { type: "video", src: posVideo },
      { type: "image", src: pos1 },
      { type: "image", src: pos4 },
    ],
    completed: false,
    link: "https://eden-estate-front.onrender.com",
    desc: `We developed a Point of Sale (POS) System designed to streamline sales, inventory, and customer management for retail/hospitality businesses. This project included features such as:

✅ Sales Processing – Fast checkout with cash, card, and digital payment support.
✅ Inventory Tracking – Real-time stock updates to prevent shortages.
✅ Sales Analytics – Reports on top-selling items, revenue trends, and peak hours.
✅ User-Friendly Interface – Intuitive design for quick employee training.
✅ Multi-Platform Access – Cloud-based (web/mobile) or on-premise deployment.`,
    technologies: [
      {
        name: "react",
        image: react,
      },
      {
        name: "SQLite",
        image: mysql,
      },
      {
        name: "electron",
        image: mongodb,
      },
    ],
  },
];
export const services = [
  {
    id: 1,
    icon: FaMobileAlt,
    image: mobile,
    title: "Android App Development",
    description:
      "We build fast, scalable Android apps tailored to your business goals, offering seamless user experiences across all devices.",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    image: hybrid,
    title: "Hybrid Mobile App Development",
    description:
      "Cross-platform apps with native feel — one codebase, multiple platforms. Save time, cut costs, and launch faster.",
  },
  {
    id: 3,
    icon: FaBrush,
    image: ui,
    title: "UI/UX Design",
    description:
      "Visually stunning, user-friendly interfaces that boost engagement and usability. We focus on both form and function.",
  },
  {
    id: 4,
    icon: FaLaptopCode,
    image: front,
    title: "Front End Development",
    description:
      "Responsive, modern web interfaces built with the latest tech to ensure high performance and a smooth user journey.",
  },
  {
    id: 5,
    icon: FaServer,
    image: backend,
    title: "Backend Development",
    description:
      "Scalable, secure server-side logic and API development to power fast, reliable, and data-driven applications.",
  },
  {
    id: 6,
    icon: TbTestPipe,
    image: test,
    title: "Unit Testing",
    description:
      "Reliable code through automated unit testing. We prevent bugs early and ensure long-term code stability and quality.",
  },
  {
    id: 7,
    icon: TbSeo,
    image: seo,
    title: "SEO Optimization",
    description:
      "Boost your visibility with smart SEO strategies. We help your site rank higher and attract organic traffic efficiently.",
  },
  {
    id: 8,
    icon: IoMdBug,
    image: ui,
    title: "Bug Fixing & Debugging",
    description:
      "We quickly identify and resolve bugs to keep your app stable, functional, and ready for a smooth user experience.",
  },
];
export const technologies = [
  {
    title: "Frontend Fundamentals",
    technologies: [
      {
        id: 1,
        name: "HTML5",
        image: html,
        description:
          "The core markup language for creating web pages and applications.",
        level: 95,
      },
      {
        id: 2,
        name: "CSS3",
        image: css,
        description:
          "Stylesheet language for designing responsive and animated interfaces.",
        level: 90,
      },
      {
        id: 3,
        name: "JavaScript",
        image: javascript,
        description:
          "Versatile programming language for interactive web experiences.",
        level: 85,
      },
    ],
  },
  {
    title: "Frontend Frameworks",
    technologies: [
      {
        id: 4,
        name: "React",
        image: react,
        description:
          "Component-based library for building dynamic UIs with virtual DOM.",
        level: 90,
      },
      {
        id: 5,
        name: "Next.js",
        image: next,
        description:
          "React framework for server-side rendering and static websites.",
        level: 80,
      },
      {
        id: 6,
        name: "TypeScript",
        image: typedscript,
        description:
          "Typed JavaScript superset for scalable application development.",
        level: 75,
      },
      {
        id: 7,
        name: "Redux",
        image: redux,
        description: "Predictable state container for JavaScript applications.",
        level: 85,
      },
    ],
  },
  {
    title: "Backend Technologies",
    technologies: [
      {
        id: 8,
        name: "Node.js",
        image: node,
        description:
          "JavaScript runtime for building scalable server-side applications.",
        level: 85,
      },
      {
        id: 9,
        name: "Express.js",
        image: express,
        description:
          "Minimalist web framework for Node.js with robust features.",
        level: 80,
      },
      {
        id: 10,
        name: "WebSockets",
        image: webSocket,
        description:
          "Protocol for real-time bidirectional event-based communication.",
        level: 70,
      },
    ],
  },
];

export const extraTechnologies = [
  {
    title: "Mobile Development",
    technologies: [
      {
        id: 11,
        name: "React Native",
        image: reactNative,
        description: "Framework for building native mobile apps using React.",
        level: 80,
      },
    ],
  },
  {
    title: "UI/UX Design",
    technologies: [
      {
        id: 12,
        name: "Figma",
        image: figma,
        description:
          "Collaborative interface design tool with prototyping features.",
        level: 75,
      },
    ],
  },
];
