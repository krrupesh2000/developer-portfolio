import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="mt-12 border-t border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h2 className="type-subtitle font-bold">Rupesh Kumar</h2>

          {/* Role */}
          <p className="type-small mt-2 font-medium text-primary">
            Full-Stack Developer | MERN
          </p>

          {/* Description */}
          <p className="type-small mt-4 max-w-2xl text-muted-foreground">
            Passionate about building modern, scalable, and user-friendly web
            applications while continuously learning new technologies and best
            practices.
          </p>

          {/* Divider */}
          <div className="my-4 h-px w-24 bg-border" />

          {/* CTA */}
          <p className="type-small text-muted-foreground">
            Let&apos;s build something amazing together.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/krrupesh2000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-border
                px-5
                py-3
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-accent
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              <FaGithub size={18} />
              <span className="type-label font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rupesh-kumar-196420155/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-border
                px-5
                py-3
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-accent
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              <FaLinkedinIn size={18} aria-hidden="true" />
              <span className="type-label font-medium">LinkedIn</span>
            </a>

            <a
              href="mailto:krrupesh2000@gmail.com"
              aria-label="Email"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-border
                px-5
                py-3
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-accent
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              <FiMail size={18} />
              <span className="type-label font-medium">Email</span>
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-6 w-full border-t border-border/70 pt-3">
            <p className="type-small text-muted-foreground">
              &copy; {new Date().getFullYear()} Rupesh Kumar. Designed &
              Developed with React, Vite & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
