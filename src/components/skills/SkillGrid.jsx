import { skills } from '../../data/skills';
import SkillCard from './SkillCard';

function SkillGrid() {
  return (
    <div
      className="
        grid
        grid-cols-[repeat(auto-fit,minmax(min(100%,8.5rem),1fr))]
        gap-4
        sm:gap-6
        lg:grid-cols-[repeat(auto-fit,minmax(9.5rem,1fr))]
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
