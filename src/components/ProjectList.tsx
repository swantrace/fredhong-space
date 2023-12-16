"use client";

import ProjectItem from "./ProjectItem";
import { type Project } from "../lib/md";
import { sortItemsBy, filterItemsBy } from "../lib/utils";

const ProjectListContent = ({
  projects,
  amount,
  sortKey,
  reverse,
  category,
  tags,
  style,
  edit,
}: {
  projects: Project[];
  amount: number;
  sortKey: string;
  reverse: boolean;
  category: string;
  tags: string[];
  style?: "grid" | "list";
  edit?: boolean;
}) => {
  return (
    <>
      {projects
        .filter(filterItemsBy(category, tags))
        .sort(sortItemsBy(sortKey, reverse))
        .slice(0, amount)
        .map((project) => (
          <ProjectItem
            key={project.slug}
            project={project}
            style={style ?? "grid"}
            edit={edit ?? false}
          />
        ))}
    </>
  );
};

const ProjectList = ({
  projects,
  amount,
  sortKey,
  reverse,
  category,
  tags,
  style,
  edit,
}: {
  projects: Project[];
  amount: number;
  sortKey: string;
  reverse: boolean;
  category: string;
  tags: string[];
  style?: "grid" | "list";
  edit?: boolean;
}) => {
  return style === "list" ? (
    <ul className="divide-y divide-gray-200">
      <ProjectListContent
        projects={projects}
        amount={amount}
        sortKey={sortKey}
        reverse={reverse}
        category={category}
        tags={tags}
        style={style}
        edit={edit}
      />
    </ul>
  ) : (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProjectListContent
        projects={projects}
        amount={amount}
        sortKey={sortKey}
        reverse={reverse}
        category={category}
        tags={tags}
        style={style}
        edit={edit}
      />
    </div>
  );
};

export default ProjectList;
