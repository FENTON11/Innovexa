import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import heroImage from "../assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const Navigate = useNavigate();
  return (
    <section className='bg-background text-text md:h-screen flex flex-col justify-center items-center px-6'>
      <div className='max-w-6xl w-full flex flex-col md:flex-row items-center'>
        {/* Left Side - Heading & Button */}
        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-bold text-primary leading-tight'>
            Innovate. Build. Grow.
          </h1>
          <p className='mt-4 text-secondary text-lg'>
            We help businesses and startups create outstanding digital
            solutions.
          </p>
          <button
            onClick={() => Navigate("/services")}
            className='mt-6 bg-highlight text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-primary'
          >
            Get Started
          </button>
        </div>

        {/* Right Side - Image */}
        <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center'>
          <img
            src={heroImage}
            alt='Innovexa Hero'
            className='w-full max-w-md md:max-w-lg rounded-lg shadow-lg'
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className='max-w-6xl w-full md:flex-row items-center mt-12'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
          {/* Left Side - Social Media Icons */}
          <div className='flex gap-6'>
            <span className='btnicon'>
              <FaFacebookF />
            </span>
            <span className='btnicon'>
              <FaTwitter />
            </span>
            <span className='btnicon'>
              <FaLinkedinIn />
            </span>
          </div>

          {/* Right Side - Plain Text */}
          <div className='text-secondary text-sm md:text-base mt-4 md:mt-0'>
            Software Policy • Terms of Service
          </div>
        </div>

        {/* Line Separator & Copyright Text */}
        <div className='w-full mt-4 border-t border-gray-700 text-center pt-4 text-sm text-gray-400'>
          © {new Date().getFullYear()} Innovexa. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Hero;
