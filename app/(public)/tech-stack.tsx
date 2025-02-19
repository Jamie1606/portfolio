import { FaJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaAws, FaGit, FaGithub, FaLinux, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPhp, SiTailwindcss, SiNextdotjs, SiExpress, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiVercel, SiRender, SiGithubactions, SiElectron, SiPostman } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const techStackArr = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
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
  { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
  { name: "Linux", icon: <FaLinux className="text-black" /> },
  { name: "Git", icon: <FaGit className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Electron.js", icon: <SiElectron className="text-blue-400" /> },
];

const TechStack = () => {
  return (
    <div id="skill" className="flex flex-col mt-20 w-full max-w-[1200px] mx-auto px-8 lg:mt-36">
      <label className="text-heading mb-8 text-center text-[#0A66C2] font-bold sm:mb-12">🚀 Skills</label>
      <div className="flex justify-center ms-2 items-center w-full flex-wrap">
        {techStackArr.map((tech, index) => (
          <div key={index} className="flex mb-4 mr-4 flex-col w-[90px] justify-center items-center h-[90px] space-y-2 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl">{tech.icon}</div>
            <p className="text-gray-700 cursor-default text-[12px] text-center font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
