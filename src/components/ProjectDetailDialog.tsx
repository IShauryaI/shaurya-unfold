import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { type Project } from "@/data/projects";
import ReactMarkdown from "react-markdown";

interface ProjectDetailDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectDetailDialog = ({ project, open, onOpenChange }: ProjectDetailDialogProps) => {
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!project?.links.github || !open) return;

    const fetchReadme = async () => {
      setLoading(true);
      try {
        // Extract owner and repo from GitHub URL
        const url = new URL(project.links.github);
        const [, owner, repo] = url.pathname.split('/');
        
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.v3.raw",
            },
          }
        );
        
        if (response.ok) {
          const text = await response.text();
          setReadme(text);
        }
      } catch (error) {
        console.error("Failed to fetch README:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [project, open]);

  if (!project) return null;

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="outline">{project.category}</Badge>
              <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
              {project.featured && (
                <Badge className="bg-accent/10 text-accent border-accent/20">Featured</Badge>
              )}
              {project.date && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Key Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="p-3 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-accent">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                      <div className="text-xs text-muted-foreground">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Key Features</h3>
                <ul className="space-y-1">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-2">
              {project.links.github && (
                <Button variant="default" size="sm" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* GitHub README */}
          {project.links.github && (
            <div className="space-y-2 border-t pt-6">
              <h3 className="text-lg font-semibold">README</h3>
              {loading ? (
                <div className="text-sm text-muted-foreground">Loading README...</div>
              ) : readme ? (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown>{readme}</ReactMarkdown>
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">No README available</div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
