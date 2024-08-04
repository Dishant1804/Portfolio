'use client'

import { motion } from 'framer-motion';

const Navbar = () => {
  const handleScroll = (id: string, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="w-full h-[74px] pt-2 text-white flex flex-row justify-center items-center">
      <div className="bg-[#1E1E1E]/80 h-full rounded-xl border-2 border-white/20">
        <ul className="flex w-[550px] justify-around items-center h-full">
          {['home', 'experience', 'projects', 'contact'].map((section, index) => (
            <motion.li
              key={section}
              className="cursor-pointer hover:bg-[#6666] py-2 px-4 rounded-xl"
              onClick={() => handleScroll(section, index === 2 ? -75 : index === 3 ? -50 : 74)}
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
}

export default Navbar;
