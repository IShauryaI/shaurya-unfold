import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, RefreshCw, Star, GitFork, Code, Flame } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const GitHubStats = () => {
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const [loadingStates, setLoadingStates] = useState({
    stats: true,
    streak: true,
    languages: true
  });
  const [errorStates, setErrorStates] = useState({
    stats: false,
    streak: false,
    languages: false
  });

  useEffect(() => {
    // Auto-refresh every 30 minutes
    const interval = setInterval(() => {
      handleRefresh();
    }, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (key: 'stats' | 'streak' | 'languages') => {
    setLoadingStates(prev => ({ ...prev, [key]: false }));
  };

  const handleImageError = (key: 'stats' | 'streak' | 'languages') => {
    setLoadingStates(prev => ({ ...prev, [key]: false }));
    setErrorStates(prev => ({ ...prev, [key]: true }));
  };

  const handleRefresh = () => {
    setRefreshKey(Date.now());
    setLoadingStates({ stats: true, streak: true, languages: true });
    setErrorStates({ stats: false, streak: false, languages: false });
  };

  // Fallback stats card for when images fail to load
  const FallbackStatsCard = ({ type }: { type: 'stats' | 'streak' | 'languages' }) => {
    const content = {
      stats: {
        title: "GitHub Stats",
        icon: Star,
        items: ["Public Repositories", "Total Stars", "Total Forks"]
      },
      streak: {
        title: "Contribution Streak",
        icon: Flame,
        items: ["Current Streak", "Longest Streak", "Total Contributions"]
      },
      languages: {
        title: "Top Languages",
        icon: Code,
        items: ["Python", "TypeScript", "JavaScript", "C++"]
      }
    };

    const { title, icon: Icon, items } = content[type];

    return (
      <div className="text-center p-6 space-y-4">
        <div className="flex items-center justify-center gap-2 text-primary">
          <Icon className="h-5 w-5" />
          <span className="font-semibold">{title}</span>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="text-sm text-muted-foreground">{item}</div>
          ))}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleRefresh}
          className="mt-2"
        >
          <RefreshCw className="h-4 w-4 mr-1" />
          Retry
        </Button>
      </div>
    );
  };

  const StatCard = ({ 
    src, 
    alt, 
    loadingKey 
  }: { 
    src: string; 
    alt: string; 
    loadingKey: 'stats' | 'streak' | 'languages' 
  }) => (
    <div className="card-elevated flex items-center justify-center p-4 min-h-[180px] relative">
      {loadingStates[loadingKey] && !errorStates[loadingKey] && (
        <div className="absolute inset-4 flex items-center justify-center">
          <Skeleton className="w-full h-32" />
        </div>
      )}
      {errorStates[loadingKey] ? (
        <FallbackStatsCard type={loadingKey} />
      ) : (
        <img 
          src={src}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-300 ${loadingStates[loadingKey] ? 'opacity-0 absolute' : 'opacity-100'}`}
          loading="eager"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          onLoad={() => handleImageLoad(loadingKey)}
          onError={() => handleImageError(loadingKey)}
        />
      )}
    </div>
  );

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
            <StatCard 
              src={`https://github-readme-stats.vercel.app/api?username=IShauryaI&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=64748b&icon_color=3b82f6&cache_seconds=1800&t=${refreshKey}`}
              alt="GitHub Stats"
              loadingKey="stats"
            />

            <StatCard 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=IShauryaI&theme=tokyonight&hide_border=true&background=00000000&ring=3b82f6&fire=3b82f6&currStreakLabel=64748b&sideLabels=64748b&dates=64748b&t=${refreshKey}`}
              alt="GitHub Streak"
              loadingKey="streak"
            />

            <StatCard 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=IShauryaI&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=64748b&cache_seconds=1800&t=${refreshKey}`}
              alt="Top Languages"
              loadingKey="languages"
            />
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
