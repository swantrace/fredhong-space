"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  project,
}: {
  project: {
    slug: string;
    coverImage: string;
    title: string;
    summary: string;
  };
}) => {
  return (
    <div key={project.slug} className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <Image
          fill={true}
          src={project.coverImage}
          alt={""}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <Link href={`/projects/${project.slug}`}>
          <span className="absolute inset-0" />
          {project.title}
        </Link>
      </h3>
      <p className="text-base font-semibold text-gray-900">{project.summary}</p>
    </div>
  );
};

export default ProjectItem;
