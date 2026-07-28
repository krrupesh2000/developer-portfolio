import { motion } from "motion/react";

import { staggerContainer, fadeUp } from "../../animations/variants";
import SectionTitle from "./SectionTitle";

function Section({ id, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-7xl px-6 py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.div variants={fadeUp}>
        <SectionTitle subtitle={subtitle}>{title}</SectionTitle>
      </motion.div>

      <div className="mt-16">{children}</div>
    </motion.section>
  );
}

export default Section;
