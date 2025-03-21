"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio", description: "This is the portfolio website created by me. I implemented this by using Next.js for static export with GitHub Pages.", image: "/projects/portfolio.png", technologies: ["next.js", "ci/cd pipeline", "cloudflare", "github pages", "shadcn ui", "tailwind css"], githubLink: "https://github.com/Jamie1606/portfolio", demoLink: "https://www.zayyartun.com" },

  { title: "Elderly Fall Detection", description: "This is the school project developed by three of us by using computer vision and machine learning.", image: "/projects/elderly-fall-detection.png", technologies: ["python", "flask", "mysql", "node-red", "tensorflow", "github"], githubLink: "https://github.com/Jamie1606/elderly-fall-detection" },

  { title: "Light Novel Extractor", description: "This is a fun project (firefox web extension) created by me to extract the content from <a style='text-decoration: underline; color: blue;' target='_blank' href='https://www.lightnovelworld.com'>this website</a> and export to epub file for e-reader.", image: "/projects/light-novel-extractor.png", technologies: ["javascript", "html", "css", "web extension"], githubLink: "https://github.com/Jamie1606/light-novel-extractor" },

  { title: "DailyHype", description: "This is an online clothing ecommerce platform, built by a team of five as a school project.", image: "", technologies: ["next.js", "postgresql", "node.js", "express.js", "redis", "tailwind css", "typescript", "github"], githubLink: "https://github.com/Jamie1606/daily-hype-old", demoLink: "" },

  { title: "BookHaven", description: "This is an online book store featuring the latest books, built by a team of two for the school project.", image: "/projects/book-haven.png", technologies: ["java", "spring boot", "mysql", "tomcat", "github"], githubLink: "", demoLink: "http://ec2-52-220-122-200.ap-southeast-1.compute.amazonaws.com:8080/BookHavenNew/" },

  // { title: "Mooodify", description: "", image: "", technologies: ["next.js", "postgresql", "node.js", "express.js"], githubLink: "", demoLink: "" },

  // { title: "Quek Web Extension", description: "", image: "", technologies: ["next.js", "postgresql", "node.js", "express.js"], githubLink: "", demoLink: "" },
];

const Project = () => {
  return (
    <div id="project" className="mt-20 flex flex-col lg:mt-36 justify-center w-full">
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-8 mx-auto sm:mb-12">
        <label className="text-2xl text-center text-[#0A66C2] font-bold md:text-3xl">📋 Latest Projects</label>
      </motion.div>
      <div className="w-full gap-y-5 flex justify-center gap-x-12 flex-wrap md:gap-y-8 md:gap-x-8 max-w-[1400px]">
        {projects.map((item, index) => (
          <motion.div key={index} initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}>
            <ProjectCard {...item} />
          </motion.div>
        ))}
      </div>
      {/* <Button className="mt-8 w-[150px] mx-auto">Show More</Button> */}
    </div>
  );
};

export default Project;
