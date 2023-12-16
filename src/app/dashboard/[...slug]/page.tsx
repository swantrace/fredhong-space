import {
  getBlogs,
  getProjects,
  getBlogBySlug,
  getProjectBySlug,
} from "../../../lib/md";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  const projects = await getProjects();
  return [
    ...blogs.map((blog) => ({
      slug: [blog.category, blog.slug],
    })),
    ...projects.map((project) => ({
      slug: [project.category, project.slug],
    })),
  ];
}

export default async function ItemEditorPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const itemSlug = slug[slug.length - 1];
  const categorySlug = slug[0];
  const item =
    categorySlug === "blogs"
      ? await getBlogBySlug(itemSlug)
      : await getProjectBySlug(itemSlug);
  console.log("item: ", item);
  return (
    <div>
      {itemSlug}, {categorySlug}
    </div>
  );
}
