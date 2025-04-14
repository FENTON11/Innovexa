import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import { MdArrowOutward } from "react-icons/md";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-background text-text py-4 px-6 shadow-lg overflow-x-hidden'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='text-3xl font-bold text-primary flex gap-4 items-center'
        >
          VEXACODE
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-6 font-medium'>
          <li>
            <Link to='/' className='hover:text-highlight'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/services' className='hover:text-highlight'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/team' className='hover:text-highlight'>
              Team
            </Link>
          </li>
          <li>
            <Link to='/portfolio' className='hover:text-highlight'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to='/about' className='hover:text-highlight'>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/contact' className='hover:text-highlight'>
              Contact
            </Link>
          </li>
          <li>
            <Link to='#'>
              <button className='bg-highlight px-4 py-2 rounded-md text-white hover:bg-primary flex items-center gap-2 cursor-pointer'>
                Hire us <MdArrowOutward />
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-2xl'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}

      <Drawer open={isOpen} setOpen={setIsOpen} />
    </nav>
  );
}

export default Navbar;
