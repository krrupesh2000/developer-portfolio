import { motion } from 'motion/react';
import { fadeUp } from '../../animations/variants';

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="
        group
        flex
        min-h-24
        flex-col
        items-center
        justify-center
        gap-2.5
        rounded-lg
        border
        border-border
        bg-card
        px-3
        py-4
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
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-primary/10
          text-primary
          transition-default
          group-hover:scale-105
          group-hover:bg-primary/15
        "
      >
        <Icon size={22} aria-hidden="true" />
      </div>

      <div className="flex min-w-0 flex-col items-center">
        <h3 className="type-card-title max-w-full text-wrap font-semibold">
          {skill.name}
        </h3>

        <p className="type-eyebrow mt-1.5 max-w-full text-wrap font-medium uppercase text-primary">
          {skill.category}
        </p>
      </div>
    </motion.article>
  );
}

export default SkillCard;
