import Link from "next/link";
import { navigationItems, socialLinks } from "../lib/data";

function Copyright() {
  return (
    <>
      &copy;
      <Link color="inherit" href="/">
        XY
      </Link>{" "}
      {new Date().getFullYear()}
    </>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigationItems.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-gray-400 hover:text-gray-500"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((item) => (
            <Link
              rel="noreferrer"
              target="_blank"
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          <Copyright />, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
