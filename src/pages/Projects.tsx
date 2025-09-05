import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const categories = ["All", "Web Development", "Data & ML", "Systems"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case "Completed":
        return "bg-success/10 text-success border-success/20";
      case "In Progress":
        return "bg-warning/10 text-warning border-warning/20";
      case "Planned":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section className="section-padding">
      <div className="container-fluid">
        <div className="max-w-7xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">Featured Projects</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              A collection of projects showcasing my experience in web development, data science, and systems programming
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="inline-flex items-center space-x-1 p-1 bg-secondary rounded-lg">
              <Filter className="h-4 w-4 text-muted-foreground ml-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary-hover"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group project-card animate-scale-in"
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                <div className="relative z-10 space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">{project.category}</span>
                        <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-2">
                      {project.links.github && (
                        <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1"
                          >
                            <Github className="h-3 w-3" />
                            <span className="text-xs">Code</span>
                          </a>
                        </Button>
                      )}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs h-8"
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      Contact Me →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "600ms" }}>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Interested in collaborating on a project?
              </p>
              <Button 
                className="btn-primary"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;