import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-semibold text-navbar-text">404</h1>
      <p className="mt-4 text-base sm:text-lg text-navbar-text">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 btn bg-black text-white border-none hover:bg-black px-8"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
