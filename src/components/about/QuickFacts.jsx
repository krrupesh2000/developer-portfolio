import { BadgeCheck, BriefcaseBusiness, Code2, MapPin } from "lucide-react";

import { motion } from "motion/react";
import { fadeUp, staggerFast } from "../../animations/variants";

function QuickFacts() {
  const facts = [
    {
      icon: BriefcaseBusiness,
      title: "Role",
      value: "Full Stack Developer",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bihar, India",
    },
    {
      icon: BadgeCheck,
      title: "Availability",
      value: "Open to Opportunities",
    },
    {
      icon: Code2,
      title: "Current Focus",
      value: "React & Full Stack",
    },
  ];

  return (
    <motion.div
      variants={staggerFast}
      className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      {facts.map((fact) => {
        const Icon = fact.icon;

        return (
          <motion.div
            key={fact.title}
            variants={fadeUp}
            className="
              group
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
                mb-4
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
                transition-default
                group-hover:scale-110
                group-hover:bg-primary/15
              "
            >
              <Icon size={20} aria-hidden="true" />
            </div>

            <h4 className="text-sm font-medium text-muted-foreground">
              {fact.title}
            </h4>

            <p className="mt-1 text-base font-semibold text-foreground">
              {fact.value}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default QuickFacts;
