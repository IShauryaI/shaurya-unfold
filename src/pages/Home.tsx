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
  return (
    <>
      <section className="section-padding pb-0 bg-gradient-subtle relative overflow-hidden">
        {/* Breathing glow orbs */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        
        <div className="container-fluid relative z-10 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h1 className="text-hero font-bold">
                  Shaurya Parshad
                </h1>
                <div className="text-subtitle min-h-[80px] md:min-h-[60px]">
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Software Engineer',
                      2000,
                      'Computer Vision Researcher',
                      2000,
                      'AI/ML Enthusiast',
                      2000,
                      'Full-Stack Developer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-gradient"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                  Master's student in Applied Computing at University of Windsor, specializing in 
                  intelligent systems and full-stack development. I build scalable applications 
                  that solve real-world problems—from AI-powered healthcare systems to 3D 
                  reconstruction pipelines.
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
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
                  <Target className="h-4 w-4 text-accent" />
                  🎯 Seeking Internship | Jan 2026
                </Badge>
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
                  <a href="https://drive.google.com/uc?export=download&id=1s9_RFndZIar2aHot2mLHnTjEic5LpYEf" target="_blank" rel="noopener noreferrer">
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
    </>
  );
};
export default Home;