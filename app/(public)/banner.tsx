import { Button } from "@/components/ui/button";
import FacebookIcon from "@/icons/facebook";
import GitHubIcon from "@/icons/github";
import GmailIcon from "@/icons/gmail";
import InstagramIcon from "@/icons/instagram";
import LinkedInIcon from "@/icons/linkedin";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col mt-20 w-full px-6 mx-auto md:mt-52 md:w-[35rem] lg:w-[50rem] lg:px-0 lg:mt-40 xl:w-[60rem] 2xl:mt-56">
      <label className="text-[#333333] mb-6 md:mb-8 lg:mb-8 lg:text-[1.1rem]">Hi, my name is</label>
      <label className="text-[#2A71D0] font-extrabold text-4xl md:text-5xl lg:text-6xl">Zay Yar Tun</label>
      <label className="text-[#000000] mt-7 max-w-full text-xl font-medium md:mt-8 md:max-w-[30rem] lg:max-w-[50rem] lg:text-2xl lg:mt-10">Final year student at Singapore Polytechnic</label>
      <label className="text-[#333333] mt-10 max-w-full md:max-w-[30rem] lg:max-w-[50rem] lg:text-[1.05rem] xl:max-w-[60rem]">Currently, I&apos;m honing my skills in frontend and backend development while exploring innovative solutions to the real-world challenges. As a motivated learner, I&apos;m committed to continuous growth, collaboration and delivering high quality solutions.</label>
      <div className="flex items-center mt-8 md:mt-10">
        <Button className="max-w-32 h-12 mr-5" variant="primary">
          View Resume
        </Button>
        <div className="hidden md:flex lg:flex ms-6 space-x-6">
          <Link href="https://github.com/Jamie1606" target="_blank">
            <GitHubIcon width={22} height={22} fill="#181717" />
          </Link>
          <Link href="">
            <FacebookIcon width={22} height={22} fill="#0866FF" />
          </Link>
          <Link href="">
            <InstagramIcon width={22} height={22} fill="#FF0069" />
          </Link>
          <Link href="https://www.linkedin.com/in/zayyartun2025" target="_blank">
            <LinkedInIcon width={22} height={22} fill="#0A66C2" />
          </Link>
          <Link href="">
            <GmailIcon width={22} height={22} fill="#EA4335" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
