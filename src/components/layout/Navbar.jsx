function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <a href="/" className="text-2xl font-bold">
            Rupesh
          </a>
        </div>

        <ul className="flex items-center gap-8">
          <li>
            <a href="#about" className="transition-colors duration-300 hover:text-blue-600">About</a>
          </li>

          <li>
            <a href="#skills" className="transition-colors duration-300 hover:text-blue-600">Skills</a>
          </li>

          <li>
            <a href="#projects" className="transition-colors duration-300 hover:text-blue-600">Projects</a>
          </li>

          <li>
            <a href="#contact" className="transition-colors duration-300 hover:text-blue-600">Contact</a>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
