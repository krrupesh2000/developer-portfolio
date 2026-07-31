import { memo, useCallback } from 'react';
import clsx from 'clsx';
import { navItems } from './navItems';
import { scrollToSection } from '../../utils/scrollTo';

function NavLinks({ activeSection, orientation = 'horizontal', onNavigate }) {
  const handleClick = useCallback(
    (event, item) => {
      event.preventDefault();
      scrollToSection(item.href);
      onNavigate?.();

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    },
    [onNavigate],
  );

  return (
    <ul
      className={clsx(
        'flex',
        orientation === 'horizontal'
          ? 'items-center gap-8'
          : 'flex-col items-start gap-6',
      )}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(event) => handleClick(event, item)}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(
                'type-label relative rounded-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:text-primary',

                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}

              <span
                className={clsx(
                  'absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300',

                  isActive ? 'w-full' : 'w-0',
                )}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const MemoizedNavLinks = memo(NavLinks);
MemoizedNavLinks.displayName = 'NavLinks';

export default MemoizedNavLinks;
