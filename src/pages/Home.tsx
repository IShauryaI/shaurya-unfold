import { ArrowRight, Download, Github, Linkedin, Mail, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return <>
      <section className="pt-0 pb-0 bg-gradient-subtle relative overflow-hidden">
        {/* Breathing glow orbs */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        
        <div className="container-fluid relative z-10 pt-16 md:pt-20 lg:pt-24 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h1 className="text-hero font-bold">
                  Shaurya Parshad
                </h1>
                <div className="text-subtitle min-h-[80px] md:min-h-[60px]">
                  <TypeAnimation sequence={['Full-Stack Software Engineer', 2000, 'Computer Vision Researcher', 2000, 'AI/ML Enthusiast', 2000, 'Full-Stack Developer', 2000]} wrapper="span" speed={50} repeat={Infinity} className="text-gradient" />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                  I'm fascinated by hard problems, the kind that require both algorithmic thinking and engineering craftsmanship. Whether it's reconstructing 3D worlds from flat images, detecting fraud in millions of transactions, or building healthcare systems that actually help people, I thrive on turning "that's impossible" into "here's how it works."
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                  As an AI enthusiast, I'm constantly exploring emerging technologies, from OpenAI's latest APIs to Claude's capabilities, from GitHub Copilot to cutting-edge computer vision techniques. I believe the best engineers never stop learning, which is why I'm always experimenting with new AI tools and integrating them into practical solutions.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                  💡 I write code that matters and design experiences that delight. Let's build something amazing together.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => scrollToSection('#projects')} className="btn-primary group">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button asChild className="btn-secondary">
                    <a href="mailto:parshad@uwindsor.ca">
                      Get in Touch
                    </a>
                  </Button>
                </div>
                
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <Button variant="ghost" size="sm" asChild className="w-10 h-10 p-0 hover:bg-accent/10">
                  <a href="https://github.com/IShauryaI" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="w-10 h-10 p-0 hover:bg-accent/10">
                  <a href="https://linkedin.com/in/shaurya-parshad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="w-10 h-10 p-0 hover:bg-accent/10">
                  <a href="mailto:parshad@uwindsor.ca" aria-label="Send Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="px-4">
                  <a href="/Resume-Shaurya-Parshad.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <img src="/lovable-uploads/3a2e6edf-acb8-4e31-bec1-3e16097eb3a3.png" alt="Shaurya Parshad - Software Developer" className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover object-top rounded-2xl shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Home;