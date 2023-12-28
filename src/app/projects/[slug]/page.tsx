import MarkDown from "@/components/MarkDown";
import { getProjectBySlug, getProjects } from "@/lib/md";
import Image from "next/image";
import { redirect } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProjectBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: project?.title ?? "Fred Hong - Personal Website",
    openGraph: {
      images: [
        project?.coverImage ?? "/default-cover-image.jpg",
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
  const project = await getProjectBySlug(slug);

  if (!project) {
    redirect("/projects");
  }

  return (
    <div className="pt-6">
      <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {project.title}
          </h1>
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0 relative">
          <Image
            layout="fill"
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            alt=""
            src={project.coverImage}
          />
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{project.summary}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>
            <div className="mt-4 space-y-6">
              <article className="text-sm text-gray-600">
                <MarkDown>{project.content}</MarkDown>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
