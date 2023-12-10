"use client";

import BlogItem from "./BlogItem";
import { type Blog } from "../lib/md";
import { filterItemsBy, sortItemsBy } from "../lib/utils";

const BlogList = ({
  blogs,
  amount,
  sortKey,
  reverse,
  category,
  tags,
}: {
  blogs: Blog[];
  amount: number;
  sortKey: string;
  reverse: boolean;
  category: string;
  tags: string[];
}) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {blogs
        .filter(filterItemsBy(category, tags))
        .sort(sortItemsBy(sortKey, reverse))
        .slice(0, amount)
        .map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
    </div>
  );
};

export default BlogList;
