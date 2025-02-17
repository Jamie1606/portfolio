import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";

const projects = [
  { title: "Elderly Fall Detection System", description: "This is the school project developed by three of us by using computer vision and machine learning.", image: "/projects/daily-hype.png", technologies: ["python", "flask", "mysql", "node-red", "tensorflow", "github"], githubLink: "", demoLink: "" },
  { title: "DailyHype", description: "This is an online clothing ecommerce platform, built by a team of five as a school project.", image: "/projects/daily-hype.png", technologies: ["next.js", "postgresql", "node.js", "express.js", "redis", "tailwind css", "typescript", "github"], githubLink: "", demoLink: "" },
  { title: "BookHaven", description: "This is the online book store featuring the latest books, built by a team of two for the school project.", image: "/projects/daily-hype.png", technologies: ["java", "spring boot", "mysql", "tomcat", "github"], githubLink: "", demoLink: "" },
  { title: "Mooodify", description: "", image: "/projects/daily-hype.png", technologies: ["next.js", "postgresql", "node.js", "express.js"], githubLink: "", demoLink: "" },
  { title: "Light Novel Extractor", description: "", image: "/projects/daily-hype.png", technologies: ["next.js", "postgresql", "node.js", "express.js"], githubLink: "", demoLink: "" },
  { title: "Quek Web Extension", description: "", image: "/projects/daily-hype.png", technologies: ["next.js", "postgresql", "node.js", "express.js"], githubLink: "", demoLink: "" },
];

const Project = () => {
  return (
    <div className="flex flex-col mt-52 justify-center w-full">
      <label className="text-3xl text-center text-[#0A66C2] font-bold mb-12">Latest Projects</label>
      <div className="flex justify-center gap-x-12 flex-wrap gap-y-8 w-[1400px]">
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
      <Button className="mt-8 w-[150px] mx-auto">Show More</Button>
    </div>
  );
};

export default Project;
