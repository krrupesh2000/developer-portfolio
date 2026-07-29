import Card from "../ui/Card";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projectMetadata } from "../../data/projectMetadata";

function ProjectCard({ repo }) {
  const normalizedName = repo.name.toLowerCase().replace(/[\s_]+/g, "-");
  const metadata =
    projectMetadata[repo.name] ||
    projectMetadata[repo.name.toLowerCase()] ||
    projectMetadata[normalizedName] ||
    {};

  const technologies = metadata.technologies || [repo.language || "Unknown"];

  const visibleTechnologies = technologies.slice(0, 4);
  const remaining = technologies.length - visibleTechnologies.length;

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
      {metadata.image ? (
        <img
          src={metadata.image}
          alt={`${repo.name} preview`}
          className="h-52 w-full border-b object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-52 items-center justify-center border-b bg-muted text-muted-foreground">
        <div className="text-center">
          <div className="text-3xl">🖼️</div>

          <p className="mt-2 text-sm font-medium">Project Preview</p>

          <p className="mt-1 text-xs">Screenshot Coming Soon</p>
        </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Project Name */}
        <h3 className="text-2xl font-semibold tracking-tight capitalize">
          {repo.name}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">
          {repo.description || "No description provided."}
        </p>

        {/* Technology Chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              {tech}
            </span>
          ))}

          {remaining > 0 && (
            <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs text-muted-foreground">
              +{remaining}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <div className="my-6 border-t border-border" />

          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary/30 hover:bg-accent"
            >
              <SiGithub size={16} />
              <span>GitHub</span>
            </a>

            {/* Live Demo */}
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
