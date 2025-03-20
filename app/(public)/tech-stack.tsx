"use client";

import { FaJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaAws, FaGit, FaGithub, FaLinux, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPhp, SiTailwindcss, SiNextdotjs, SiExpress, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiVercel, SiRender, SiGithubactions, SiElectron, SiPostman } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { motion } from "framer-motion";

const techStackArr = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Microsoft SQL Server", icon: <DiMsqlServer className="text-red-600" /> },
  { name: "GitHub Pages", icon: <FaGithub className="text-gray-800" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Render", icon: <SiRender className="text-blue-400" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "Linux", icon: <FaLinux className="text-black" /> },
  { name: "Git", icon: <FaGit className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

const TechStack = () => {
  return (
    <div id="skill" className="flex flex-col w-full max-w-[1200px] mx-auto px-3 mt-20 md:px-8 lg:mt-36">
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 0.5 }} className="mb-4 mx-auto">
        <label className="text-2xl text-center text-[#0A66C2] font-bold sm:mb-12 md:text-3xl">🚀 Skills</label>
      </motion.div>
      <div className="flex justify-center pt-4 items-center w-full flex-wrap max-h-fit gap-2 overflow-hidden">
        {techStackArr.map((tech, index) => (
          <motion.div key={index} initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}>
            <div className="relative bg-transparent overflow-hidden rounded-xl flex justify-center items-center hover-animation-two">
              <div className="relative flex justify-center items-center flex-col z-10 space-y-2 w-[90px] h-[90px] bg-white m-0.5 rounded-lg cursor-pointer">
                <div className="text-4xl hover:cursor-pointer">{tech.icon}</div>
                <p className="text-gray-700 hover:cursor-pointer cursor-default text-[12px] text-center font-medium px-2">{tech.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
