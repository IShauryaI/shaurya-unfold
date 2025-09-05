import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/shaurya-profile.jpg";

const Home = () => {
  const skillTags = [
    "UI/UX", "React", "HTML/CSS", "Tailwind", "Flask/FastAPI", "Node/Express"
  ];

  return (
    <section className="section-padding bg-gradient-subtle min-h-[calc(100vh-5rem)]">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-hero text-gradient">
                Shaurya Parshad
              </h1>
              <p className="text-subtitle">
                UI/UX-focused Software Developer
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Emerging software developer pursuing a Master of Applied Computing at the University of Windsor 
                (graduating April 2026), with a strong foundation across Python, web development, AI/ML, computer vision, 
                data engineering, and systems programming. I translate business needs into working software and have 
                delivered web/desktop apps, REST APIs, and web-crawling/search features through Agile sprints.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                During my Software Engineer Internship at VMM Education (Sep 2023–Mar 2024), I shipped a grocery 
                delivery platform that accelerated delivery cycles and improved operational efficiency by 20%.
              </p>
            </div>

            {/* Quick Skills */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillTags.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Résumé
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="sm" asChild className="w-10 h-10 p-0">
                <a
                  href="https://github.com/IShauryaI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="w-10 h-10 p-0">
                <a
                  href="https://linkedin.com/in/shaurya-parshad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="w-10 h-10 p-0">
                <a
                  href="mailto:parshad@uwindsor.ca"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Shaurya Parshad - Software Developer"
                  className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;