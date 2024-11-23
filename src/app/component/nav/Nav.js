'use client'
import React, { useState, useEffect } from 'react';
import Top from './Top';
import NavigationBar from './NavigationBar';
import AllCategoriesDropdown from './AllCategoriesButton';

export default function Nav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white transition-transform duration-300 z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='h-32 px-3 bg-white'>
        <div className='bg-white'>
          <Top />
        </div>
        {/* <div className='text-black flex gap-4 justify-center'>
          <AllCategoriesDropdown />
          <NavigationBar />
        </div> */}
      </div>
    </div>
  );
}
