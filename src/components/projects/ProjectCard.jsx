import Card from '../ui/Card';
import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink, FiImage } from 'react-icons/fi';
import { projectMetadata } from '../../data/projectMetadata';

function ProjectCard({ repo }) {
  const normalizedName = repo.name.toLowerCase().replace(/[\s_]+/g, '-');

  const metadata =
    projectMetadata[repo.name] ||
    projectMetadata[repo.name.toLowerCase()] ||
    projectMetadata[normalizedName] ||
    {};

  const technologies = metadata.technologies || [repo.language || 'Unknown'];

  const visibleTechnologies = technologies.slice(0, 4);
  const remaining = technologies.length - visibleTechnologies.length;

  return (
    <Card
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-lg
      "
    >
      {/* Project Image */}
      <div className="relative overflow-hidden border-b">
        {metadata.image ? (
          <>
            <img
              src={metadata.image}
              alt={`${repo.name} project screenshot`}
              loading="lazy"
              decoding="async"
              className="
                h-44
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
                sm:h-48
                lg:h-52
              "
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </>
        ) : (
          <div className="flex h-44 items-center justify-center bg-muted text-muted-foreground sm:h-48 lg:h-52">
            <div className="text-center">
              <FiImage
                size={36}
                className="mx-auto opacity-60"
                aria-hidden="true"
              />

              <p className="mt-3 text-sm font-medium">Preview Coming Soon</p>

              <p className="mt-1 text-xs">Screenshot will be added</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Title */}
        <h3 className="break-words text-xl font-semibold tracking-tight capitalize lg:text-2xl">
          {repo.name}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {repo.description || 'No description available.'}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-2.5
                py-1
                text-xs
                font-medium
                text-primary
                transition-colors
                hover:bg-primary/20
              "
            >
              {tech}
            </span>
          ))}

          {remaining > 0 && (
            <span
              className="
                rounded-full
                border
                border-dashed
                border-border
                px-2.5
                py-1
                text-xs
                text-muted-foreground
              "
            >
              +{remaining}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6">
          <div className="mb-6 border-t border-border" />

          <div className="grid gap-3 sm:grid-cols-2">
            {/* GitHub */}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${repo.name} source code on GitHub`}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-border
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                hover:border-primary/30
                hover:bg-accent
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>

            {/* Live Demo */}
            {repo.homepage ? (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo of ${repo.name}`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-primary
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:shadow-md
                  hover:brightness-110
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                "
              >
                <span>Live Demo</span>
                <FiExternalLink size={16} />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-lg border border-dashed border-border px-4 py-2 text-sm font-medium text-muted-foreground">
                Demo Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
