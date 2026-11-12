import React from "react";
import { motion } from "motion/react";
import { useMeasure } from "react-use";
import { div } from "motion/react-client";

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
  ];
  return (
    <div className="w-full h-fit xl:px-30 lg:px-25 md:px-20 px-10 py-5 mb-10 ">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium italic ">
        What Listeners Say
      </h1>
      <div className="h-0.75 w-50 bg-linear-to-r from-transparent via-[#E579F1] to-95% to-transparent"></div>

      <div className="overflow-hidden w-full mask-r-from-90% mask-l-from-90%">
        <motion.div
          animate={width ? { x: [0, -(width + 20)] } : false}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="h-[35vh] w-max mt-10 flex flex-row gap-5"
        >
          {/* First group — measured to get exact content width */}
          <div ref={ref} className="flex flex-row gap-5 shrink-0">
            {reviews.map((r, idx) => (
              <ReviewCard name={r.name} comment={r.comment} idx={idx} />
            ))}
          </div>

          {/* Duplicate group — seamless loop */}
          <div className="flex flex-row gap-5 shrink-0">
            {reviews.map((r, idx) => (
              <ReviewCard name={r.name} comment={r.comment} idx={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ReviewCard({ name, comment, idx }) {
  return (
    <div
      key={idx}
      className="h-full shrink-0 w-80 border border-neutral-300 rounded-3xl p-10 flex flex-col gap-5"
    >

      <div className="flex flex-row justify-start items-center gap-2">
        <svg className="w-10 h-10" viewBox="-2.4 -2.4 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#5A1865" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="profile"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z" fill="#5A1865"></path> <path id="rec (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z" fill="#5A1865"></path> </g> </g> </g></svg>
        <h1 className="text-xl">{name}</h1>

      </div>
      <p className="text-neutral-500">{comment}</p>
    </div >
  )
}

export default Reviews;
