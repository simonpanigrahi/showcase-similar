
import Navbar from "@/components/Navbar";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard = ({ title, description, image, tags, demoLink, repoLink }: ProjectProps) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-mint hover:text-opacity-80"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-800 hover:text-opacity-80"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const projects: ProjectProps[] = [
  {
    title: "Customer Segmentation Analysis",
    description:
      "Used K-means clustering to identify distinct customer segments for targeted marketing strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    tags: ["Python", "Scikit-learn", "Data Visualization"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Sales Prediction Model",
    description:
      "Developed a time series forecasting model to predict monthly sales with 92% accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tags: ["R", "Time Series", "ARIMA"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description:
      "Created an interactive dashboard for analyzing customer feedback sentiment in real-time.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000",
    tags: ["NLP", "Python", "Dash", "Flask"],
    demoLink: "#",
    repoLink: "#",
  },
];

export default Projects;
