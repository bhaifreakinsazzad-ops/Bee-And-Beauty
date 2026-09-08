import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import BeeMark from "@/components/studio/BeeMark";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <BeeMark className="mx-auto mb-6 h-16 w-auto" />
        <h1 className="mb-3 font-display text-6xl font-semibold text-primary">
          404
        </h1>
        <p className="mb-6 font-body text-lg text-muted-foreground">
          This page hasn't been refined yet.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-md bg-primary px-5 py-2.5 font-body text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Return to Bee &amp; Beauty
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
