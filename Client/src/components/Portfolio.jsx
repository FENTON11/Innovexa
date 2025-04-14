import { motion } from "framer-motion";
import { portfolios } from "../data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const varients = {
  initial: { y: 300, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortfolioImages, setSelectedPortfolioImages] = useState([]);

  const handleExpandClick = (media) => {
    setSelectedPortfolioImages(media);
    setIsModalOpen(true);
  };

  const renderMedia = (mediaItem, index) => {
    if (mediaItem.type === "image") {
      return (
        <img
          key={index}
          src={mediaItem.src}
          alt={`Portfolio Image ${index + 1}`}
          className='w-full max-h-[70vh] object-contain rounded-md mx-auto'
        />
      );
    } else if (mediaItem.type === "video") {
      return (
        <video
          key={index}
          autoPlay
          loop
          muted
          className='w-full max-h-[70vh] object-contain rounded-md bg-white mx-auto'
        >
          <source src={mediaItem.src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className='relative'>
      <div className='mt-24 md:mt-7 mb-10 flex flex-col gap-4'>
        {portfolios.map((item) => (
          <section
            key={item.id}
            className='flex gap-2 items-center overflow-hidden'
          >
            <motion.div
              variants={varients}
              initial='initial'
              whileInView='animate'
              className='container mx-auto px-4'
            >
              <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
                <div className='flex-1 h-[50%] overflow-hidden md:p-4 relative'>
                  <Carousel
                    infiniteLoop
                    autoPlay
                    showThumbs={false}
                    className='w-full h-full'
                  >
                    {item.media.map((mediaItem, index) =>
                      renderMedia(mediaItem, index)
                    )}
                  </Carousel>
                  {/* Expand icon button */}
                  <button
                    onClick={() => handleExpandClick(item.media)}
                    className='hidden md:block absolute bottom-8 right-6 z-10 p-2 bg-white text-highlight shadow-2xl rounded-full cursor-pointer'
                  >
                    <FaExpand size={24} />
                  </button>
                </div>
                <motion.div
                  variants={varients}
                  className='flex-1 flex flex-col gap-6'
                >
                  <motion.h2
                    variants={varients}
                    className='text-2xl sm:text-3xl font-bold xl:text-4xl text-center md:text-left bg-app capitalize'
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    variants={varients}
                    className='text-base md:text-lg text-justify md:text-left md:line-clamp-6 lg:line-clamp-none'
                  >
                    {item.desc}
                  </motion.p>
                  <motion.h1 variants={varients} className='font-bold bg-app'>
                    Technologies
                  </motion.h1>
                  <motion.div
                    variants={varients}
                    className='flex justify-between gap-4 items-start flex-col md:flex-row'
                  >
                    <motion.div
                      variants={varients}
                      className='flex gap-4 items-center flex-wrap'
                    >
                      {item.technologies.map((tech, index) => (
                        <motion.div variants={varients} key={index}>
                          <img
                            alt={tech.name}
                            src={tech.image}
                            width={20}
                            height={20}
                            className='object-cover rounded-full cursor-pointer'
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                    {item.completed ? (
                      <motion.a
                        variants={varients}
                        href={item.link}
                        target='_blank'
                        className=' flex-1'
                      >
                        <motion.button className='bg-primary text-white rounded-lg py-2 px-8 cursor-pointer transition-all hover:bg-highlight duration-150 hover:scale-105 '>
                          See Demo
                        </motion.button>
                      </motion.a>
                    ) : (
                      <motion.button
                        variants={varients}
                        className='bg-gray-500 text-white rounded-lg py-2 px-8 cursor-not-allowed'
                      >
                        under development
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black/25 bg-opacity-90 z-50 md:flex items-center justify-center p-4 hidden '
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className='relative max-w-[1000px] w-full h-[80vh] bg-white p-4 rounded-lg overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-0 right-0 text-white text-4xl z-50 hover:text-gray-300 cursor-pointer bg-primary'
              onClick={() => setIsModalOpen(false)}
            >
              <MdClose />
            </button>
            <Carousel
              infiniteLoop
              showThumbs={false}
              className='w-full h-full modal-carousel'
              selectedItem={0}
            >
              {selectedPortfolioImages.map((mediaItem, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center w-full h-[70vh] overflow-hidden'
                >
                  {renderMedia(mediaItem, index)}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
