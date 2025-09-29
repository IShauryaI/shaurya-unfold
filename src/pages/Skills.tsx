import { Brain, Code, Cloud, Database, Palette, BarChart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 85 },
        { name: "C#", level: 80 },
        { name: ".NET Core", level: 80 }
      ]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: Brain,
      skills: [
        { name: "OpenCV", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "SIFT", level: 85 },
        { name: "RANSAC", level: 85 },
        { name: "Plotly", level: 85 },
        { name: "Matplotlib", level: 85 },
        { name: "FLANN", level: 80 },
        { name: "XGBoost", level: 80 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Palette,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "React", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "RESTful APIs", level: 90 },
        { name: "NodeJS", level: 85 },
        { name: "Angular", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Supabase", level: 80 },
        { name: "Oracle", level: 75 },
        { name: "DB2", level: 70 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "GitHub Actions", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Azure", level: 75 },
        { name: "GCP", level: 75 },
        { name: "Jenkins", level: 75 }
      ]
    },
    {
      title: "Analytics & Data",
      icon: BarChart,
      skills: [
        { name: "Jupyter", level: 85 },
        { name: "Apache Airflow", level: 80 },
        { name: "Streamlit", level: 80 },
        { name: "Excel", level: 80 },
        { name: "Apache Spark", level: 75 },
        { name: "Tableau", level: 70 }
      ]
    },
    {
      title: "AI Tools & Platforms",
      icon: Sparkles,
      skills: [
        { name: "GitHub Copilot", level: 90 },
        { name: "OpenAI API", level: 85 },
        { name: "Claude API", level: 85 },
        { name: "Cursor", level: 80 },
        { name: "n8n", level: 75 },
        { name: "Make", level: 75 }
      ]
    }
  ];

  const getProficiencyColor = (level: number) => {
    if (level >= 85) return "bg-primary";
    if (level >= 75) return "bg-accent";
    return "bg-muted-foreground/50";
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 85) return "Expert";
    if (level >= 75) return "Advanced";
    return "Intermediate";
  };

  return (
    <section className="section-padding pt-8 -mt-8 bg-gradient-subtle">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">Technical Expertise</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              Full-stack development, AI/ML engineering, and cloud architecture
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="card-elevated group"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>

                {/* Skills List with Proficiency */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="space-y-2 group/skill"
                      style={{ animationDelay: `${(categoryIndex * 100) + (index * 50)}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {getProficiencyLabel(skill.level)}
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`absolute top-0 left-0 h-full ${getProficiencyColor(skill.level)} rounded-full transition-all duration-700 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * 100) + (index * 50)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="card-elevated animate-fade-up" style={{ animationDelay: "700ms" }}>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-center">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3 text-center group/comp">
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl group-hover/comp:bg-primary/20 transition-colors">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Computer Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    3D reconstruction, stereo vision, camera calibration, and dense matching algorithms
                  </p>
                </div>
                <div className="space-y-3 text-center group/comp">
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl group-hover/comp:bg-primary/20 transition-colors">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Full-Stack Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building scalable web applications with modern frameworks and cloud architecture
                  </p>
                </div>
                <div className="space-y-3 text-center group/comp">
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl group-hover/comp:bg-primary/20 transition-colors">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Processing millions of records with ML models and distributed data pipelines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
