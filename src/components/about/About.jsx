import Section from '../ui/Section';

import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';

function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better."
      viewport
    >
      <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <AboutHeader />
        <AboutContent />
      </div>
    </Section>
  );
}

export default About;
