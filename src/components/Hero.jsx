import React from "react";
import Navbar from "./Navbar";
import { easeInOut, motion } from "motion/react";

function Hero() {
  return (
    <motion.div
      id="home"
      className="w-full h-screen text-white bg-linear-to-br from-white via-70% via-[#5A1865] to-90% to-white"
    >
      <Navbar />
      <div className="flex flex-row items-center justify-center h-[90%]">
        <div className="w-1/2 flex flex-col xl:pl-35 lg:pl-25 pl-20 xl:pr-10 pr-5 lg:pr-8 gap-10">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
            className="xl:text-7xl text-6xl font-medium tracking-tight overflow-hidden "
          >
            Hear Every Beat. Feel Every Moment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: easeInOut }}
            className="text-neutral-300 text-left lg:text-base text-sm"
          >
            Experience immersive sound, deep bass, crystal-clear calls, and
            all-day comfort designed for music lovers and everyday creators.
          </motion.p>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: easeInOut }}
            src="heroimg.png"
            alt=""
            className="xl:h-100 lg:h-80 h-70"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
