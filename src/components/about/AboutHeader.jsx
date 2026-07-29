import { motion } from "motion/react";
import { fadeRight } from "../../animations/variants";

import Profile from "../../assets/Profile.png";

function AboutHeader() {
  return (
    <motion.div variants={fadeRight} className="flex justify-center">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-border
          bg-card
          p-2
          shadow-lg
          transition-default
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* Ambient Glow */}

        <div
          className="
            absolute
            inset-0
            -z-10
            bg-primary/5
            blur-3xl
            transition-default
            group-hover:bg-primary/10
          "
        />

        {/* Image */}

        <img
          src={Profile}
          alt="Portrait of Rupesh Kumar"
          draggable={false}
          className="
            h-64
            w-56
            rounded-[20px]
            object-cover
            select-none
            transition-default
            group-hover:scale-[1.02]

            sm:h-72 sm:w-64
            lg:h-90 lg:w-72
            xl:h-100 xl:w-80
          "
        />
      </div>
    </motion.div>
  );
}

export default AboutHeader;
