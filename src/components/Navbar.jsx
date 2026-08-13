import React, { useState } from "react";
import { easeInOut, motion } from "motion/react";

function Navbar() {
  const links = ["Home", "About", "Collections"];
  const [hovered, setHovered] = useState("Home");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}
      className="w-full h-15  flex flex-row items-center justify-between lg:px-40 sm:px-20 px-10"
    >
      <span className="text-3xl font-medium text-[#5A1865] ">AirDopes</span>
      <div className="flex flex-row items-center sm:gap-10 gap-5 h-full ">
        {links.map((link, idx) => (
          <a
            href={"#" + link.toLowerCase()}
            key={idx}
            className="hover:text-[#5A1865]"
          >
            {link}
          </a>
        ))}
        <a href="#collections" className="hover:text-[#5A1865] md:block hidden">
          Wishlist
        </a>
        <a href="#collections" className="hover:text-[#5A1865]  md:block hidden">
          Cart
        </a>
      </div>
    </motion.div>
  );
}

export default Navbar;
