import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const journey = [
  {
    id: 1,
    year: "2026",
    title: "Started Web Development",
    description: "Began learning programming fundamentals and web development.",
  },
  {
    id: 2,
    year: "2026",
    title: "Frontend Development",
    description: "Learned HTML, CSS, Tailwind CSS, and JavaScript.",
  },
  {
    id: 3,
    year: "2026",
    title: "React Development",
    description: "Building reusable components and modern React applications.",
  },
  {
    id: 4,
    year: "Next",
    title: "Full Stack MERN & DevOps",
    description:
      "Learning backend development, cloud technologies, and deployment.",
  },
];

function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        align="center"
        subtitle="My learning journey toward becoming a Full Stack Developer."
      >
        Journey
      </SectionTitle>

      <div className="space-y-8">
        {journey.map((item) => (
          <Card key={item.id}>
            <p className="text-sm font-semibold text-muted-foreground">{item.year}</p>

            <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>

            <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Journey;
