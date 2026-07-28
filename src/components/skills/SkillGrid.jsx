import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

function SkillGrid() {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

export default SkillGrid;
