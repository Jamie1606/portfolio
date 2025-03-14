"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col w-full px-6 mx-auto xs:w-[90%] md:w-[40rem] lg:w-[50rem] lg:px-0 xl:w-[60rem] min-h-screen justify-center">
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 1.2 }} className="text-[#333333] font-medium mb-6 tracking-wide text-lg md:mb-8 lg:mb-8 uppercase">
        <label>Hey there, I&apos;m</label>
      </motion.div>
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 1.4 }} className="text-[#2A71D0] font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <label>Zay Yar Tun</label>
      </motion.div>
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 1.6 }} className="text-[#000000] mt-4 max-w-full text-xl font-medium md:mt-6 md:max-w-[30rem] lg:max-w-[50rem] lg:text-2xl lg:mt-8">
        <label>Web & Mobile Developer | Full-Stack Enthusiast | Problem Solver</label>
      </motion.div>
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 1.8 }} className="w-full text-[15px] text-[#333333] mt-10 max-w-[60rem] md:text-lg md:leading-8">
        <label>
          Passionate <span className="font-bold">Web & Mobile Developer</span> with expertise in <span className="font-bold">React, Next.js, React Native and Node.js.</span> I love building intuitive digital experiences and solving real-world problems through technology. Currently seeking <span className="font-bold">Software Engineer & Web Developer roles</span> to contribute innovative solutions in a fast-paced environment.
        </label>
      </motion.div>
      <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 2 }}>
        <Button className="w-fit h-12 px-4 font-medium mt-8 md:mt-10 lg:px-8 lg:h-14 lg:text-[16px]" variant="primary" onClick={() => window.open("https://drive.google.com/file/d/1mXGNMQgyisUgdpKZEMZyc9i0Ou0k11zm/view?usp=sharing", "_blank")}>
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default Banner;
