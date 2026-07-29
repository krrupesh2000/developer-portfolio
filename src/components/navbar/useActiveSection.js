import { useEffect, useState } from "react";
import { navItems } from "./navItems";

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: "-35% 0px -55% 0px",
  threshold: 0,
};

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    }, OBSERVER_OPTIONS);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
