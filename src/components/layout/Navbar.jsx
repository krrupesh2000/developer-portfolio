function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <a href="/" className="text-2xl font-bold text-foreground">
          Rupesh
        </a>

        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-muted-foreground transition-colors duration-default hover:text-primary"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-muted-foreground transition-colors duration-default hover:text-primary"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-muted-foreground transition-colors duration-default hover:text-primary"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-muted-foreground transition-colors duration-default hover:text-primary"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          className="rounded-lg bg-primary px-4 py-2 text-foreground transition-colors duration-default hover:bg-primary-hover"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
