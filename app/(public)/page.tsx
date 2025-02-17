import Banner from "./banner";
import Project from "./project";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto">
      <Banner />

      <Project />

      {/*       
      <div className="px-5 flex flex-col mt-60 relative lg:px-0">
        <div className="hidden lg:inline-block absolute border-2 border-[#0A66C2] h-8 -left-3"></div>
        <label className="text-2xl text-[#0A66C2] font-bold">About Me</label>
      </div>

      
      <div className="px-5 flex flex-col mt-60 relative lg:px-0">
        <div className="hidden lg:inline-block absolute border-2 border-[#0A66C2] h-8 -left-3"></div>
        <label className="text-2xl text-[#0A66C2] font-bold">Where I&apos;ve worked</label>
      </div> */}
    </div>
  );
}
