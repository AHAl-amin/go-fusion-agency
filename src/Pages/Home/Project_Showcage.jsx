import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import car1 from "../../../public/images/project-img/arisha.png";
import genesis1 from "../../../public/images/project-img/genesis1.png";
import nevafold1 from "../../../public/images/project-img/nevafold1.png";
import sport1 from "../../../public/images/project-img/sport1.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Users,
  Star,
  Filter,
} from "lucide-react";

const projects = [
  {

    id: 1,
    title: "Ariah's World",
    description:
      "Ariah’s World – Embrace Beauty, Healing, and Self-Love A Spiritual Journey Toward Inner Power and Transformation",
    longDescription:
      "Ariah’s World is a holistic beauty and wellness sanctuary that celebrates the divine feminine through ritual-infused products and intentional self-care. Every creation is designed to nurture healing energy, elevate confidence, and help women reconnect with their inner power. Discover a world where beauty becomes a spiritual journey of love, light, and transformation",
    image: car1,
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://ariahsworld.com/",
    githubUrl: "https://github.com/",
    featured: true,
    date: "2024-01",
    team: "4 developers",
    status: "completed",
  },
  {
    id: 2,
    title: "Genesis",
    description:
      "Powering the Future of AI Creation Where Innovation Meets Intelligent Design",
    longDescription:
      "Genesis is a next-generation AI platform built to transform the way creators, developers, and businesses harness artificial intelligence. From generative art and digital media to smart automation, it redefines what’s possible through cutting-edge machine learning. Experience a seamless fusion of creativity and technology that drives ideas into reality.",
    image: genesis1,
    category: "Data Science",
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "D3.js"],
    liveUrl: "https://genesis.jvai.site/",
    githubUrl: "https://github.com/example",
    featured: true,
    date: "2024-02",
    team: "6 developers",
    status: "completed",
  },
  {
    id: 3,
    title: "NevaFold",
    description:
      "NEVAFOLD brings bold, vibrant street-and-active wear crafted in Australia for worldwide style seekers. Colourful, premium materials meet confident design to elevate your everyday and workout wardrobe.",
    longDescription:
      " NEVAFOLD is an energetic Australian-based fashion label dedicated to delivering high-quality active and street apparel that lifts your style and vibe. With vibrant colours, advanced fabric technology and ergonomic cuts, each piece is designed for both comfort and bold expression. Whether you’re training, chilling or stepping into the city, NEVAFOLD combines trend-forward aesthetics with performance features and ships worldwide. ",
    image: nevafold1,
    category: "Web Development",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "https://nevafold.com.au/",
    featured: false,
    date: "2023-12",
    team: "3 developers",
    status: "completed",
  },
  {
    id: 4,
    title: "Ek Agency",
    description:
      "A full-service digital agency dedicated to shaping your brand’s future through strategic design, cutting-edge technology and results-driven creativity.",
    longDescription:
      "We partner with forward-thinking brands to craft bold experiences that resonate, convert and scale. From branding and UI/UX design to web development and performance optimisation, our team blends creative vision with technical expertise. By combining data-driven insights, seamless execution and continuous refinement, we help clients build meaningful connections and drive measurable impact. Let us transform your ideas into digital realities that not only look exceptional but perform brilliantly.",
    image: sport1,
    category: "Web Developement",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    liveUrl: "https://ekagency.jvai.site/",
    githubUrl: "https://github.com/example",
    featured: true,
    date: "2024-03",
    team: "5 developers",
    status: "in-progress",
  },

];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Blockchain",
  "IoT",
  "AI/ML",
];

const statusColors = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  planned: "bg-blue-100 text-blue-800",
};

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <div className="relative min-h-screen bg-[#160306] dark:bg-black py-16">
      {/* Grid system background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r  from-orange-200 to-orange-300  text-transparent bg-clip-text mb-4">
            Project Showcase
          </h1>
          <p className="text-[17px] text-white max-w-3xl mx-auto">
            Explore our portfolio of innovative projects spanning web
            development, mobile apps, AI/ML, blockchain, and IoT solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">

          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`mb-2 cursor-pointer
        hover:bg-gradient-to-r from-orange-200 to-orange-300 
        ${selectedCategory === category ? "bg-gradient-to-r from-orange-200 to-orange-300  text-black font-bold" : ""}
      `}
            >
              {category}
            </Button>
          ))}
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r text-gray-100  bg-clip-text mb-8 ">
            All Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent
            style={{
              maxWidth: "1200px",

              width: "80%",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-[500px] h-96 rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 mt-5">
                      Project Details
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 mt-5">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 mt-5">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedProject.date}
                      </div>
                      {selectedProject.team && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {selectedProject.team}
                        </div>
                      )}
                      <Badge className={statusColors[selectedProject.status]}>
                        {selectedProject.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <Button asChild>
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function ProjectCard({ project, onSelect, featured = false }) {
  return (
    <Card
      className={`group hover:shadow-md transition-all duration-300 overflow-hidden ${featured ? "" : ""
        }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-96 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={() => onSelect(project)}
            variant="secondary"
            size="sm"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Details
          </Button>
        </div>
        {featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-yellow-500 text-yellow-900">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className={statusColors[project.status]}>
            {project.status.replace("-", " ")}
          </Badge>
        </div>
      </div>
      <CardContent>
        <div className="mb-3">
          <Badge variant="outline" className="mb-2">
            {project.category}
          </Badge>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
