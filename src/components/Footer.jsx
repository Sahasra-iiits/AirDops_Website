import React from "react";
import { motion, easeInOut } from "motion/react";

function Footer() {
  return (
    <motion.div className="h-[30vh] w-full bg-[#5A1865] flex flex-row items-center justify-between md:px-20 sm:px-15 px-5">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className="text-white font-medium xl:text-9xl lg:text-8xl md:text-7xl text-5xl"
      >
        AirDopes
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-neutral-100 flex lg:flex-row flex-col xl:gap-30 lg:gap-20  lg:items-center xl:text-base sm:text-sm text-xs"
      >
        <div className="flex flex-col">
          <a href="#collections" className="hover:text-[#db99e7]">
            Collections
          </a>
          <a href="#about" className="hover:text-[#db99e7]">
            About
          </a>
        </div>
        <div className="flex flex-col ">
          <a href="">Contact Us: email - airdopes@gmail.com</a>
          <a href="">Phno: 912## #####</a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
