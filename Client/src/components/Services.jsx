import { services } from "../data";
import Card from "../components/Card";
function Services() {
  return (
    <section className='bg-[#1e1e1e] min-h-screen text-text py-20 px-6 overflow-hidden relative'>
      <div className='custom-shape-divider-top-1744401648'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='max-w-6xl mx-auto text-center mb-8'>
        <h2 className='text-4xl font-bold text-primary mb-8'>Our Services</h2>
        <p className='text-secondary text-lg mb-12'>
          We specialize in cutting-edge digital solutions tailored to your
          needs.
        </p>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className=' flex gap-2 even:last:hidden group'
            >
              <div className=' md:p-4'>
                <Card index={index}>
                  <div>
                    <img
                      src={service.image}
                      className=' w-full h-40 rounded-2xl object-cover shadow-2xl'
                      alt=''
                    />
                  </div>
                  <div className='flex items-center gap-2'>
                    <service.icon className='text-3xl text-highlight' />
                    <h3 className='text-2xl font-semibold text-white'>
                      {service.title}
                    </h3>
                  </div>
                  <p className='text-gray-300 mt-3'>{service.description}</p>
                </Card>
              </div>
              <div
                className={`relative hidden md:flex justify-center  items-start z-50 ${
                  index % 2 !== 0 && "md:hidden"
                }`}
              >
                <div className=' cursor-pointer p-3 rounded-full  bg-primary group-hover:bg-highlight'>
                  {" "}
                </div>
                <div className=' absolute h-full z-50 bg-primary w-[.2rem] cursor-pointer group-hover:bg-highlight'></div>
              </div>
              <div className='flex-1 p-4 hidden md:block' />
            </div>
          ))}
        </div>
      </div>
      <div className='custom-shape-divider-bottom-1744631684'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Services;
