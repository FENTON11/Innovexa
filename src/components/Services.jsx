import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { FaBrush } from "react-icons/fa6";
import { IoMdBug } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";
function Services() {
  return (
    <section className='bg-background min-h-screen text-text py-20 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl font-bold text-primary mb-8'>Our Services</h2>
        <p className='text-secondary text-lg mb-12'>
          We specialize in cutting-edge digital solutions tailored to your
          needs.
        </p>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Mobile App Development */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <FaMobileAlt className='text-4xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                Android App Development
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <FaMobileAlt className='text-3xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                Hybrid Mobile App Development
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <FaBrush className='text-3xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                UI/UX Design
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>

          {/* Website Development */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <FaLaptopCode className='text-3xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                Front End Development
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <FaServer className='text-3xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                Backend End Development
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <TbTestPipe className='text-3xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                Unit Testing
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <TbSeo className='text-3xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                SEO Optimization
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transition transform hover:scale-105 flex flex-col gap-2'>
            <div className=' flex items-center gap-2'>
              <IoMdBug className='text-3xl text-highlight' />
              <h3 className='text-2xl font-semibold text-white'>
                Bug Fixing and Debugging
              </h3>
            </div>
            <p className='text-gray-300 mt-3'>
              We build intuitive, high-performance mobile applications for iOS
              and Android.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
