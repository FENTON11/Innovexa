import React from "react";

function Portfolio() {
  // Sample projects (Replace with actual project details)
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully functional online shoe store built using the MERN stack.",
      image: "/assets/ecommerce-project.jpg", // Replace with actual image path
      link: "#",
    },
    {
      title: "CampusCrib",
      description: "A housing platform for international students to find accommodation near universities.",
      image: "/assets/campuscrib.jpg", // Replace with actual image path
      link: "#",
    },
    {
      title: "Business Website",
      description: "A sleek and modern business website designed for a client using React.js and TailwindCSS.",
      image: "/assets/business-website.jpg", // Replace with actual image path
      link: "#",
    },
  ];

  return (
    <section className="bg-background text-text min-h-screen flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Our Portfolio</h1>
      <p className="text-lg text-secondary mb-8 text-center">
        Explore some of the amazing projects we have built.
      </p>
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-highlight">{project.title}</h2>
            <p className="text-lg text-primary mb-4">{project.description}</p>
            <a
              href={project.link}
              className="bg-highlight text-white px-4 py-2 rounded-md inline-block hover:bg-primary transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
