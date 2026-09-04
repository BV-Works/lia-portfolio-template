import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const Filmes = () => {
  const filmes = projects.filter((project) => project.category === "filmes");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section
        aria-labelledby="filmes-title"
        className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pb-40"
      >
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div
              aria-hidden="true"
              className="w-full h-px bg-foreground/20 mb-8"
            />

            <h1
              id="filmes-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal"
            >
              Filmes
            </h1>
          </AnimatedSection>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-20 lg:gap-y-24">
            {filmes.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.listingDescription}
                image={project.heroImage.publicId}
                slug={project.slug}
                variant="half"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Filmes;
