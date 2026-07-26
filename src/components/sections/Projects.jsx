import { useEffect, useState } from "react";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
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
        subtitle="Some of my recent GitHub projects."
      >
        Projects
      </SectionTitle>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Card key={repo.id}>
            <h3 className="text-2xl font-bold">{repo.name}</h3>

            <p className="mt-3 text-gray-600">
              {repo.description ?? "No description provided."}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {repo.language || "Unknown"}
              </span>

              <span>⭐ {repo.stargazers_count}</span>
            </div>

            <div className="mt-6 flex gap-4">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
