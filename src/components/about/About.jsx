import Section from "../ui/Section";

import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";

function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better.">
      <div className="grid items-center lg:items-start gap-10 md:gap-12 lg:gap-14 xl:gap-20 lg:grid-cols-2 ">
        <AboutHeader />
        <AboutContent />
      </div>
    </Section>
  );
}

export default About;
