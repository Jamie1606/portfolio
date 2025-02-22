const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col w-full mt-20 mx-auto max-w-[1200px] px-8 lg:mt-36">
      <label className="text-heading mb-8 text-center text-[#0A66C2] font-bold sm:mb-12">👦 About Me</label>
      <div className="flex flex-col w-[90%] mx-auto">
        <p className="text-body text-gray-600 mb-6 text-justify">
          Hello! I’m <span className="font-semibold text-[#2A71D0]">Zay Yar Tun</span>, a passionate developer dedicated to crafting clean, efficient, and scalable solutions. I have a deep love for both frontend and backend development, always eager to learn new technologies and push the boundaries of what’s possible.
        </p>

        <p className="text-body text-gray-600 mb-6 text-justify">
          Currently, I’m honing my skills in <span className="font-semibold">full-stack development</span> and exploring the latest trends in <span className="font-semibold">cloud computing</span> and <span className="font-semibold">machine learning</span>. I believe in continuous growth, collaboration, and delivering high-quality solutions that make a real impact.
        </p>

        <p className="text-body text-gray-600 text-justify">When I’m not coding, you’ll find me diving into tech articles, learning new technologies, or brainstorming the next big idea. Let’s connect and build something amazing together!</p>
      </div>
    </div>
  );
};

export default AboutMe;
