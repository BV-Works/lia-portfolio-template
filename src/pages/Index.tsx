import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { projects } from "@/data/projects";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured projects for the homepage.
  // Currently limited to "Saltar" so the hero remains static.
  // The carousel can be reactivated in the future by changing this filter.
  const featuredProjects = projects.filter(
    (project) => project.slug === "saltar",
  );

  const currentProject = featuredProjects[currentSlide];

  useEffect(() => {
    if (featuredProjects.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  if (!currentProject) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Footer />
      </main>
    );
  }

  const homeImage =
    currentProject.homeImage?.publicId ?? currentProject.heroImage.publicId;

  const projectPath =
    currentProject.category === "otros-proyectos"
      ? `/otros-proyectos/${currentProject.slug}`
      : `/filmes/${currentProject.slug}`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar overlay />

      {/* =========================================================
            HERO
        ========================================================= */}

      <section
        aria-labelledby="home-project-title"
        className="relative h-screen w-full overflow-hidden hero-banner"
      >
        <Link
          to={projectPath}
          aria-label={`Ver proyecto ${currentProject.title}`}
          className="
            block h-full relative
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-inset
          "
        >
          <div className="absolute inset-0">
            <img
              src={getCloudinaryUrl(homeImage, 1920)}
              alt=""
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 id="home-project-title" className="sr-only">
            {currentProject.title}
          </h1>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
