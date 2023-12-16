import BlogList from "@/components/components/BlogList";
import { getBlogs } from "../../lib/md";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        All Posts
      </h2>
      <BlogList
        blogs={blogs}
        amount={Infinity}
        sortKey="date"
        reverse={true}
        category="blogs"
        tags={[]}
      />
    </>
  );
}
