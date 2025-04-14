import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300  relative pb-8'>
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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-white'>
              <span className='bg-app'>VEXACODE</span>
            </h2>
            <p className='text-sm leading-relaxed'>
              Pioneering the future of enterprise technology solutions.
              Transforming businesses through innovation and cutting-edge
              digital solutions.
            </p>
            <div className='flex space-x-4'>
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
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='hover:text-white transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='hover:text-white transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/portfolio'
                  className='hover:text-white transition-colors'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Contact Us</h3>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <MdLocationOn className='text-blue-400' />
                <span>Nairobi, Kenya</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MdPhone className='text-blue-400' />
                <span>+254 706 502923 or</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MdPhone className='text-blue-400' />
                <span>+254 112 483569</span>
              </div>

              <div className='flex items-center space-x-2'>
                <MdEmail className='text-blue-400' />
                <span>fencurt99@gmail.com or</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MdEmail className='text-blue-400' />
                <span>codewithgodie99@gmail.com</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MdAccessTime className='text-blue-400' />
                <span>Sun-Sat: 8AM - 11PM EAT</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
          <p className='text-sm text-gray-500'>
            © 2024-{new Date().getFullYear()} VEXACODE Technologies. All rights
            reserved.
          </p>
          <p className='text-xs text-gray-600 mt-2'>
            Proudly building the future with sustainable technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
