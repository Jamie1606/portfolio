import GitHubIcon from "@/icons/github";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = () => {
  return (
    <div className="flex flex-col w-[380px] h-[380px] rounded-lg bg-cover  overflow-hidden relative" style={{ backgroundImage: "url('/projects/daily-hype.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-4 text-white flex flex-col">
        <div className="flex justify-end mt-2">
          <GitHubIcon className="hover:cursor-pointer" width={20} height={20} fill="#ffffff" />
        </div>
        <h3 className="text-[17px] font-bold">title</h3>
        <p className="text-[15px]">description</p>
      </div>
    </div>
  );
};

export default ProjectCard;
