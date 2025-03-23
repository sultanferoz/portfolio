import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="fixed md:sticky md:top-2 md:mx-auto  w-full md:w-[70%] md:rounded-full z-50 bg-[#1B4D3E] backdrop-blur-lg   shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex px-4 justify-between items-center ">
          <div className="text-[#FFA500]  font-light text-base italic sliding-in">
            Sultan Feroz
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {["Home", "Services", "About", "Tools", "Projects", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {["Home", "Services", "About", "Tools"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-yellow-400 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
