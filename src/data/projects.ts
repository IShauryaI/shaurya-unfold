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
    id: "stereo-3d-reconstruction",
    title: "Stereo Images to 3D Reconstruction",
    description: "Interactive 3D Depth Representation Tool",
    longDescription: "Captured a stereo chessboard pair and calibrated both cameras to recover intrinsics for 3D mapping. Computed dense disparities with StereoSGBM to reduce noise and fill low-texture regions. Reprojected disparity to real-world coordinates, built an interactive 3D point-cloud viewer colored by left image. Validated mapping by reconstructing the right image from left+disparity and visually comparing against ground truth, documented trade-offs between uncalibrated and calibrated rectification.",
    technologies: ["PyTorch", "OpenCV", "Plotly", "Python", "3D Reconstruction", "Computer Vision", "Stereo Vision", "Point Cloud"],
    category: "Data & ML",
    featured: true,
    links: {
      github: "# To be added",
      demo: "# To be added"
    },
    status: "Completed"
  },
  {
    id: "wellbeing-healthcare",
    title: "Wellbeing - Healthcare Symptom Analysis Platform",
    description: "Healthcare platform delivering personalized symptom analysis and medication suggestions",
    longDescription: "Led a 4-member agile team, managed sprint planning, delegated tasks and led code reviews. Architected and deployed a platform delivering personalized symptom analysis and medication suggestions. Developed a review module processing medicine reviews to support pharmaceutical analytics. Enhanced UI/UX to improve accessibility and engagement for patients and doctors.",
    technologies: ["Django", "Python", "JavaScript", "HTML", "CSS", "Bootstrap", "Healthcare Analytics", "Team Leadership"],
    category: "Web Development",
    featured: true,
    links: {
      github: "# To be added",
      demo: "# To be added"
    },
    status: "Completed"
  },
  {
    id: "daily-delivery",
    title: "Daily Delivery - Grocery Shopping Application",
    description: "Django-based delivery management system with automated order tracking",
    longDescription: "Directed project planning: defined scope, set milestones, and managed stakeholder expectations with weekly status reports. Coached and onboarded three junior developers through pair-programming sessions and technical workshops, improving delivery speed and code quality. Designed and implemented a Django/Python/MySQL delivery management system automating order placement, tracking, and staff onboarding. Developed interactive dashboards integrating customer data and reporting to support data-driven operational decisions.",
    technologies: ["Python", "Django", "Tkinter", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript", "Project Management"],
    category: "Web Development",
    featured: true,
    links: {
      github: "# To be added",
      demo: "# To be added"
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
    featured: true,
    links: {
      github: "# To be added"
    },
    status: "Completed"
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) => projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);