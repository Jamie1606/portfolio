import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ExternalLinkIcon from "@/icons/external-link";
import GitHubIcon from "@/icons/github";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ title, description, image, technologies, githubLink, demoLink }: ProjectCardProps) => {
  return (
    <Card className="w-[400px] rounded-xl">
      <CardHeader>
        <Image className="mx-auto" src={image} alt={title} width={350} height={300} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col w-full -mt-4 mx-auto">
          <h2 className="mx-auto mt-3 text-lg font-semibold">{title}</h2>
          <p className="mt-2 text-slate-600 text-sm text-justify">{description}</p>
          <div className="flex w-full mt-3 justify-center items-center gap-x-4 gap-y-3 flex-wrap">
            {technologies.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </div>
          <div className="flex w-full justify-center items-center mt-6 gap-x-12">
            {githubLink && (
              <a href={githubLink} target="_blank">
                <GitHubIcon width={24} height={24} />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank">
                <ExternalLinkIcon width={24} height={24} />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
