import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 shadow-md z-50">
      <div className="flex items-center justify-between w-full">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <Link to="/Homepage">
            <img src="/Logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Right Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 font-extrabold">
          <Link to="/" className="hover:text-amber-500">Home</Link>
          <Link to="/about" className="hover:text-amber-500">About</Link>
          <Link to="/service" className="hover:text-amber-500">Services</Link>
          <Link to="/portfolio" className="hover:text-amber-500">Portfolio</Link>
          <Link to="/ContactUs" className="hover:text-amber-500">Contact Us</Link>
        </div>

        {/* Right Contact Link - Desktop + Mobile Toggle */}
        <div className="flex md:hidden tems-center">
          <div className="hidden md:block font-extrabold"></div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-bold">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-400"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>

          {/* Logo above menu links */}
          <Link to="/Homepage" onClick={() => setIsOpen(false)} className="mb-8">
            <img src="/Logo.png" alt="Logo" className="h-16" />
          </Link>

          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-amber-500">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-amber-500">About</Link>
          <Link to="/service" onClick={() => setIsOpen(false)} className="hover:text-amber-500">Services</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-amber-500">Portfolio</Link>
          <Link to="/ContactUs" onClick={() => setIsOpen(false)} className="hover:text-amber-500">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
