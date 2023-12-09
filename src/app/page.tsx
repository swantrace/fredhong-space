import Link from "next/link";
import BlogList from "../components/BlogList";
import ProjectList from "../components/ProjectList";
import { getBlogs, getProjects } from "../lib/md";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fred Hong - Personal Website",
  description: "",
};

export default async function Home() {
  const blogs = await getBlogs();
  const projects = await getProjects();

  return (
    <>
      <div className="relative">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <NavigationBar />
          <Header />
        </div>
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            priority={true}
            fill={true}
            alt=""
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="/hero-image.avif"
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Newest Blogs
          <Link href="/blogs" className="text-sm ml-1 text-indigo-600">
            (See All)
          </Link>
        </h2>
        <BlogList blogs={blogs} />
        <br></br>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Projects
          <Link href="/projects" className="text-sm ml-1 text-indigo-600">
            (See All)
          </Link>
        </h2>
        <ProjectList projects={projects} />
      </div>
    </>
  );
}
