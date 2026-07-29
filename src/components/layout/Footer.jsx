import { SiGithub } from "@icons-pack/react-simple-icons";

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight">Rupesh Kumar</h2>

            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Building modern, scalable, and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/krrupesh2000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-border p-3 transition-all hover:border-primary hover:bg-accent"
            >
              <SiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/rupesh-kumar-196420155/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-border p-3 transition-all hover:border-primary hover:bg-accent"
            >
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor">
                <use href="/icons.svg#social-icon" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Rupesh Kumar. All rights reserved.</p>

          <p>Built with React, Vite & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
