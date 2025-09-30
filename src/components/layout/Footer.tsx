import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <footer className="bg-surface border-t border-border pt-0 pb-0">
      <div className="container-fluid">
        <div className="pt-6 pb-16 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Windsor, Ontario</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a 
                    href="mailto:shauryapd@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    shauryapd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 text-center">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-9 h-9 p-0"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="space-y-4 md:text-right">
              <div className="text-sm text-muted-foreground">
                <p>&copy; 2025 Shaurya Parshad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;