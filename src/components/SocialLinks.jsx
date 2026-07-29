import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/krrupesh2000",
    type: "brand",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rupesh-kumar-196420155/",
    type: "sprite",
    symbolId: "social-icon", // Your icons.svg symbol id
  },
  {
    name: "Email",
    href: "mailto:krrupesh2000@gmail.com",
    type: "ui",
    icon: Mail,
  },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={link.name}
          title={link.name}
          className="
group
flex h-11 w-11 items-center justify-center
rounded-full
border border-border
bg-card
text-muted-foreground
transition-all duration-200
hover:-translate-y-1
hover:border-primary
hover:bg-primary/5
hover:text-primary
hover:shadow-md
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-primary
focus-visible:ring-offset-2
"
        >
          {link.type === "sprite" ? (
            <svg className="h-5.5 w-5.5" aria-hidden="true" fill="currentColor">
              <use href={`/icons.svg#${link.symbolId}`} />
            </svg>
          ) : link.type === "brand" ? (
            <link.icon size={20} aria-hidden="true" />
          ) : (
            <link.icon size={20} aria-hidden="true" strokeWidth={2} />
          )}
        </a>
      ))}
    </div>
  );
}
