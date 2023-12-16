import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import React from "react";
import { getBlogs, getProjects } from "../../lib/md";
import BlogList from "@/components/components/BlogList";
import ProjectList from "@/components/components/ProjectList";

const DashboardHome = async () => {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const email = session.user!.email;
  const blogs = (await getBlogs()).filter((blog) => blog.email === email);
  const projects = (await getProjects()).filter(
    (project) => project.email === email
  );

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
        style="list"
        edit={true}
      />
      <hr></hr>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">
        All Projects
      </h2>
      <ProjectList
        projects={projects}
        amount={Infinity}
        sortKey="date"
        reverse={true}
        category="projects"
        tags={[]}
        style="list"
        edit={true}
      />
    </>
  );
};

export default DashboardHome;
