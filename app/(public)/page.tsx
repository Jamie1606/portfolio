import AboutMe from "./about-me";
import Banner from "./banner";
import Project from "./project";
import ScrollToTop from "./scroll-to-top";
import SocialMedia from "./social-media";
import TechStack from "./tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto">
      <Banner />
      <SocialMedia />
      <AboutMe />
      <TechStack />
      <Project />
      <ScrollToTop />
    </div>
  );
}
