import React, { useState, useRef, useEffect } from 'react';
import logo from './assets/LOGO.webp';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef(null);
  const userMenuButtonRef = useRef(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      mobileMenuButtonRef.current &&
      !mobileMenuButtonRef.current.contains(event.target) &&
      userMenuButtonRef.current &&
      !userMenuButtonRef.current.contains(event.target)
    ) {
      closeMobileMenu();
      closeUserMenu();
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen || isUserMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen, isUserMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-30 bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-gray-700   ${isMobileMenuOpen ? 'focus:ring-2 focus:ring-inset focus:ring-gray-900 ' : ''}`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
                ref={mobileMenuButtonRef}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${isMobileMenuOpen ? 'text-black' : 'text-gray-200'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <a href='#'>
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#ticket" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" onClick={closeMobileMenu}>
                    Book Ticket
                  </a>
                  <a href="#team" className="bg-gray-600 text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={closeMobileMenu}>
                    Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#ticket" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page" onClick={closeMobileMenu}>
                Book Ticket
              </a>
              <a href="#team" className="  text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={closeMobileMenu}>
                Team
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}