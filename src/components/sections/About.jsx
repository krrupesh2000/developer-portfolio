import SectionTitle from "../ui/SectionTitle";
import Profile from "../../assets/Profile.png"

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle subtitle="Get to know me better.">About</SectionTitle>

      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="flex justify-center md:w-1/3">
          <div className="h-72 w-72 rounded-2xl bg-gray-300 transition-transform duration-500 hover:scale-105">
            <img
              src={Profile}
              alt="Profile"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold">Full Stack MERN Developer</h3>

          <p className="mt-4 leading-8 text-gray-600">
            I'm a passionate Full Stack MERN Developer who enjoys building
            responsive and scalable web applications. I love learning new
            technologies and continuously improving my development skills. My
            current focus is mastering React, backend development, and DevOps to
            become a well-rounded software engineer.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <span className="font-semibold">Name:</span> Rupesh Kumar
            </div>

            <div>
              <span className="font-semibold">Location:</span> Bihar, India
            </div>

            <div>
              <span className="font-semibold">Email:</span>{" "}
              krrupesh2000@gmail.com
            </div>

            <div>
              <span className="font-semibold">Availability:</span> Open to
              Opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
