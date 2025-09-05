import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/projects" replace />;
  }

  const project = getProjectById(id);

  if (!project) {
    return (
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center space-y-4">
            <h1 className="text-section">Project Not Found</h1>
            <p className="text-muted-foreground">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const getStatusColor = (status: typeof project.status) => {
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
        <div className="max-w-4xl mx-auto space-section">
          {/* Back Button */}
          <div className="animate-fade-up">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
                <div className="space-y-2">
                  <h1 className="text-hero text-gradient">{project.title}</h1>
                  <p className="text-subtitle">{project.description}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className={`px-3 py-1 text-sm rounded-full border ${getStatusColor(project.status)} self-start`}>
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 self-start">
                      Featured Project
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4" />
                <span>{project.category}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              {project.links.github && (
                <Button asChild className="btn-primary">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild className="btn-secondary">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button asChild className="btn-secondary">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
              {/* Overview */}
              <div className="card-elevated">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </div>

              {/* Context Section */}
              <div className="card-elevated">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Context & Challenges</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {project.id === "gadgetgaze" && (
                      <>
                        <p>
                          The smartphone market is oversaturated with options, making it difficult for consumers 
                          to find devices that match their specific needs and budget. Existing comparison tools 
                          often lack intelligent search capabilities and meaningful ranking algorithms.
                        </p>
                        <p>
                          Our challenge was to create a comprehensive recommendation system that could parse 
                          and index smartphone data efficiently while providing fast, relevant search results 
                          through advanced algorithms.
                        </p>
                      </>
                    )}
                    {project.id === "microloan-fraud" && (
                      <>
                        <p>
                          Microloan institutions face significant challenges with fraud detection due to 
                          limited historical data and imbalanced datasets where fraudulent cases represent 
                          a small percentage of total applications.
                        </p>
                        <p>
                          The project required building a robust data warehouse capable of handling slowly 
                          changing dimensions (SCD-2) and change data capture (CDC) while implementing 
                          machine learning models optimized for imbalanced classification problems.
                        </p>
                      </>
                    )}
                    {project.id === "cnn-visual-recognition" && (
                      <>
                        <p>
                          Computer vision has evolved rapidly from traditional feature extraction methods 
                          to deep learning approaches. Understanding the trade-offs between classical 
                          techniques and modern CNNs is crucial for practical applications.
                        </p>
                        <p>
                          This research project aimed to provide comprehensive comparisons between SIFT/HOG 
                          + SVM approaches and modern CNN architectures, analyzing both accuracy and 
                          computational efficiency across different scenarios.
                        </p>
                      </>
                    )}
                    {!["gadgetgaze", "microloan-fraud", "cnn-visual-recognition"].includes(project.id) && (
                      <p>
                        This project showcases practical application of software engineering principles 
                        and modern development practices to solve real-world challenges.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="card-elevated">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Features & Implementation</h3>
                  <div className="space-y-3">
                    {project.id === "gadgetgaze" && (
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Intelligent web crawling and data parsing system</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Advanced search with word completion and frequency analysis</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Inverted indexing for fast query processing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Microservices architecture with Flask frontend and Spring Boot backend</span>
                        </li>
                      </ul>
                    )}
                    {project.id === "microloan-fraud" && (
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Star-schema data warehouse design for optimal analytics performance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Apache Airflow ETL pipelines with SCD-2 and CDC implementation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Machine learning model experimentation for imbalanced datasets</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">Comprehensive fraud risk analytics and reporting dashboard</span>
                        </li>
                      </ul>
                    )}
                    {!["gadgetgaze", "microloan-fraud"].includes(project.id) && (
                      <p className="text-sm text-muted-foreground">
                        Detailed implementation features and technical specifications are available in the project repository.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
              {/* Technologies */}
              <div className="card-flat">
                <div className="space-y-4">
                  <h3 className="font-semibold">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="card-flat">
                <div className="space-y-4">
                  <h3 className="font-semibold">Project Links</h3>
                  <div className="space-y-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Site</span>
                      </a>
                    )}
                    {!project.links.github && !project.links.demo && !project.links.live && (
                      <p className="text-sm text-muted-foreground">
                        Links to be added soon
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Category */}
              <div className="card-flat">
                <div className="space-y-2">
                  <h3 className="font-semibold">Category</h3>
                  <span className="skill-chip">{project.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "500ms" }}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Interested in more projects?</h3>
              <Button asChild className="btn-primary">
                <Link to="/projects">
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;