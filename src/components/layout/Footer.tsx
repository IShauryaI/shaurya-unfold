import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const socialLinks = [{
    name: "GitHub",
    url: "https://github.com/IShauryaI",
    icon: Github
  }, {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shaurya-parshad",
    icon: Linkedin
  }, {
    name: "Email",
    url: "mailto:parshad@uwindsor.ca",
    icon: Mail
  }];
  return <footer className="bg-surface border-t border-border">
      <div className="container-fluid">
        <div className="py-12">
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
                  <a href="mailto:parshad@uwindsor.ca" className="hover:text-accent transition-colors">
                    parshad@uwindsor.ca
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map(link => <Button key={link.name} variant="ghost" size="sm" asChild className="w-9 h-9 p-0">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>)}
              </div>
            </div>

            {/* Copyright */}
            <div className="space-y-4 md:text-right">
              <div className="text-sm text-muted-foreground">
                <p>&copy; 2024 Shaurya Parshad</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;