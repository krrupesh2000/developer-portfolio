import { useEffect, useState } from 'react';
import { navItems } from './navItems';

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '-35% 0px -55% 0px',
  threshold: 0,
};

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const homeSection = document.getElementById('home');
    if (homeSection) {
      sections.push(homeSection);
    }

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        const activeId = visibleSections[0].target.id;
        if (activeId === 'home') {
          setActiveSection(null);
        } else {
          setActiveSection(activeId);
        }
      } else {
        setActiveSection(null);
      }
    }, OBSERVER_OPTIONS);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
