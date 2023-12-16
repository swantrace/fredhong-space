"use client";

import Image from "next/image";
import Link from "next/link";
import { shortify } from "../lib/utils";

const BlogItem = ({
  blog,
  style,
  edit,
}: {
  blog: {
    slug: string;
    title: string;
    summary: string;
    coverImage: string;
  };
  style: "grid" | "list";
  edit: boolean;
}) => {
  const blogLink = edit
    ? `dashboard/blogs/${blog.slug}`
    : `/blogs/${blog.slug}`;
  return style === "grid" ? (
    <div className="group">
      <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
        <Link href={blogLink}>
          <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
            <Image
              priority={true}
              fill={true}
              style={{ objectFit: "cover" }}
              src={blog.coverImage}
              className="rounded-lg hover:cursor-pointer"
              alt={""}
            />
          </div>
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-bold">
            <span aria-hidden="true" className="inset-0" />
            {shortify(blog.title)}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{shortify(blog.summary)}</p>
        </div>
      </div>
      <Link href={blogLink} className="text-sm font-bold text-gray-700">
        Read More
      </Link>
    </div>
  ) : (
    <li className="mb-5">
      <Link href={blogLink}>
        <p className="text-base font-medium text-indigo-600 truncate">
          {blog.title}
        </p>
        <p className="mt-2 flex items-center text-sm text-gray-500">
          {blog.summary}
        </p>
      </Link>
    </li>
  );
};

export default BlogItem;
