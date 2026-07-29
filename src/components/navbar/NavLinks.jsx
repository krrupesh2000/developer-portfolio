import clsx from "clsx";
import { navItems } from "./navItems";

function NavLinks({ activeSection, orientation = "horizontal", onNavigate }) {
  const handleClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    onNavigate?.();
  };

  return (
    <ul
      className={clsx(
        "flex",
        orientation === "horizontal"
          ? "items-center gap-8"
          : "flex-col items-start gap-6",
      )}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "relative text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md",

                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}

              <span
                className={clsx(
                  "absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",

                  isActive ? "w-full" : "w-0",
                )}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
