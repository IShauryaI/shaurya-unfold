import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/IShauryaI",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shaurya-parshad",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:shauryapd@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container-fluid">
        <div className="py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Name/Brand */}
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold tracking-tight">
                Shaurya Parshad
              </h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Software Developer passionate about building impactful solutions
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-border/60" />

            {/* Copyright */}
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} Shaurya Parshad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
