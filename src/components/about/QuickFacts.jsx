import { FiBriefcase, FiCheckCircle, FiCode, FiMapPin } from "react-icons/fi";

import { motion } from "motion/react";
import { fadeUp, staggerFast } from "../../animations/variants";

function QuickFacts() {
  const facts = [
    {
      icon: FiBriefcase,
      title: "Role",
      value: "Full Stack Developer",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Bihar, India",
    },
    {
      icon: FiCheckCircle,
      title: "Availability",
      value: "Open to Opportunities",
    },
    {
      icon: FiCode,
      title: "Current Focus",
      value: "React • MERN • DevOps",
    },
  ];

  return (
    <motion.div
      variants={staggerFast}
      className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      {facts.map((fact) => {
        const Icon = fact.icon;

        return (
          <motion.div
            key={fact.title}
            variants={fadeUp}
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              shadow-sm
              transition-default
              hover:-translate-y-1
              hover:border-primary/40
              hover:shadow-md
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
                transition-default
                group-hover:scale-105
                group-hover:bg-primary/15
              "
            >
              <Icon size={20} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <p className="text-base font-semibold text-foreground">
                {fact.value}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">{fact.title}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default QuickFacts;
