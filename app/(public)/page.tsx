import AboutMe from "./about-me";
import Banner from "./banner";
import Project from "./project";
import ScrollToTop from "./scroll-to-top";
import TechStack from "./tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto">
      <Banner />
      <AboutMe />
      <TechStack />
      <Project />
      <ScrollToTop />
    </div>
  );
}
