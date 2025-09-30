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
  const [repoInfo, setRepoInfo] = useState<{ owner: string; repo: string } | null>(null);

  useEffect(() => {
    if (!project?.links.github || !open) return;

    const fetchReadme = async () => {
      setLoading(true);
      try {
        // Extract owner and repo from GitHub URL
        const url = new URL(project.links.github);
        const [, owner, repo] = url.pathname.split('/');
        setRepoInfo({ owner, repo });
        
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
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Info */}
          <div className="space-y-6">
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

            <p className="text-muted-foreground leading-relaxed text-base">{project.longDescription}</p>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base font-semibold">Key Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground font-medium mb-0.5">{metric.label}</div>
                      <div className="text-xs text-muted-foreground">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base font-semibold">Key Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 pt-2">
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
            <div className="space-y-4 border-t pt-8">
              <h3 className="text-lg font-semibold">README</h3>
              {loading ? (
                <div className="text-sm text-muted-foreground">Loading README...</div>
              ) : readme ? (
                <div className="prose prose-sm max-w-none dark:prose-invert prose-table:border-collapse prose-thead:border-b prose-th:p-2 prose-th:text-left prose-td:p-2">
                  <ReactMarkdown
                    components={{
                      img: ({ src, alt }) => {
                        if (!src) return null;
                        
                        // Convert relative GitHub URLs to absolute raw.githubusercontent.com URLs
                        let imgSrc = src;
                        if (src.startsWith('./') || src.startsWith('../') || !src.startsWith('http')) {
                          const cleanSrc = src.replace(/^\.\//, '');
                          imgSrc = `https://raw.githubusercontent.com/${repoInfo?.owner}/${repoInfo?.repo}/main/${cleanSrc}`;
                        }
                        
                        return (
                          <img 
                            src={imgSrc} 
                            alt={alt || ''} 
                            className="rounded-lg border border-border max-w-full h-auto"
                            loading="lazy"
                          />
                        );
                      },
                      a: ({ href, children }) => {
                        const linkText = children?.toString() || '';
                        
                        // Replace PDF download link with GitHub notice
                        if (linkText.includes('Download Full Presentation') || linkText.includes('PDF')) {
                          return (
                            <span className="text-muted-foreground italic">
                              Downloadable PDF available on{' '}
                              <a 
                                href={project?.links.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-accent hover:underline"
                              >
                                GitHub
                              </a>
                            </span>
                          );
                        }
                        
                        return (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                            {children}
                          </a>
                        );
                      },
                      table: ({ children }) => (
                        <div className="overflow-x-auto my-4">
                          <table className="min-w-full border-collapse">{children}</table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="border-b">{children}</thead>
                      ),
                      tbody: ({ children }) => (
                        <tbody>{children}</tbody>
                      ),
                      tr: ({ children }) => (
                        <tr className="border-b border-border/50">{children}</tr>
                      ),
                      th: ({ children }) => (
                        <th className="px-4 py-2 text-left font-semibold">{children}</th>
                      ),
                      td: ({ children }) => (
                        <td className="px-4 py-2">{children}</td>
                      ),
                    }}
                  >
                    {readme}
                  </ReactMarkdown>
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
