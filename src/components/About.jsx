import React, { useState } from "react";
import { easeInOut, motion } from "motion/react";
import { div } from "motion/react-client";

function About({ startMove }) {
  return (
    <div
      id="about"
      className="w-full h-auto lg:h-[70vh] flex flex-col-reverse lg:flex-row lg:mt-0 mt-10"
    >
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative">
        {!startMove && (
          <div>
            <motion.img
              initial={{ y: 10 }}
              whileInView={{ y: -40 }}
              viewport={{ amount: 0.6 }}
              transition={{ delay: 0.7, ease: "linear", duration: 0.2 }}
              src="right.png"
              alt=""
              layoutId="right"
              className="absolute lg:left-[48%] left-[48%] xl:h-55 lg:h-50 h-45 lg:top-20 top-0 z-10"
            />
            <motion.img
              initial={{ y: 10 }}
              whileInView={{ y: -40 }}
              viewport={{ amount: 0.6 }}
              transition={{ delay: 0.5, ease: "linear", duration: 0.2 }}
              src="left.png"
              alt=""
              layoutId="left"
              className="absolute lg:left-[23%] left-[35%] xl:h-55 lg:h-50 h-45 lg:top-20 top-0 z-10"
            />
          </div>
        )}
        <motion.img
          src="img.png"
          alt=""
          className="z-20 xl:h-70 lg:h-60 h-55 ani:inline hidden"
        />
      </div>
      <div className=" w-full lg:w-1/2 h-full xl:py-40 lg:py-30 md:py-15 xl:pr-35 lg:pr-27 md:pr-15 pr-5 xl:pl-10 pl-9 flex flex-col gap-8">
        <motion.h1
          initial={{ filter: "blur(5px)", x: 80, opacity: 0 }}
          whileInView={{ filter: "blur(0px)", x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3, ease: easeInOut }}
          className="text-3xl font-medium italic"
        >
          Designed for the Way You Listen
        </motion.h1>
        <motion.p
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3, ease: easeInOut }}
          className="text-lg text-neutral-500"
        >
          At YourBrand, we believe great audio should feel effortless. Our
          earpods combine premium sound quality, ergonomic comfort, and smart
          wireless technology to deliver a seamless listening experience
          throughout your day. Whether you're working, studying, traveling,
          gaming, or relaxing with your favorite playlist, our earpods are
          engineered to provide rich bass, balanced vocals, and reliable
          connectivity without compromising on style.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
