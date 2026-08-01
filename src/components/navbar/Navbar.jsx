import {
  useEffect,
  useState,
  useRef,
  Suspense,
  lazy,
  useCallback,
  memo,
} from 'react';
import { FiMenu } from 'react-icons/fi';
import clsx from 'clsx';

import NavLinks from './NavLinks';
import { useActiveSection } from './useActiveSection';
import { scrollToSection } from '../../utils/scrollTo';

const MobileMenu = lazy(() => import('./MobileMenu'));

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

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleLogoClick = (event) => {
    event.preventDefault();
    scrollToSection('#home');
  };

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="container flex h-16 items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="type-subtitle font-bold"
          >
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
              href="/Rupesh's-resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="type-label hidden rounded-xl bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90 lg:inline-flex"
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
              <FiMenu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <Suspense fallback={null}>
        <MobileMenu
          open={menuOpen}
          onClose={closeMenu}
          activeSection={activeSection}
          menuButtonRef={menuButtonRef}
        />
      </Suspense>
    </>
  );
}

const MemoizedNavbar = memo(Navbar);
MemoizedNavbar.displayName = 'Navbar';

export default MemoizedNavbar;
