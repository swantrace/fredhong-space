"use client";

import ProjectItem from "./ProjectItem";
import { type Project } from "../lib/md";
import { sortItemsBy, filterItemsBy } from "../lib/utils";

const ProjectList = ({
  projects,
  amount,
  sortKey,
  reverse,
  category,
  tags,
}: {
  projects: Project[];
  amount: number;
  sortKey: string;
  reverse: boolean;
  category: string;
  tags: string[];
}) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {projects
        .filter(filterItemsBy(category, tags))
        .sort(sortItemsBy(sortKey, reverse))
        .slice(0, amount)
        .map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
    </div>
  );
};

export default ProjectList;
