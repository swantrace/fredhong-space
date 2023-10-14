import Link from "next/link";
import BlogList from "../components/BlogList";
import PortfolioList from "../components/PortfolioList";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Newest Blogs
        <Link legacyBehavior href="/blogs">
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>
      <BlogList />
      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Portfolios
        <Link legacyBehavior href="/portfolios">
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>
      <PortfolioList />
    </>
  );
}
