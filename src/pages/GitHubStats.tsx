import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Code, Flame, Calendar, Activity } from "lucide-react";

const GitHubStats = () => {
  const stats = [
    {
      title: "GitHub Stats",
      items: [
        { icon: Star, label: "Total Stars", value: "15+" },
        { icon: GitFork, label: "Forks", value: "8+" },
        { icon: Code, label: "Repositories", value: "20+" },
      ]
    },
    {
      title: "Contribution Streak",
      items: [
        { icon: Activity, label: "Total Contributions", value: "263" },
        { icon: Flame, label: "Current Streak", value: "0 days" },
        { icon: Calendar, label: "Longest Streak", value: "5 days" },
      ]
    },
    {
      title: "Top Languages",
      languages: [
        { name: "Python", percentage: 45, color: "hsl(var(--primary))" },
        { name: "TypeScript", percentage: 25, color: "hsl(210, 100%, 50%)" },
        { name: "JavaScript", percentage: 15, color: "hsl(45, 100%, 50%)" },
        { name: "C++", percentage: 15, color: "hsl(280, 100%, 60%)" },
      ]
    }
  ];

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
            {/* Stats Card */}
            <div className="card-elevated p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                {stats[0].title}
              </h3>
              <div className="space-y-3">
                {stats[0].items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Streak Card */}
            <div className="card-elevated p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                {stats[1].title}
              </h3>
              <div className="space-y-3">
                {stats[1].items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="card-elevated p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                {stats[2].title}
              </h3>
              <div className="space-y-3">
                {stats[2].languages?.map((lang, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{lang.name}</span>
                      <span className="text-foreground font-medium">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
