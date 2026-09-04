import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      {" "}
      <div className="text-center">
        {" "}
        <p className="mb-6 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
          {" "}
          Error{" "}
        </p>{" "}
        <h1 className="font-serif text-8xl font-normal leading-none md:text-9xl">
          {" "}
          404{" "}
        </h1>{" "}
        <p className="mt-8 font-sans text-lg text-muted-foreground">
          {" "}
          La página que buscas no existe.{" "}
        </p>{" "}
        <Link
          to="/"
          className=" mt-8 inline-flex items-center gap-2 font-sans text-base underline underline-offset-4 transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 "
        >
          {" "}
          ← Volver al inicio{" "}
        </Link>{" "}
      </div>{" "}
    </main>
  );
};
export default NotFound;
