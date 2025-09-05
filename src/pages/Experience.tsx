import { MapPin, Calendar, Building, GraduationCap } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      title: "Software Engineer Intern",
      company: "VMM Education",
      location: "Remote",
      period: "Sep 2023 – Mar 2024",
      type: "Internship",
      description: "During my Software Engineer Internship at VMM Education (Sep 2023–Mar 2024), I shipped a grocery delivery platform that accelerated delivery cycles and improved operational efficiency by 20%.",
      highlights: [
        "Collaborated with UI/UX team to implement responsive frontend components",
        "Delivered full-stack features through Agile development cycles",
        "Optimized database queries and API endpoints for improved performance",
        "Contributed to code reviews and maintained high code quality standards"
      ],
      technologies: ["React", "Node.js", "MongoDB", "REST APIs", "Agile Development"]
    }
  ];

  const education = [
    {
      degree: "Master of Applied Computing",
      institution: "University of Windsor",
      location: "Windsor, Ontario",
      period: "Expected April 2026",
      type: "Graduate",
      description: "Advanced coursework in software engineering, machine learning, and computer systems.",
      courses: ["Advanced Software Engineering", "Machine Learning", "Computer Vision", "Data Engineering", "Distributed Systems"]
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Guru Nanak Dev University",
      location: "Punjab, India",
      period: "May 2024",
      type: "Undergraduate",
      description: "Comprehensive foundation in computer science fundamentals and software development.",
      courses: ["Data Structures & Algorithms", "Database Management", "Software Engineering", "Operating Systems", "Computer Networks"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">Experience & Education</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              My professional journey and academic background in software development
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center space-x-3">
              <Building className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Professional Experience</h2>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="card-elevated">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-2 md:space-y-0">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-accent">{job.title}</h3>
                        <p className="text-lg font-semibold">{job.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Contributions:</h4>
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span key={tech} className="skill-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-elevated">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-2 md:space-y-0">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-accent">{edu.degree}</h3>
                        <p className="text-lg font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Relevant Courses */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span key={course} className="skill-chip">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="animate-fade-up" style={{ animationDelay: "600ms" }}>
            <div className="card-flat">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">Academic & Professional Timeline</h3>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span>2024: B.Tech Graduate</span>
                  </div>
                  <div className="hidden md:block w-8 h-px bg-border"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span>2023-2024: VMM Internship</span>
                  </div>
                  <div className="hidden md:block w-8 h-px bg-border"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span>2026: Master's Expected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;