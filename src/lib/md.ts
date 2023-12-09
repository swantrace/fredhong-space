import { join } from "path";
import { readdir, readFile, writeFile } from "fs/promises";

import matter from "gray-matter";

export interface MarkDownItem {
  title: string;
  slug: string;
  content: string;
  summary: string;
  coverImage: string;
  date?: string;
  category?: string;
}

export interface Blog extends MarkDownItem {
  authorImage?: string;
  author?: string;
}

export interface Project extends MarkDownItem {
  employmentDate: string;
}

export interface SearchContent {
  slug: string;
  title: string;
  summary: string;
  category: string;
}

export const BLOG_PATH = "/content/blogs";
export const PROJECT_PATH = "/content/projects";
export const BLOG_SEARCH_INDEX_PATH = "/content/search/blogs.json";
export const PROJECT_SEARCH_INDEX_PATH = "/content/search/projects.json";

export const getPath = (path: string) => {
  return join(process.cwd(), path);
};

export const getFileNames = async (path: string): Promise<string[]> => {
  try {
    const files = (await readdir(getPath(path), {
      encoding: "utf-8",
      recursive: true,
    })) as string[];
    return files;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export const getItemContent = async <T extends MarkDownItem>(
  path: string,
  fileName: string
) => {
  try {
    const item = (await readFile(getPath(`${path}/${fileName}`), {
      encoding: "utf-8",
    })) as string;
    const { data, content } = matter(item);
    return { ...data, content } as T;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const getItemsContent = async <T extends MarkDownItem>(path: string) => {
  const fileNames = await getFileNames(path);
  const items = (
    await Promise.all(
      fileNames.map(async (fileName) => {
        const item = await getItemContent<T>(path, fileName);
        item && (item.slug = fileName.replace(".md", ""));
        return item;
      })
    )
  ).filter((item) => item) as T[];
  return items;
};

export const getBlogs = async () => {
  const blogs = await getItemsContent<Blog>(BLOG_PATH);
  const blogSearchIndex = blogs.map((blog) => ({
    slug: blog.slug,
    title: blog.title,
    summary: blog.summary,
    category: blog.category ?? "blogs",
  }));
  try {
    await writeFile(
      getPath(BLOG_SEARCH_INDEX_PATH),
      JSON.stringify(blogSearchIndex, null, 2)
    );
  } catch (error) {
    console.error("blog-search-index failed to build: ", error);
  }
  return blogs;
};

export const getBlogBySlug = async (slug: string) => {
  return await getItemContent<Blog>(BLOG_PATH, `${slug}.md`);
};

export const getProjects = async () => {
  const projects = await getItemsContent<Project>(PROJECT_PATH);
  try {
    const projectSearchIndex = projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      summary: project.summary,
      category: project.category ?? "projects",
    }));
    await writeFile(
      getPath(PROJECT_SEARCH_INDEX_PATH),
      JSON.stringify(projectSearchIndex, null, 2)
    );
  } catch (error) {
    console.error("project-search-index failed to build: ", error);
  }
  return projects;
};
