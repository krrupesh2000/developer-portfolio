import { motion } from "motion/react";

import { fadeUp } from "../../animations/variants";
import { useActiveSection } from "../navbar/useActiveSection";
import NavLinks from "../navbar/NavLinks";
import SocialLinks from "../SocialLinks";

function Footer() {
  const activeSection = useActiveSection();

  return (
    <motion.footer
      className="border-t border-border"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container py-16">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              Rupesh Kumar
            </a>

            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Building modern, scalable, and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <NavLinks activeSection={activeSection} />
          </nav>

          {/* Socials */}
          <SocialLinks />
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-border" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Rupesh Kumar. All rights reserved.</p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
