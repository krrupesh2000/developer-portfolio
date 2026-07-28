import SkillCard from "./SkillCard";

function SkillCategory({ title, skills }) {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillCategory;
