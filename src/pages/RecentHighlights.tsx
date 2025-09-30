import { Award, Code2, Target, TrendingUp } from "lucide-react";

const RecentHighlights = () => {
  const highlights = [
    { 
      label: "3D Points", 
      value: "150k+",
      description: "Reconstructed from stereo images",
      icon: Award
    },
    { 
      label: "Fraud Detection", 
      value: "96%",
      description: "ROC-AUC on 11M+ records",
      icon: TrendingUp
    },
    { 
      label: "AI Accuracy", 
      value: "80%",
      description: "Health recommendation system",
      icon: Target
    },
    { 
      label: "Performance", 
      value: "100%",
      description: "Lighthouse score achieved",
      icon: Code2
    }
  ];

  return (
    <section className="section-padding pt-8 pb-16 md:pb-20 lg:pb-24">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <h2 className="text-2xl font-bold mb-6 text-center">Recent Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.label}
                  className="card-elevated text-center group hover:border-accent/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-3">
                    <div className="flex justify-center">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <highlight.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-accent">{highlight.value}</div>
                      <div className="text-sm font-medium">{highlight.label}</div>
                      <div className="text-xs text-muted-foreground">{highlight.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;
