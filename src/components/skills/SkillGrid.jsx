import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

function SkillGrid() {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

export default SkillGrid;
