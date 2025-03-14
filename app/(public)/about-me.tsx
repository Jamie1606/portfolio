"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 0.5 }} className="pt-32 lg:pt-36">
      <div id="about" className="flex flex-col w-full mx-auto max-w-[1100px] px-8">
        <label className="text-2xl mb-8 text-center text-[#0A66C2] font-bold sm:mb-12 md:text-3xl">👦 About Me</label>
        <div className="flex flex-col w-[100%] md:w-[90%] mx-auto">
          <p className="text-[15px] text-gray-600 mb-6 text-justify md:text-lg">
            Hello! I&apos;m <span className="font-semibold text-[#2A71D0]">Zay Yar Tun</span>, a passionate developer dedicated to crafting clean, efficient, and scalable solutions. I have a deep love for both frontend and backend development, always eager to learn new technologies and push the boundaries of what&apos;s possible.
          </p>

          <p className="text-[15px] text-gray-600 mb-6 text-justify md:text-lg">
            Currently, I&apos;m honing my skills in <span className="font-semibold">full-stack development</span> and exploring the latest trends in <span className="font-semibold">cloud computing</span>. I believe in continuous growth, collaboration, and delivering high-quality solutions that make a real impact.
          </p>

          <p className="text-[15px] text-gray-600 text-justify md:text-lg">When I&apos;m not coding, you&apos;ll find me diving into tech articles, learning new technologies, or brainstorming the next big idea. Let&apos;s connect and build something amazing together!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
