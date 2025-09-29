import { Brain, Code, Cloud, Database, Palette, BarChart, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      emoji: "💻",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 85 },
        { name: "C#", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 85 },
        { name: ".NET Core", level: 80 }
      ]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      emoji: "🤖",
      skills: [
        { name: "OpenCV", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "SIFT", level: 85 },
        { name: "FLANN", level: 80 },
        { name: "RANSAC", level: 85 },
        { name: "XGBoost", level: 80 },
        { name: "Plotly", level: 85 },
        { name: "Matplotlib", level: 85 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Palette,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      emoji: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "NodeJS", level: 85 },
        { name: "Angular", level: 75 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      emoji: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Oracle", level: 75 },
        { name: "DB2", level: 70 },
        { name: "Supabase", level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      emoji: "☁️",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Azure", level: 75 },
        { name: "GCP", level: 75 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        { name: "Jenkins", level: 75 },
        { name: "GitHub Actions", level: 85 }
      ]
    },
    {
      title: "Analytics & Data",
      icon: BarChart,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      emoji: "📊",
      skills: [
        { name: "Apache Airflow", level: 80 },
        { name: "Apache Spark", level: 75 },
        { name: "Tableau", level: 70 },
        { name: "Streamlit", level: 80 },
        { name: "Jupyter", level: 85 },
        { name: "Excel", level: 80 }
      ]
    },
    {
      title: "AI Tools",
      icon: Sparkles,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      emoji: "✨",
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

  return (
    <section className="section-padding pt-8 -mt-8">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">Skills & Technologies</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              A comprehensive toolkit spanning full-stack development, AI/ML, computer vision, and cloud architecture
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="card-elevated group animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 ${category.bgColor} rounded-xl group-hover:scale-110 transition-transform`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{category.emoji}</span>
                        <h2 className="text-lg font-bold">{category.title}</h2>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill.name}
                        className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary rounded-lg text-sm font-medium transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="card-elevated animate-fade-up" style={{ animationDelay: "700ms" }}>
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-accent">Computer Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    3D reconstruction, stereo vision, camera calibration, and dense matching algorithms
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-semibold text-accent">Full-Stack Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building scalable web applications with modern frameworks and cloud architecture
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl mb-2">📊</div>
                  <h3 className="font-semibold text-accent">Data Engineering</h3>
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
