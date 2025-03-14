"use client";

import { Button } from "@/components/ui/button";
import GitHubIcon from "@/icons/github";
import GmailIcon from "@/icons/gmail";
import LinkedInIcon from "@/icons/linkedin";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="flex flex-col mt-32 w-full px-6 mx-auto xs:w-[90%] md:mt-48 md:w-[35rem] lg:w-[50rem] lg:px-0 lg:mt-56 xl:w-[60rem]">
      <label className="text-[#333333] font-medium mb-6 tracking-wide text-lg md:mb-8 lg:mb-8 uppercase">Hey there, I&apos;m</label>
      <label className="text-[#2A71D0] font-extrabold text-4xl md:text-5xl lg:text-6xl">Zay Yar Tun</label>
      <label className="text-[#000000] mt-4 max-w-full text-xl font-medium md:mt-6 md:max-w-[30rem] lg:max-w-[50rem] lg:text-2xl lg:mt-8">Web & Mobile Developer | Full-Stack Enthusiast | Problem Solver</label>
      <label className="text-justify w-full text-[15px] text-[#333333] mt-10 max-w-[60rem] md:text-lg">
        Passionate <span className="font-bold">Web & Mobile Developer</span> with expertise in <span className="font-bold">React, Next.js, React Native and Node.js.</span> I love building intuitive digital experiences and solving real-world problems through technology. Currently seeking <span className="font-bold">Software Engineer & Web Developer roles</span> to contribute innovative solutions in a fast-paced environment.
      </label>
      <div className="flex items-center mt-8 md:mt-10">
        <Button className="w-fit h-12 mr-5 font-medium lg:h-14 lg:text-[16px]" variant="primary" onClick={() => window.open("https://drive.google.com/file/d/1mXGNMQgyisUgdpKZEMZyc9i0Ou0k11zm/view?usp=sharing", "_blank")}>
          Download Resume
        </Button>
        <div className="hidden md:flex lg:flex ms-6 space-x-6">
          <Link href="https://github.com/Jamie1606" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <GitHubIcon width={22} height={22} fill="#181717" title="GitHub" />
          </Link>
          <Link href="https://www.linkedin.com/in/zayyartun2025" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <LinkedInIcon width={22} height={22} fill="#0A66C2" title="LinkedIn" />
          </Link>
          <Link href="mailto:zyt.tharthar@gmail.com" className="hover:scale-110 transition-transform duration-300">
            <GmailIcon width={22} height={22} fill="#EA4335" title="Email Me" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
