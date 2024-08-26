'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && !isLg) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Set initial screen size
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY, isLg]);

  const handleScrollToSection = (id : any, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`w-full h-[74px] z-50 pt-2 text-white flex flex-row justify-center items-center fixed ${
        isLg ? 'top-0' : 'bottom-0'
      } transition-transform duration-300 ${
        isVisible || isLg ? 'transform-none' : 'transform translate-y-full'
      }`}
    >
      <div className="bg-[#1E1E1E]/80 w-[80%] md:w-auto h-full rounded-xl border-2 border-white/20">
        <ul className="flex w-full sm:w-[300px] md:w-[450px] lg:w-[550px] justify-around items-center h-full">
          {['home', 'experience', 'projects', 'contact']
            .filter((section) => isLg || section !== 'home')
            .map((section, index) => (
              <motion.li
                key={section}
                className="cursor-pointer hover:bg-[#6666] py-2 px-2 sm:px-3 md:px-4 rounded-xl"
                onClick={() =>
                  handleScrollToSection(section, index === 2 ? -75 : index === 3 ? -50 : 74)
                }
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 700 }}
                style={{ willChange: 'transform' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
              </motion.li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
