import { motion } from "motion/react";
import { fadeLeft } from "../../animations/variants";

import QuickFacts from "./QuickFacts";
import ResumeButton from "./ResumeButton";

function AboutContent() {
  return (
    <motion.div variants={fadeLeft} className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        About Me
      </p>

      <h3 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
        Building scalable digital experiences with clean, modern web
        technologies.
      </h3>

      <p className="mt-6 leading-8 text-muted-foreground">
        I'm a Full Stack Developer passionate about creating responsive,
        user-focused web applications with modern technologies. I enjoy turning
        ideas into intuitive digital experiences while writing clean,
        maintainable, and scalable code.
      </p>

      <p className="mt-4 leading-8 text-muted-foreground">
        My current focus is mastering React and strengthening my frontend
        expertise before expanding into backend development. I believe in
        continuous learning, building real-world projects, and improving through
        practical experience.
      </p>

      <QuickFacts />

      <ResumeButton />
    </motion.div>
  );
}

export default AboutContent;
