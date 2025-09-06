import { Brush, Code, Database, Server, Smartphone, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "UI/UX & Frontend",
      icon: Brush,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        "Wireframing & User Flows",
        "Low/High-fidelity Prototyping", 
        "Accessibility-aware Design (WCAG basics)",
        "Component-driven Systems (Tailwind/shadcn)",
        "React & Modern JavaScript",
        "Responsive Layouts & Mobile-first Design",
        "REST API Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "Software & Data",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        "Python, Java, C/C++",
        "Flask, FastAPI, Node.js, Express",
        "scikit-learn, XGBoost, PyTorch",
        "OpenCV, NumPy, pandas",
        "SQL & Database Design",
        "Apache Airflow & ETL",
        "Docker & Containerization",
        "Linux & Systems Programming"
      ]
    }
  ];

  const tools = [
    { name: "Git & Version Control", icon: Globe },
    { name: "MySQL/PostgreSQL", icon: Database },
    { name: "Docker Compose", icon: Server },
    { name: "REST APIs", icon: Smartphone },
  ];

  return (
    <section className="section-padding pt-8 -mt-8">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">Skills & Technologies</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and data-driven solutions
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="card-elevated animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 ${category.bgColor} rounded-xl`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group animate-fade-up"
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold text-center">Development Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className="card-flat text-center group hover:border-accent/50 animate-scale-in"
                  style={{ animationDelay: `${500 + (index * 100)}ms` }}
                >
                  <div className="space-y-3">
                    <div className="flex justify-center">
                      <tool.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-sm font-medium">{tool.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="card-elevated animate-fade-up" style={{ animationDelay: "600ms" }}>
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-accent">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating responsive, accessible user interfaces with modern frameworks and design systems
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-accent">Backend Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Building scalable APIs, data pipelines, and server-side applications
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-accent">Data & ML</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementing machine learning models and data processing workflows
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