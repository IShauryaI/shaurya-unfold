import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Code, Flame, Users, FolderGit2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";

interface GitHubData {
  username: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  total_forks: number;
  languages: { name: string; percentage: number }[];
  recent_contributions: number;
  profile_url: string;
}

const languageColors: Record<string, string> = {
  Python: "hsl(210, 100%, 50%)",
  TypeScript: "hsl(200, 100%, 50%)",
  JavaScript: "hsl(45, 100%, 50%)",
  "C++": "hsl(340, 80%, 60%)",
  Java: "hsl(20, 90%, 50%)",
  Go: "hsl(190, 80%, 50%)",
  Rust: "hsl(25, 90%, 50%)",
  HTML: "hsl(15, 100%, 55%)",
  CSS: "hsl(260, 80%, 60%)",
  Shell: "hsl(120, 50%, 45%)",
};

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error: fnError } = await supabase.functions.invoke('github-stats', {
          body: { username: 'IShauryaI' }
        });

        if (fnError) throw fnError;
        setStats(data);
      } catch (err: any) {
        console.error('Error fetching GitHub stats:', err);
        setError(err.message || 'Failed to load stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const getLanguageColor = (lang: string) => languageColors[lang] || "hsl(var(--primary))";

  if (loading) {
    return (
      <section className="pt-0 pb-0 bg-gradient-subtle relative overflow-hidden">
        <div className="glow-orb glow-orb-2"></div>
        <div className="container-fluid relative z-10 pt-0 pb-0">
          <div className="max-w-6xl mx-auto space-section">
            <div className="text-center space-y-4">
              <h2 className="text-section">GitHub Activity</h2>
              <p className="text-subtitle max-w-2xl mx-auto">Loading stats...</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-elevated p-6 space-y-4">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return (
      <section className="pt-0 pb-0 bg-gradient-subtle relative overflow-hidden">
        <div className="glow-orb glow-orb-2"></div>
        <div className="container-fluid relative z-10 pt-0 pb-0">
          <div className="max-w-6xl mx-auto space-section">
            <div className="text-center space-y-4">
              <h2 className="text-section">GitHub Activity</h2>
              <p className="text-subtitle max-w-2xl mx-auto">
                Building in public and contributing to open-source projects
              </p>
            </div>
            <div className="text-center">
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
  }

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
                GitHub Stats
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FolderGit2 className="h-4 w-4" />
                    <span className="text-sm">Repositories</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{stats.public_repos}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span className="text-sm">Total Stars</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{stats.total_stars}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GitFork className="h-4 w-4" />
                    <span className="text-sm">Total Forks</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{stats.total_forks}</span>
                </div>
              </div>
            </div>

            {/* Community Card */}
            <div className="card-elevated p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Followers</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{stats.followers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Following</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{stats.following}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Flame className="h-4 w-4" />
                    <span className="text-sm">Recent Activity</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{stats.recent_contributions}+</span>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="card-elevated p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Top Languages
              </h3>
              <div className="space-y-3">
                {stats.languages.slice(0, 4).map((lang, i) => (
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
                          backgroundColor: getLanguageColor(lang.name)
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
              <a href={stats.profile_url} target="_blank" rel="noopener noreferrer">
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
