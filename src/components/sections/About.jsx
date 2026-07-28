import Section from "../ui/Section";

import AboutHeader from "../about/AboutHeader";
import AboutContent from "../about/AboutContent";

function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better.">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        <AboutHeader />
        <AboutContent />
      </div>
    </Section>
  );
}

export default About;
