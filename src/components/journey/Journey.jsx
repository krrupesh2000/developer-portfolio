import SectionTitle from "../ui/SectionTitle";

import JourneyItem from "./JourneyItem";
import { journeyData } from "./journeyData";

function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-6 py-24">
      <SectionTitle
        align="center"
        subtitle="A snapshot of my learning journey, current focus, and long-term vision as I grow into a Full-Stack + DevOps Engineer."
      >
        Learning Journey
      </SectionTitle>

      <div className="mx-auto mt-16 max-w-3xl">
        {journeyData.map((item, index) => (
          <JourneyItem
            key={item.title}
            item={item}
            isLast={index === journeyData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Journey;
