import { motion } from "motion/react";
import { fadeUp } from "../../animations/variants";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="
        group
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        transition-default
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      <div
        className="
          mb-5
          flex
          h-12
          w-12
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
        <Icon size={22} />
      </div>

      <h3 className="text-lg font-semibold tracking-tight">{skill.name}</h3>

      <p
        className="
          mt-1
          text-xs
          font-medium
          uppercase
          tracking-[0.18em]
          text-primary
        "
      >
        {skill.category}
      </p>

      <p
        className="
          mt-4
          text-sm
          leading-7
          text-muted-foreground
        "
      >
        {skill.description}
      </p>
    </motion.article>
  );
}

export default SkillCard;
