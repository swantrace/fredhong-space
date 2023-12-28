import ProjectList from "@/components/ProjectList";
import { getProjects } from "../../lib/md";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        All Projects
      </h2>
      <ProjectList
        projects={projects}
        amount={Infinity}
        sortKey="date"
        reverse={true}
        category="projects"
        tags={[]}
      />
    </>
  );
}
