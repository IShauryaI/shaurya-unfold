import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const GitHubStats = () => {
  return (
    <section className="pt-0 pb-0 bg-gradient-subtle relative overflow-hidden">
      <div className="glow-orb glow-orb-2"></div>
      
      <div className="container-fluid relative z-10 pt-0 pb-0">
        <div className="max-w-6xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-section">GitHub Activity</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Building in public and contributing to open-source projects
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="card-elevated flex items-center justify-center p-4">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=IShauryaI&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=64748b&icon_color=3b82f6"
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>

            <div className="card-elevated flex items-center justify-center p-4">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=IShauryaI&theme=tokyonight&hide_border=true&background=00000000&ring=3b82f6&fire=3b82f6&currStreakLabel=64748b&sideLabels=64748b&dates=64748b"
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>

            <div className="card-elevated flex items-center justify-center p-4">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=IShauryaI&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=64748b"
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button asChild className="btn-primary group">
              <a href="https://github.com/IShauryaI" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
