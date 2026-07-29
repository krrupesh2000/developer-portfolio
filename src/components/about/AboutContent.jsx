import { motion } from "motion/react";
import { fadeLeft } from "../../animations/variants";

import QuickFacts from "./QuickFacts";
import ResumeButton from "./ResumeButton";

function AboutContent() {
  return (
    <motion.div
      variants={fadeLeft}
      className="mx-auto max-w-xl lg:mx-0 lg:max-w-2xl"
    >
      <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-2xl">
        Crafting modern, performant web applications with a focus on clean code
        and great user experiences.
      </h3>

      <p className="mt-5 lg:mt-6 leading-8 text-muted-foreground">
        I'm a Full Stack Developer passionate about creating responsive,
        user-focused web applications with modern technologies. I enjoy turning
        ideas into intuitive digital experiences while writing clean,
        maintainable, and scalable code.
      </p>

      <p className="mt-3 lg:mt-4 leading-8 text-muted-foreground">
        My current focus is mastering React while building a strong full-stack
        foundation with Node.js, databases, and modern development practices.
        I'm also exploring DevOps and cloud technologies to understand the
        complete software development lifecycle.
      </p>

      <QuickFacts />

      <ResumeButton />
    </motion.div>
  );
}

export default AboutContent;
