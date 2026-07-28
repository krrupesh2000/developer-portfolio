import Section from "../ui/Section";
import SkillGrid from "../skills/SkillGrid";

function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies I use to design, build, and deliver modern web applications."
    >
      <SkillGrid />
    </Section>
  );
}

export default Skills;
