export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "Web Development" | "Data & ML" | "Systems" | "Mobile";
  featured: boolean;
  links: {
    github?: string;
    demo?: string;
    live?: string;
  };
  image?: string;
  status: "Completed" | "In Progress" | "Planned";
}

export const projects: Project[] = [
  {
    id: "gadgetgaze",
    title: "GadgetGaze",
    description: "Smartphone Recommendation Website with intelligent search and ranking capabilities",
    longDescription: "Smart crawl/parsing, search, and ranking system for smartphones. Features word completion, frequency analysis, and inverted indexing for fast retrieval. Built with Flask frontend and Spring Boot backend architecture.",
    technologies: ["Flask", "Spring Boot", "Python", "Java", "Search Algorithms", "Web Crawling", "Inverted Indexing"],
    category: "Web Development",
    featured: true,
    links: {
      github: "# To be added",
      demo: "# To be added"
    },
    status: "Completed"
  },
  {
    id: "microloan-fraud",
    title: "Microloan Fraud Detection",
    description: "Data Warehouse & Analytics platform for fraud detection and risk assessment",
    longDescription: "Star-schema design with Airflow ETL pipeline implementing SCD-2 and CDC. Features model experimentation for imbalanced classification problems. Delivers analytics-ready warehouse and comprehensive fraud-risk insights.",
    technologies: ["Apache Airflow", "Python", "SQL", "Data Warehousing", "ETL", "Machine Learning", "SCD-2", "CDC"],
    category: "Data & ML",
    featured: true,
    links: {
      github: "# To be added",
      demo: "# To be added"
    },
    status: "Completed"
  },
  {
    id: "cnn-visual-recognition",
    title: "CNNs for Visual Object Recognition",
    description: "Deep learning research project comparing classical and modern computer vision approaches",
    longDescription: "Comprehensive survey and implementation comparing classical features (SIFT/HOG + SVM) to deep CNNs (VGG/ResNet/MobileNet). Includes training pipeline, data augmentation, and analysis of accuracy vs. latency trade-offs.",
    technologies: ["PyTorch", "OpenCV", "Python", "CNN", "Computer Vision", "SIFT", "HOG", "ResNet", "VGG", "MobileNet"],
    category: "Data & ML",
    featured: true,
    links: {
      github: "# To be added",
      demo: "# To be added"
    },
    status: "Completed"
  },
  {
    id: "acc-website",
    title: "ACC Website",
    description: "Modern, responsive website implementation with clean architecture",
    longDescription: "Built with Flask framework featuring clean routing, template system, and componentized UI. Focuses on responsive design, performance optimization, and maintainable code structure.",
    technologies: ["Flask", "HTML/CSS", "JavaScript", "Responsive Design", "Template Engine"],
    category: "Web Development",
    featured: false,
    links: {
      github: "# To be added",
      demo: "# To be added"
    },
    status: "Completed"
  },
  {
    id: "mbash25",
    title: "mbash25 - Custom Shell",
    description: "Unix-style shell implementation with advanced process control",
    longDescription: "Custom shell with special operators, robust process control, and I/O behavior. Features comprehensive parsing, signal handling, and Unix-style command execution with focus on reliability and performance.",
    technologies: ["C/C++", "Unix/Linux", "System Calls", "Process Control", "Signal Handling", "Parsing"],
    category: "Systems",
    featured: false,
    links: {
      github: "# To be added"
    },
    status: "Completed"
  },
  {
    id: "distributed-file-system",
    title: "Distributed File System",
    description: "Multi-server distributed file system with fault tolerance",
    longDescription: "Client–server architecture using sockets and concurrency for distributed file operations. Implements fault-tolerant operations across multiple nodes with focus on data consistency and system reliability.",
    technologies: ["C/C++", "Sockets", "Multi-threading", "Distributed Systems", "Client-Server Architecture", "Fault Tolerance"],
    category: "Systems",
    featured: false,
    links: {
      github: "# To be added"
    },
    status: "Completed"
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) => projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);