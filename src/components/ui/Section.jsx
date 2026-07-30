import { motion } from 'motion/react';
import clsx from 'clsx';

import { staggerContainer } from '../../animations/variants';
import SectionTitle from './SectionTitle';

function Section({ id, title, subtitle, children, viewport = false }) {
  return (
    <motion.section
      id={id}
      className={clsx('section', viewport && 'section-viewport')}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="container">
        <div>
          <SectionTitle subtitle={subtitle}>{title}</SectionTitle>
        </div>

        <div className="section-content">{children}</div>
      </div>
    </motion.section>
  );
}

export default Section;
