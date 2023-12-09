import ProjectItem from "./ProjectItem";
import { type Project } from "../lib/md";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {projects.map((project) => (
        <ProjectItem key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
