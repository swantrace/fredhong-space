"use client";

import Image from "next/image";
import Link from "next/link";
import { shortify } from "../lib/utils";

const Wrapper = ({
  style,
  children,
  wrapperClass,
}: {
  style: "grid" | "list";
  children: React.ReactNode;
  wrapperClass: string;
}) => {
  return style === "grid" ? (
    <div className={wrapperClass}>{children}</div>
  ) : (
    <li className={wrapperClass}>{children}</li>
  );
};

const ProjectItem = ({
  project,
  style,
  edit,
}: {
  project: {
    slug: string;
    coverImage: string;
    title: string;
    summary: string;
  };
  style: "grid" | "list";
  edit: boolean;
}) => {
  const wrapperClass = style === "grid" ? "group relative" : "mb-5";
  const imageWrapperClass =
    style === "grid"
      ? "relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
      : "hidden";
  const projectLink = edit
    ? `dashboard/projects/${project.slug}`
    : `/projects/${project.slug}`;
  const titleClass =
    style === "grid"
      ? "mt-6 text-sm text-gray-500"
      : "mt-6 text-base text-gray-900";
  const summaryClass =
    style === "grid"
      ? "text-base font-semibold text-gray-900"
      : "text-sm font-semibold text-gray-500";
  return (
    <Wrapper style={style} wrapperClass={wrapperClass}>
      <div className={imageWrapperClass}>
        <Image
          fill={true}
          src={project.coverImage}
          alt={""}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className={titleClass}>
        <Link href={projectLink}>
          {style === "grid" ? <span className="absolute inset-0" /> : null}
          {style === "grid" ? shortify(project.title) : project.title}
        </Link>
      </h3>
      <p className={summaryClass}>
        {style === "grid" ? shortify(project.summary) : project.summary}
      </p>
    </Wrapper>
  );
};

export default ProjectItem;
