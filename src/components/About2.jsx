import React from "react";
import { motion } from "motion/react";

function About2({ startMove }) {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center xl:text-base md:text-sm">
      {startMove && (
        <motion.img
          src="left.png"
          alt=""
          className="absolute left-30 h-60"
          layoutId="left"
          transition={{ duration: 0.5 }}
        />
      )}
      {startMove && (
        <motion.img
          src="right.png"
          alt=""
          className="absolute right-30 h-60"
          layoutId="right"
          transition={{ duration: 0.5 }}
        />
      )}
      <p className="absolute text-neutral-500 top-30 xl:left-200 md:left-150">
        Noise Cancellation
      </p>
      <p className="absolute text-neutral-500 bottom-30 xl:left-100 md:left-70">
        48-hour Playback
      </p>
      <p className="absolute text-neutral-500 bottom-10 xl:left-250 md:left-180">
        With Deep Bass
      </p>
      <p className="absolute text-neutral-500 top-25 left-120">
        IP57 Dust Resistant
      </p>

      <SVG />
      <BackSVG />
    </div>
  );
}

const SVG = () => {
  return (
    <motion.svg
      height="500"
      viewBox="0 0 302 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-600 z-20 xl:w-[800px] lg:w-[550px] w-[400px]"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 15, repeat: Infinity }}
        d="M0 54.5333H42C45.1243 43.7775 46.8757 46.157 50 54.5333H54.5C54.5 54.5333 59 76.5333 60.5 54.5333C62 32.5333 63 21.0333 63 21.0333L67 82.5333L71.5 52.5333H74.5L76 44.0333L77.5 59.5333L79 52.5333H107.5C111.333 42.1222 112.543 46.3306 115.5 52.5333H119.5C121.648 64.8055 122.853 64.3978 125 52.5333L128.5 0.0332594L134.5 104.033L137.5 52.5333H141.5L143 44.5333L144.5 59.5333L146 52.5333H172.5C174.786 43.4716 177.593 43.0402 180 52.5333H184C186.039 62.8043 187.075 64.6232 188.5 52.5333L191 21.0333L194.5 82.5333L197.5 52.5333H201L202.5 44.5333L204 59.5333L205.5 52.5333H230C232.539 43.5211 234.461 43.6118 237 52.5333H241C242.842 65.392 243.671 63.239 245 52.5333L249.5 1.03326L253.5 104.033L258 52.5333H261.5L262.5 44.5333L264.5 59.5333L265.5 52.5333H301.5"
        stroke="currentColor"
      />
    </motion.svg>
  );
};

const BackSVG = () => {
  return (
    <motion.svg
      height="500"
      viewBox="0 0 302 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-300 absolute z-10 xl:w-[800px] lg:w-[550px] w-[400px]"
    >
      <motion.path
        d="M0 54.5333H42C45.1243 43.7775 46.8757 46.157 50 54.5333H54.5C54.5 54.5333 59 76.5333 60.5 54.5333C62 32.5333 63 21.0333 63 21.0333L67 82.5333L71.5 52.5333H74.5L76 44.0333L77.5 59.5333L79 52.5333H107.5C111.333 42.1222 112.543 46.3306 115.5 52.5333H119.5C121.648 64.8055 122.853 64.3978 125 52.5333L128.5 0.0332594L134.5 104.033L137.5 52.5333H141.5L143 44.5333L144.5 59.5333L146 52.5333H172.5C174.786 43.4716 177.593 43.0402 180 52.5333H184C186.039 62.8043 187.075 64.6232 188.5 52.5333L191 21.0333L194.5 82.5333L197.5 52.5333H201L202.5 44.5333L204 59.5333L205.5 52.5333H230C232.539 43.5211 234.461 43.6118 237 52.5333H241C242.842 65.392 243.671 63.239 245 52.5333L249.5 1.03326L253.5 104.033L258 52.5333H261.5L262.5 44.5333L264.5 59.5333L265.5 52.5333H301.5"
        stroke="currentColor"
      />
    </motion.svg>
  );
};
export default About2;
