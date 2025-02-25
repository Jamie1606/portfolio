import { FaJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaAws, FaGit, FaGithub, FaLinux, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPhp, SiTailwindcss, SiNextdotjs, SiExpress, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiVercel, SiRender, SiGithubactions, SiElectron, SiPostman } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

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
    <div id="skill" className="flex flex-col mt-20 w-full max-w-[1200px] mx-auto px-8 lg:mt-36">
      <label className="text-2xl mb-4 text-center text-[#0A66C2] font-bold sm:mb-12 md:text-3xl">🚀 Skills</label>
      <div className="flex justify-center ms-2 pt-4 items-center w-full flex-wrap max-h-fit overflow-hidden">
        {techStackArr.map((tech, index) => (
          <div key={index} className="relative group">
            {/* Shadow Effect (Behind Content Only) */}
            <div className="absolute inset-0 -z-10 scale-75 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl group-hover:scale-100 bg-brandShadow"></div>

            {/* Content Div */}
            <div className="relative flex mb-4 mr-4 flex-col w-[90px] justify-center items-center h-[90px] space-y-2 bg-white rounded-lg z-10 hover:cursor-pointer shadow-md transition-all duration-300 overflow-hidden hover:outline-[#0A66C2] hover:outline-[0.5px]">
              <div className="text-4xl hover:cursor-pointer">{tech.icon}</div>
              <p className="text-gray-700 hover:cursor-pointer cursor-default text-[12px] text-center font-medium px-2">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
