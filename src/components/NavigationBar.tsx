import Navigation from "./Navigation";

const NavigationBar = () => {
  return (
    <>
      <svg
        className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <Navigation />
    </>
  );
};

export default NavigationBar;
