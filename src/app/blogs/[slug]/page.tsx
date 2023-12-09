import MarkDown from "@/components/components/MarkDown";
import { getBlogBySlug } from "@/components/lib/md";
import Image from "next/image";
import { redirect } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getBlogBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: blog?.title ?? "Fred Hong - Personal Website",
    openGraph: {
      images: [
        blog?.coverImage ?? "/default-cover-image.jpg",
        ...previousImages,
      ],
    },
  };
}

export default async function BlogDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(slug);

  console.log(blog?.content ?? "");

  if (!blog) {
    redirect("/blogs");
  }

  return (
    <div className="w-2/3 m-auto">
      {/* Blog Header Starts */}
      <div className="blog-detail-header">
        <div className="flex flex-row justify-between mb-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">{blog.author}</span>
                <div className="relative h-10 w-10 !mb-0">
                  <Image
                    priority={true}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    src={blog.authorImage ?? "/default-author-image.jpg"}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 !mb-0">
                <a href="#" className="hover:underline">
                  {blog.author}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={blog.date}>{blog.date ?? "2023-10-15"}</time>
              </div>
            </div>
          </div>
          <div className="flex self-end">{/* Social Links Here */}</div>
        </div>
        <h1 className="font-bold text-4xl mb-1">{blog.title}</h1>
        <h2 className="blog-detail-header-subtitle mb-2 text-xl text-gray-600">
          {blog.summary}
        </h2>
        <div className="h-96 bg-black mx-auto w-full relative">
          <Image
            priority={true}
            fill={true}
            style={{ objectFit: "cover" }}
            src={blog.coverImage ?? "/default-cover-image.jpg"}
            alt=""
          />
        </div>
      </div>
      {/* Blog Header Ends */}
      <article className="prose lg:prose-lg markdown-image-50">
        <MarkDown>{blog.content}</MarkDown>
      </article>
    </div>
  );
}
