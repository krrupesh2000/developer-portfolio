import { motion } from "motion/react";
import { fadeUp } from "../../animations/variants";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="
        group
        flex
        min-h-28
        flex-col
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-border
        bg-card
        px-5
        py-6
        text-center
        transition-default
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      <div
        className="
          flex
          h-12
          w-12
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
        <Icon size={22} aria-hidden="true" />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {skill.name}
        </h3>

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          {skill.category}
        </p>
      </div>
    </motion.article>
  );
}

export default SkillCard;
