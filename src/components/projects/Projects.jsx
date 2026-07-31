import { useEffect, useState } from 'react';

import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ProjectCard from './ProjectCard';

import { getRepositories } from '../../services/github';

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
        setError(err.message || 'Unable to load projects.');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <SectionTitle
          align="center"
          subtitle="A selection of projects demonstrating my experience in building modern, responsive, and scalable web applications."
        >
          <span id="projects-heading">Projects</span>
        </SectionTitle>

        {/* Loading */}
        {loading && (
          <div
            className="section-content grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            aria-live="polite"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <div className="h-48 animate-pulse bg-muted" />

                <div className="space-y-4 p-6">
                  <div className="h-6 w-2/3 animate-pulse rounded bg-muted" />

                  <div className="space-y-2">
                    <div className="h-4 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-4/6 animate-pulse rounded bg-muted" />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <div className="h-7 w-16 animate-pulse rounded-full bg-muted" />
                    <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
                    <div className="h-7 w-14 animate-pulse rounded-full bg-muted" />
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex gap-3">
                      <div className="h-10 flex-1 animate-pulse rounded-lg bg-muted" />
                      <div className="h-10 flex-1 animate-pulse rounded-lg bg-muted" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <Card className="section-content rounded-2xl border border-destructive/20 p-10 text-center">
            <h3 className="type-card-title font-semibold">Unable to load projects</h3>

            <p className="type-small mt-2 text-muted-foreground">{error}</p>
          </Card>
        )}

        {/* Empty */}
        {!loading && !error && repos.length === 0 && (
          <Card className="section-content rounded-2xl p-10 text-center">
            <h3 className="type-card-title font-semibold">No projects available</h3>

            <p className="type-small mt-2 text-muted-foreground">
              Projects will appear here once they are published.
            </p>
          </Card>
        )}

        {/* Projects */}
        {!loading && !error && repos.length > 0 && (
          <div className="section-content grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
