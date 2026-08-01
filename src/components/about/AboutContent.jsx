import { motion } from 'motion/react';
import { fadeLeft } from '../../animations/variants';

import QuickFacts from './QuickFacts';
import ResumeButton from './ResumeButton';

function AboutContent() {
  return (
    <motion.div
      variants={fadeLeft}
      className="mx-auto max-w-xl lg:mx-0 lg:max-w-2xl"
    >
      <h4 className="type-subtitle text-center font-bold lg:text-left">
        Crafting modern, performant web applications with a focus on clean code
        and great user experiences.
      </h4>

      <p className="type-body mt-4 text-center lg:mt-5 lg:text-left">
        I&apos;m a Full Stack Developer passionate about creating responsive,
        user-focused web applications with modern technologies. I enjoy turning
        ideas into intuitive digital experiences while writing clean,
        maintainable, and scalable code.
      </p>

      <p className="type-body mt-3 text-center lg:text-left">
        My current focus is mastering React while building a strong full-stack
        foundation with Node.js, databases, and modern development practices.
        I&apos;m also exploring DevOps and cloud technologies to understand the
        complete software development lifecycle.
      </p>

      <QuickFacts />

      <ResumeButton />
    </motion.div>
  );
}

export default AboutContent;
