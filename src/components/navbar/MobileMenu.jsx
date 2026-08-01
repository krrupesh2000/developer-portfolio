import { FiX } from 'react-icons/fi';
import clsx from 'clsx';
import { useEffect, useRef, memo } from 'react';

import NavLinks from './NavLinks';

const FOCUSABLE_SELECTORS = `
  a[href],
  button:not([disabled]),
  textarea,
  input,
  select,
  [tabindex]:not([tabindex="-1"])
`;

function MobileMenu({ open, onClose, activeSection, menuButtonRef }) {
  const panelRef = useRef(null);

  /* -------------------------------------------------------
   * Body Scroll Lock
   * ----------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* -------------------------------------------------------
   * Focus Management
   * ----------------------------------------------------- */
  useEffect(() => {
    if (!open) {
      menuButtonRef?.current?.focus();
      return;
    }

    panelRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements =
        panelRef.current?.querySelectorAll(FOCUSABLE_SELECTORS) ?? [];

      if (!focusableElements.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose, menuButtonRef]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 lg:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!open}
    >
      {/* ---------------- Backdrop ---------------- */}

      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className={clsx(
          'absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* ---------------- Drawer ---------------- */}

      <aside
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        tabIndex={-1}
        className={clsx(
          'absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="type-card-title font-semibold">Navigation</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile">
          <NavLinks
            activeSection={activeSection}
            orientation="vertical"
            onNavigate={onClose}
          />
        </nav>

        {/* Resume */}

        <div className="border-t border-border p-6">
          <a
            href="/Rupesh's-resume.pdf"
            download
            className="type-label inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Download Resume
          </a>
        </div>
      </aside>
    </div>
  );
}

const MemoizedMobileMenu = memo(MobileMenu);
MemoizedMobileMenu.displayName = 'MobileMenu';

export default MemoizedMobileMenu;
