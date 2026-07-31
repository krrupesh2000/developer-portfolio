import Card from '../ui/Card';
import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink, FiImage } from 'react-icons/fi';
import { getProjectMetadata } from '../../data/projectMetadata';

function ProjectCard({ repo }) {
  const metadata = getProjectMetadata(repo.name);
  const technologies = metadata.technologies || [repo.language || 'Unknown'];
  const liveDemoUrl = metadata.homepage || repo.homepage;

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
      <div className="relative border-b border-border/75 bg-muted/35 p-2.5">
        <div className="relative h-44 overflow-hidden rounded-xl border border-border/80 bg-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-inset ring-white/5 sm:h-48 lg:h-[11.5rem]">
          {metadata.image ? (
            <>
              <img
                src={metadata.image}
                alt={`${repo.name} project screenshot`}
                loading="lazy"
                decoding="async"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-muted text-muted-foreground">
              <div className="text-center">
                <FiImage
                  size={36}
                  className="mx-auto opacity-60"
                  aria-hidden="true"
                />

                <p className="type-small mt-3 font-medium">Preview Coming Soon</p>

                <p className="type-caption mt-1">Screenshot will be added</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="type-card-title wrap-break-word text-center font-semibold capitalize text-foreground sm:text-center md:text-center lg:text-left">
          {repo.name}
        </h3>

        <p className="type-small mt-2 line-clamp-3 text-center text-muted-foreground sm:text-center md:text-center lg:text-left">
          {repo.description || 'No description available.'}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-center md:justify-center lg:justify-start">
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
                type-badge
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
                px-2.5
                py-1
                type-badge
                text-muted-foreground
              "
            >
              +{remaining}
            </span>
          )}
        </div>

        <div className="mt-auto pt-5">
          <div className="mb-4 border-t border-border/70" />

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
                type-badge
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

            {liveDemoUrl ? (
              <a
                href={liveDemoUrl}
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
                  type-badge
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
              <span className="type-badge inline-flex items-center justify-center rounded-lg border border-dashed border-border px-3 py-2 font-medium text-muted-foreground">
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
