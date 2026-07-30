import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/krrupesh2000',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rupesh-kumar-196420155/',
    icon: FaLinkedinIn,
  },
  {
    name: 'Email',
    href: 'mailto:krrupesh2000@gmail.com',
    icon: FiMail,
  },
];

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
          <link.icon size={20} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
