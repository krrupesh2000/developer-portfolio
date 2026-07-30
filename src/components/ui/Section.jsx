import { motion } from "motion/react";

import { staggerContainer, fadeUp } from "../../animations/variants";
import SectionTitle from "./SectionTitle";

function Section({ id, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="container">
        <motion.div variants={fadeUp}>
          <SectionTitle subtitle={subtitle}>{title}</SectionTitle>
        </motion.div>

        <div className="section-content">{children}</div>
      </div>
    </motion.section>
  );
}

export default Section;
