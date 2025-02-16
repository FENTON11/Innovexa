import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-text py-4 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          INNOVEXA
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-highlight">Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-highlight">Services</Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-highlight">Team</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-highlight">Portfolio</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-highlight">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-highlight">Contact</Link>
          </li>
          <li>
            <Link to="/quote">
            <button className="bg-highlight px-4 py-2 rounded-md text-white hover:bg-primary">
              Get Free Quote
            </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-background text-text space-y-4 px-6 py-4">
          <li>
            <Link to="/" className="hover:text-highlight" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-highlight" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-highlight" onClick={() => setIsOpen(false)}>Team</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-highlight" onClick={() => setIsOpen(false)}>Portfolio</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-highlight" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-highlight" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
          <li>
            <Link to="/quote" onClick={() => setIsOpen(false)}>
            <button className="bg-highlight px-4 py-2 rounded-md text-white hover:bg-primary">
              Get Free Quote
            </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
