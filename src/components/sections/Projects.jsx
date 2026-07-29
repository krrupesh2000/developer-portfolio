import { useEffect, useState } from "react";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../projects/ProjectCard";

import { getRepositories } from "../../services/github";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const data = await getRepositories();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return <section className="py-20 text-center">Loading projects...</section>;
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">{error}</section>
    );
  }

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        align="center"
        subtitle="A selection of projects that showcase my skills in modern web development."
      >
        Projects
      </SectionTitle>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
