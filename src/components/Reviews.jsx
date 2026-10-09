import React from "react";
import { motion } from "motion/react";
import { useMeasure } from "react-use";

function Reviews() {
  const [ref, { width }] = useMeasure();
  const reviews = [
    {
      name: "Arjun R.",
      comment:
        "The bass is surprisingly powerful for such compact earbuds. I've been using them during workouts and the sound stays clear even at high volume",
    },
    {
      name: "Priya S.",
      comment:
        "Super comfortable for long listening sessions. I wore them for almost 4 hours while studying and barely noticed they were in my ears.",
    },
    {
      name: "Sneha K.",
      comment:
        "The battery backup is excellent. I charged the case once and used the earbuds for nearly an entire week of commuting.",
    },
    {
      name: "Raj S.",
      comment:
        "Crystal-clear call quality! My voice sounds natural even when I'm outdoors, and the noise reduction works really well.",
    },
    {
      name: "Pallavi P.",
      comment:
        "The design looks premium and the matte finish feels much more expensive than I expected. Definitely my favorite everyday earbuds.",
    },
    {
      name: "Arjun R.",
      comment:
        "The bass is surprisingly powerful for such compact earbuds. I've been using them during workouts and the sound stays clear even at high volume",
    },
    {
      name: "Priya S.",
      comment:
        "Super comfortable for long listening sessions. I wore them for almost 4 hours while studying and barely noticed they were in my ears.",
    },
    {
      name: "Sneha K.",
      comment:
        "The battery backup is excellent. I charged the case once and used the earbuds for nearly an entire week of commuting.",
    },
    {
      name: "Raj S.",
      comment:
        "Crystal-clear call quality! My voice sounds natural even when I'm outdoors, and the noise reduction works really well.",
    },
    {
      name: "Pallavi P.",
      comment:
        "The design looks premium and the matte finish feels much more expensive than I expected. Definitely my favorite everyday earbuds.",
    },
  ];
  return (
    <div className="w-full h-fit xl:px-30 lg:px-25 md:px-20 px-10 py-5 mb-10 ">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium italic ">
        What Listeners Say
      </h1>
      <div className="h-0.75 w-50 bg-linear-to-r from-transparent via-[#E579F1] to-95% to-transparent "></div>
      <div
        ref={ref}
        className="overflow-hidden h-full w-[80vw] mask-r-from-90% mask-l-from-90%"
      >
        <motion.div
          animate={{ x: [0, -width * 2] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="h-[35vh] w-full mt-10 flex flex-row gap-5  "
        >
          {reviews.map((r, idx) => (
            <div className="h-full shrink-0 w-80 border border-neutral-300 rounded-3xl p-10 flex flex-col gap-5">
              <h1 className="text-xl">{r.name}</h1>
              <p className="text-neutral-400">{r.comment}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Reviews;
