const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/krrupesh2000" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rupesh-kumar-196420155/",
  },
  { label: "Email", href: "mailto:krrupesh2000@gmail.com" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-card py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-2xl font-bold">Rupesh Kumar</h2>

        <p className="text-muted-foreground">Full Stack MERN Developer</p>

        <ul className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors duration-300 hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="transition-colors duration-300 hover:text-primary"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 Rupesh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
