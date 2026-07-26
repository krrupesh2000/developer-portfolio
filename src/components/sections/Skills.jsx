import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        align="center"
        subtitle="Technologies I use to build modern web applications."
      >
        Skills
      </SectionTitle>

      <div
        className="
          grid
          grid-cols-2
          gap-6
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
      >
        {skills.map((skill) => (
          <Card key={skill} className="text-center">
            <h3 className="text-lg font-semibold">{skill}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Skills;
