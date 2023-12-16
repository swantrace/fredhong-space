"use client";

import BlogItem from "./BlogItem";
import { type Blog } from "../lib/md";
import { filterItemsBy, sortItemsBy } from "../lib/utils";

const BlogListContent = ({
  blogs,
  amount,
  sortKey,
  reverse,
  category,
  tags,
  style,
  edit,
}: {
  blogs: Blog[];
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
      {blogs
        .filter(filterItemsBy(category, tags))
        .sort(sortItemsBy(sortKey, reverse))
        .slice(0, amount)
        .map((blog) => (
          <BlogItem
            key={blog.slug}
            blog={blog}
            style={style ?? "grid"}
            edit={edit ?? false}
          />
        ))}
    </>
  );
};

const BlogList = ({
  blogs,
  amount,
  sortKey,
  reverse,
  category,
  tags,
  style,
  edit,
}: {
  blogs: Blog[];
  amount: number;
  sortKey: string;
  reverse: boolean;
  category: string;
  tags: string[];
  style?: "grid" | "list";
  edit?: boolean;
}) => {
  return style === "list" ? (
    <ul className="mt-6 flex flex-col">
      <BlogListContent
        blogs={blogs}
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
      <BlogListContent
        blogs={blogs}
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

export default BlogList;
