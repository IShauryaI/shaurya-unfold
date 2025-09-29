import { Brain, Code, Cloud, Database, Palette, BarChart, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "C#", "SQL", ".NET Core"]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: Brain,
      skills: ["OpenCV", "NumPy", "SIFT", "RANSAC", "FLANN", "XGBoost", "Plotly", "Matplotlib"]
    },
    {
      title: "Frontend Technologies",
      icon: Palette,
      skills: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS", "NodeJS", "RESTful APIs"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Oracle", "DB2"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Azure", "GCP", "Docker", "Git", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Analytics & Data",
      icon: BarChart,
      skills: ["Apache Airflow", "Apache Spark", "Tableau", "Streamlit", "Jupyter", "Excel"]
    },
    {
      title: "AI Tools & Platforms",
      icon: Sparkles,
      skills: ["GitHub Copilot", "OpenAI API", "Claude API", "Cursor", "n8n", "Make"]
    }
  ];

  return (
    <section className="section-padding bg-surface/50">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-3 animate-fade-up mb-12">
            <h1 className="text-section">Technical Skills</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build scalable, intelligent systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/80 hover:bg-secondary text-sm rounded-md transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Computer Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                3D reconstruction, stereo vision, and advanced image processing
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end application development with modern frameworks
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Data Engineering</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Large-scale data processing with ML pipelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
