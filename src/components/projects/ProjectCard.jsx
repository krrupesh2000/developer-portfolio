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
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.2rem]
        border
        border-border/80
        bg-card/95
        p-0
        shadow-[0_12px_30px_-22px_rgba(15,23,42,0.55)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_20px_42px_-24px_rgba(59,130,246,0.45)]
      "
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-[0.95rem] border-b border-border/75 bg-muted ring-1 ring-inset ring-border/50">
        {metadata.image ? (
          <>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-background/65 via-transparent to-transparent" />
            <img
              src={metadata.image}
              alt={`${repo.name} project screenshot`}
              loading="lazy"
              decoding="async"
              className="
                aspect-video
                w-full
                rounded-t-[0.95rem]
                object-cover
                object-center
                transition-all
                duration-500
                group-hover:scale-[1.03]
              "
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
          </>
        ) : (
          <div className="flex aspect-16/10 items-center justify-center bg-muted text-muted-foreground sm:aspect-video lg:aspect-4/3">
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
      <div className="relative flex flex-1 flex-col p-3">
        <h3 className="wrap-break-word text-center text-sm font-semibold tracking-tight capitalize text-foreground sm:text-center md:text-center lg:text-left lg:text-base">
          {repo.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-center text-xs leading-5 text-muted-foreground sm:text-center md:text-center lg:text-left">
          {repo.description || 'No description available.'}
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-1.5 sm:justify-center md:justify-center lg:justify-start">
          {visibleTechnologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-2
                py-0.5
                text-[10px]
                font-medium
                text-primary
                transition-colors
                duration-300
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
                px-2
                py-0.5
                text-[10px]
                text-muted-foreground
              "
            >
              +{remaining}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4">
          <div className="mb-3 border-t border-border/70" />

          <div className="grid gap-2 sm:grid-cols-2">
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
                bg-background/70
                px-3
                py-2
                text-xs
                font-medium
                transition-all
                duration-300
                hover:border-primary/40
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
                  px-3
                  py-2
                  text-xs
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
              <span className="inline-flex items-center justify-center rounded-lg border border-dashed border-border px-3 py-2 text-xs font-medium text-muted-foreground">
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
