import { motion } from "framer-motion";
import { portfolios } from "../data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
const varients = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortfolioImages, setSelectedPortfolioImages] = useState([]);

  const handleCarouselClick = (images) => {
    setSelectedPortfolioImages(images);
    setIsModalOpen(true);
  };
  return (
    <div className='relative'>
      {/* Progress Bar */}
      {/* <div className='sticky top-0 left-0 pt-12 text-center text-orange-500 text-3xl md:text-xl bg-gray-800 w-full z-10'>
        <h1>Featured Works</h1>
        <div className='progressBar h-2 bg-white mt-4 w-full'></div>
      </div> */}

      {/* Portfolio Items */}
      <div className='mt-24 md:mt-7 mb-10  flex flex-col gap-4'>
        {portfolios.map((item) => (
          <section
            key={item.id}
            className=' flex gap-2 items-center overflow-hidden md:min-h-[90vh]'
          >
            <motion.div
              variants={varients}
              initial='initial'
              whileInView='animate'
              className='container mx-auto px-4'
            >
              <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
                <div
                  className='flex-1 h-[50%] overflow-hidden md:p-4'
                  onClick={() => handleCarouselClick(item.images)}
                >
                  <Carousel
                    infiniteLoop
                    autoPlay
                    showThumbs={false}
                    className=' w-full h-full'
                  >
                    {item.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={item.title}
                        className='w-full h-full object-contain md:object-cover rounded-md'
                      />
                    ))}
                  </Carousel>
                </div>
                <motion.div
                  variants={varients}
                  className='flex-1 flex flex-col gap-6'
                >
                  <motion.h2
                    variants={varients}
                    className=' text-2xl sm:text-3xl font-bold xl:text-4xl text-center md:text-left bg-app capitalize'
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    variants={varients}
                    className='text-base md:text-lg text-justify md:text-left md:line-clamp-6 lg:line-clamp-none'
                  >
                    {item.desc}
                  </motion.p>
                  <motion.h1 variants={varients} className=' font-bold bg-app'>
                    Technologies
                  </motion.h1>
                  <motion.div
                    variants={varients}
                    className='flex justify-between gap-4 items-start'
                  >
                    <motion.div
                      variants={varients}
                      className='flex gap-4 items-center flex-wrap'
                    >
                      {item.technologies.map((item, index) => (
                        <motion.div variants={varients} key={index}>
                          {/* <Tooltip
                              arrow
                              title={item.name}
                            > */}
                          <img
                            alt={item.name}
                            src={item.image}
                            width={20}
                            height={20}
                            className=' object-cover rounded-full cursor-pointer'
                          />
                          {/* </Tooltip> */}
                        </motion.div>
                      ))}
                    </motion.div>
                    {item.completed ? (
                      <motion.a
                        variants={varients}
                        href={item.link}
                        target='_blank'
                      >
                        <motion.button className='bg-primary text-white rounded-lg py-2 px-8  cursor-pointer transition-all hover:bg-highlight duration-150 hover:scale-105'>
                          See Demo
                        </motion.button>
                      </motion.a>
                    ) : (
                      <motion.button
                        variants={varients}
                        className='bg-gray-500 text-white rounded-lg py-2 px-8  cursor-not-allowed'
                      >
                        under development
                      </motion.button>
                    )}
                  </motion.div>
                  <motion.div
                    variants={varients}
                    className='flex items-center justify-between'
                  >
                    {/* <motion.div variants={varients}>
                      {item.showGithub ? (
                        <button>
                          <FaGithub className=' text-4xl  text-text_main' />
                        </button>
                      ) : (
                        <div className=' line-through  p-2'>
                          <FaGithub />
                        </div>
                      )}
                    </motion.div> */}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black/25 bg-opacity-90 z-50 flex items-center gap-4 justify-center p-4'
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className='relative max-w-[1000px] bg-white p-4 rounded-lg w-full'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute -top-10 cursor-pointer right-0 text-white text-4xl z-50 hover:text-gray-300'
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <Carousel
              infiniteLoop
              showThumbs={false}
              className='w-full h-full modal-carousel'
              selectedItem={0}
            >
              {selectedPortfolioImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className='w-full h-[80vh] object-cover'
                  alt={`Enlarged view ${index + 1}`}
                />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
