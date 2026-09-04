import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { projects } from "@/data/projects";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = projects.slice(0, 6);
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

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        aria-labelledby="home-project-title"
        className="relative h-screen w-full overflow-hidden hero-banner"
      >
        <Link
          to={`/work/${currentProject.slug}`}
          aria-label={`Ver proyecto ${currentProject.title}`}
          className="
            block h-full relative
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-inset
          "
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={getCloudinaryUrl(homeImage, 1920)}
              alt=""
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
          </div>

          {/* Bottom Gradient */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
          />

          {/* Project Information */}
          <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 lg:px-16">
            <div className="flex justify-between items-end gap-8">
              <div>
                <p className="font-sans text-base md:text-lg text-white/90 mb-3">
                  {currentProject.listingDescription}
                </p>

                <h1
                  id="home-project-title"
                  className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white max-w-2xl leading-tight font-medium"
                >
                  {currentProject.title}
                </h1>
              </div>

              <div
                aria-hidden="true"
                className="shrink-0 font-sans text-base md:text-lg text-white/90"
              >
                {String(currentSlide + 1).padStart(2, "0")}/
                {String(featuredProjects.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
