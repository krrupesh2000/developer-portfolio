import { useEffect, useState, useRef } from "react";
import { Menu } from "lucide-react";
import clsx from "clsx";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useActiveSection } from "./useActiveSection";

function Navbar() {
  const activeSection = useActiveSection();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
        >
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold tracking-tight">
            RK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavLinks activeSection={activeSection} />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 lg:inline-flex"
            >
              Resume
            </a>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              ref={menuButtonRef}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-lg p-2 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
        menuButtonRef={menuButtonRef}
      />
    </>
  );
}

export default Navbar;
