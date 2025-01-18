import ProjectCard from "./project-card";

const Project = () => {
  return (
    <div className="flex flex-col mt-52 justify-center w-full">
      <label className="text-2xl text-center text-[#0A66C2] font-bold mb-12">Projects</label>
      <div className="flex justify-around items-center w-[1200px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
