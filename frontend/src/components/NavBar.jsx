import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            ZARDED AI
          </a>
        </div>
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </span>
        </button>
        <div
          className={`lg:flex lg:items-center lg:w-auto w-full ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <li className="nav-item">
              <a
                href="#"
                className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2 lg:py-0"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2 lg:py-0"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2 lg:py-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
