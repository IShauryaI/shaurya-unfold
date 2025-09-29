export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "Web Development" | "Data & ML" | "Systems" | "Mobile" | "Computer Vision";
  featured: boolean;
  links: {
    github?: string;
    demo?: string;
    live?: string;
  };
  image?: string;
  status: "Completed" | "In Progress" | "Planned";
  metrics?: { label: string; value: string; description: string }[];
  keyFeatures?: string[];
  date?: string;
}

export const projects: Project[] = [
  {
    id: "stereo-vision-3d",
    title: "3D Reconstruction from Stereo Vision",
    description: "End-to-end computer vision pipeline for metric 3D modeling",
    longDescription: "Built complete stereo vision system covering camera calibration, epipolar geometry, dense matching, and 3D point-cloud reconstruction. Implemented dual approaches at each stage (OpenCV vs custom algorithms) to demonstrate trade-offs between accuracy and speed.",
    technologies: [
      "Python",
      "OpenCV", 
      "NumPy",
      "SIFT",
      "FLANN",
      "RANSAC",
      "Plotly",
      "Matplotlib",
      "Google Colab"
    ],
    category: "Computer Vision",
    featured: true,
    links: {
      github: "https://github.com/IShauryaI/stereo-vision-reconstruction"
    },
    status: "Completed",
    metrics: [
      { label: "3D Points", value: "150k+", description: "Generated per scene" },
      { label: "Depth Coverage", value: "95%", description: "Valid disparities" },
      { label: "Accuracy", value: "<0.5px", description: "Reprojection error" },
      { label: "Processing", value: "10 FPS", description: "Real-time capable" }
    ],
    keyFeatures: [
      "Dual camera calibration (OpenCV + custom SVD/DLT)",
      "Interactive epipolar geometry with ZNCC matching",
      "Comparative dense stereo (StereoBM vs ZNCC edge interpolation)",
      "Metric 3D reconstruction with RGB texture mapping"
    ],
    date: "Jan 2025 - Apr 2025"
  },
  {
    id: "wellbeing-healthcare",
    title: "Wellbeing — AI Recommendations System",
    description: "HIPAA-compliant AI engine for symptom-based medicine recommendations",
    longDescription: "Developed HIPAA-compliant AI health recommendation system delivering symptom-based medicine suggestions with 80% accuracy. Architected microservices using FastAPI and Django, implementing role-based access control and secure REST APIs for healthcare data processing.",
    technologies: ["Python", "React", "Django", "FastAPI", "PostgreSQL", "Docker", "AI/ML"],
    category: "Data & ML",
    featured: true,
    links: {
      github: "https://github.com/IShauryaI"
    },
    status: "Completed",
    metrics: [
      { label: "Accuracy", value: "80%", description: "Recommendation precision" }
    ],
    keyFeatures: [
      "HIPAA-compliant architecture",
      "FastAPI microservices",
      "Role-based access control",
      "Secure REST APIs"
    ],
    date: "Jan 2025 - Apr 2025"
  },
  {
    id: "microloan-fraud",
    title: "Microloan Fraud Detection — Analytics System",
    description: "Processing 11M+ loan records with XGBoost achieving 96% ROC-AUC",
    longDescription: "Processed 11M+ loan records with XGBoost + ensemble models, achieving 96% ROC-AUC. Built scalable fraud detection workflows with Apache Airflow orchestration and containerized deployment on AWS.",
    technologies: ["Python", "Java", "Apache Airflow", "Docker", "PostgreSQL", "AWS", "XGBoost"],
    category: "Data & ML",
    featured: true,
    links: {
      github: "https://github.com/IShauryaI"
    },
    status: "Completed",
    metrics: [
      { label: "Records", value: "11M+", description: "Processed" },
      { label: "ROC-AUC", value: "96%", description: "Model accuracy" }
    ],
    keyFeatures: [
      "XGBoost ensemble models",
      "Apache Airflow orchestration",
      "Scalable fraud detection workflows"
    ],
    date: "May 2025 - Aug 2025"
  },
  {
    id: "distributed-file-system",
    title: "Distributed File System — Multi-Server Architecture",
    description: "4-node concurrent file system using C sockets + POSIX threads with fault tolerance",
    longDescription: "Implemented 4-node concurrent file system using C sockets + POSIX threads with fault tolerance. Architected automated server health monitoring achieving near-zero downtime through comprehensive fault tolerance mechanisms.",
    technologies: ["C", "POSIX Threads", "IPv4 Sockets", "Linux", "Bash"],
    category: "Systems",
    featured: true,
    links: {
      github: "https://github.com/IShauryaI"
    },
    status: "Completed",
    keyFeatures: [
      "4-node concurrent architecture",
      "Fault tolerance mechanisms",
      "Automated server health monitoring",
      "Near-zero downtime"
    ],
    date: "Jan 2025 - Apr 2025"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Responsive portfolio built in React + TypeScript with 100% Lighthouse performance",
    longDescription: "Built responsive portfolio site in React + TypeScript, achieving 100% Lighthouse performance via optimized components & CSS3. Implemented modern design system with animations, accessibility features, and SEO optimization.",
    technologies: ["React", "TypeScript", "CSS3", "JavaScript", "Git", "CI/CD"],
    category: "Web Development",
    featured: false,
    links: {
      github: "https://github.com/IShauryaI/portfolio",
      live: "https://shauryaparshad.com"
    },
    status: "Completed",
    metrics: [
      { label: "Lighthouse", value: "100%", description: "Performance score" }
    ],
    date: "July 2025 - Aug 2025"
  },
  {
    id: "phoneapp-acc",
    title: "PhoneApp-ACC — Contact Management System",
    description: "Java-based Android contact management app with MVVM architecture and SQLite database",
    longDescription: "Comprehensive contact management and directory services application featuring clean MVVM architecture, efficient data handling with Room Database, and intuitive UI. Implements search/filter functionality, contact categorization, data export/import, and comprehensive input validation.",
    technologies: ["Java", "Android SDK", "SQLite", "Room Database", "MVVM", "Gradle", "JUnit", "Mockito"],
    category: "Mobile",
    featured: false,
    links: {
      github: "https://github.com/IShauryaI/PhoneApp-ACC"
    },
    status: "Completed",
    keyFeatures: [
      "Contact management (add, edit, delete, organize)",
      "Advanced search and filtering capabilities",
      "Contact categorization and grouping",
      "Data backup and restore functionality",
      "Clean MVVM architecture with Unit testing"
    ],
    date: "2024"
  },
  {
    id: "gadget-gaze",
    title: "Gadget Gaze — Product Discovery Platform",
    description: "Modern e-commerce platform for exploring and showcasing technology gadgets",
    longDescription: "A modern product discovery platform built with React and TypeScript for exploring the latest technology gadgets and electronics. Features intuitive browsing interface, detailed product specifications, user reviews system, and advanced filtering capabilities. Built with Vite, Tailwind CSS, and shadcn/ui components.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Hook Form"],
    category: "Web Development",
    featured: false,
    links: {
      github: "https://github.com/IShauryaI/gadget-gaze"
    },
    status: "Completed",
    keyFeatures: [
      "Product discovery and browsing",
      "Detailed specifications and comparisons",
      "Community-driven reviews and ratings",
      "Advanced search and filtering",
      "Responsive mobile and desktop design",
      "Product wishlist management"
    ],
    date: "2025"
  },
  {
    id: "pranachain",
    title: "PranaChain — Healthcare AI & Blockchain",
    description: "Patient-centered healthcare system combining AI predictions with blockchain transparency",
    longDescription: "Healthcare data platform integrating machine learning for predictive health insights with blockchain-backed ledger for transparency and data integrity. Explores AI models for diabetes, heart disease, and chronic conditions while ensuring patient data ownership and tamper-proof logging of predictions. Research project in planning phase for University of Windsor internship.",
    technologies: ["Python", "Machine Learning", "Blockchain", "Healthcare AI", "Jupyter Notebook"],
    category: "Data & ML",
    featured: false,
    links: {
      github: "https://github.com/IShauryaI/PranaChain"
    },
    status: "In Progress",
    keyFeatures: [
      "Predictive ML models for health risks",
      "Blockchain-backed prediction logging",
      "Patient data ownership and control",
      "Transparent and auditable clinical insights",
      "HIPAA-compliant architecture planning"
    ],
    date: "Sep 2025 - Dec 2025"
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) => projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
