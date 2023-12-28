import NavigationBar from "@/components/NavigationBar";
import { type ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="relative z-10 bg-white pb-4 sm:pb-16 md:pb-10 lg:w-full lg:max-w-2xl lg:pb-14 xl:pb-16">
        <NavigationBar />
      </div>
      <div className="mx-auto max-w-2xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {children}
      </div>
    </>
  );
}
