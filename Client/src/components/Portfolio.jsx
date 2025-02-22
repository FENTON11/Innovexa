import exccelent from "../assets/excellent.png";
import fresh from "../assets/fresh-grub.png";
import inferno from "../assets/inferno.png";
import eden from "../assets/eden.png";
function Portfolio() {
  // Sample projects (Replace with actual project details)
  const projects = [
    {
      title: "Inferno E-Commerce Platform",
      description:
        "Inferno is a stylish boutique app offering a curated selection of fashion and accessories for trend-conscious shoppers. With its sleek design and user-friendly interface, Inferno provides a seamless shopping experience, featuring exclusive collections, personalized recommendations, and easy ordering. Whether you're looking for chic clothing, footwear, or unique accessories, Inferno brings the latest fashion trends right to your fingertips.",
      image: inferno, // Replace with actual image path
      link: "#",
      completed: false,
    },
    {
      title: "Excellent Health Care",
      description:
        "Excellent Health Care is a comprehensive training system designed to enhance the skills and knowledge of healthcare professionals. It focuses on delivering high-quality education in areas such as patient care, medical procedures, healthcare management, and communication. The system aims to improve the effectiveness of healthcare delivery by offering both theoretical and practical learning experiences, ensuring that practitioners are well-equipped to meet the demands of modern healthcare environments.",
      image: exccelent, // Replace with actual image path
      link: "https://excellent-health-care.vercel.app",
      completed: true,
    },
    {
      title: "Fresh Grub Food ordering app",
      description:
        "Fresh Grub Kenya is a user-friendly food delivery app that connects customers with local restaurants and food vendors across Kenya. The app offers a wide variety of fresh, delicious meals, allowing users to browse menus, place orders, and have food delivered right to their doorstep. With a focus on convenience and quality, Fresh Grub Kenya provides a seamless and reliable way for people to enjoy tasty meals from their favorite eateries",
      image: fresh, // Replace with actual image path
      link: "https://fresh-grub-kenya.onrender.com",
      completed: true,
    },
    {
      title: "Eden- real estate app",
      description:
        "Eden is a comprehensive real estate app that simplifies the process of buying, selling, and renting properties. With an intuitive interface, Eden allows users to browse listings, view detailed property information, and connect directly with agents or sellers. Whether you're looking for a new home, office space, or investment opportunity, Eden offers a seamless experience to help you find your ideal property.",
      image: eden, // Replace with actual image path
      link: "https://eden-estate-front.onrender.com",
      completed: true,
    },
  ];

  return (
    <section className='bg-background text-text min-h-screen flex flex-col items-center px-6 py-12'>
      <h1 className='text-4xl font-bold text-primary mb-6'>Our Portfolio</h1>
      <p className='text-lg text-secondary mb-8 text-center'>
        Explore some of the amazing projects we have built.
      </p>

      <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full md:h-[250] object-cover rounded-md mb-4'
            />
            <h2 className='text-2xl font-semibold text-highlight'>
              {project.title}
            </h2>
            <p className='text-lg text-primary mb-4 line-clamp-3'>
              {project.description}
            </p>
            {project.completed ? (
              <a
                target='_blanck'
                href={project.link}
                className='bg-highlight text-white px-4 py-2 rounded-md inline-block hover:bg-primary transition'
              >
                View Project
              </a>
            ) : (
              <div
                href={project.link}
                className='bg-gray-500 text-white px-4 py-2 rounded-md inline-block  cursor-not-allowed transition'
              >
                under development
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
