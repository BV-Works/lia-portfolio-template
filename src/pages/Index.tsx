import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';
import { projects } from '@/data/projects';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProjects = projects.slice(0, 6); // Projects for carousel

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  // Define layout pattern for grid: full, half, half, full, half, half
  const getVariant = (index: number): 'full' | 'half' => {
    const pattern = ['full', 'half', 'half', 'full', 'half', 'half'];
    return pattern[index % pattern.length] as 'full' | 'half';
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Full screen project carousel (100vh) */}
      <section className="relative h-screen w-full overflow-hidden hero-banner">
        {/* Current slide - no animation, instant change */}
        <div className="absolute inset-0">
          <Link to={`/work/${featuredProjects[currentSlide].slug}`} className="block h-full relative">
            {/* Full-bleed Image */}
            <div className="absolute inset-0">
              <img 
                src={featuredProjects[currentSlide].heroImage}
                alt={featuredProjects[currentSlide].title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text legibility */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
            
            {/* Bottom gradient overlay for extra legibility */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
            
            {/* Project Info - Same padding as header */}
            <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 lg:px-16">
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-sans text-base md:text-lg text-white/90 mb-3">
                    {featuredProjects[currentSlide].title}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white max-w-2xl leading-tight font-medium">
                    {featuredProjects[currentSlide].description}
                  </h2>
                </div>
                
                {/* Counter - Bottom right */}
                <div className="font-sans text-base md:text-lg text-white/90">
                  {String(currentSlide + 1).padStart(2, '0')}/{String(featuredProjects.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight max-w-5xl">
              I create transformative brands that move{' '}
              <span className="underline decoration-1 underline-offset-8">businesses</span>,{' '}
              <span className="underline decoration-1 underline-offset-8">people</span> and the{' '}
              <span className="underline decoration-1 underline-offset-8">world</span> forward.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Work Section - Same padding as banner content */}
      <section className="pt-0 pb-24 md:pb-32 lg:pb-40">
        <div className="px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <AnimatedSection>
            <div className="w-full h-px bg-foreground/20 mb-8" />
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-16 md:mb-20">
              Selected Work
            </h2>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-20 lg:gap-y-24">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                slug={project.slug}
                variant={getVariant(index)}
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

export default Index;
