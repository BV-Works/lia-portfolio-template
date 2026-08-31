import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { getProjectBySlug, getNextProject } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  const nextProject = getNextProject(slug || '');

  if (!project) {
    return (
      <main className="min-h-screen bg-foreground text-background">
        <Navbar />
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16">
          <h1 className="font-serif text-4xl font-semibold">Project not found</h1>
          <Link to="/" className="font-sans text-base text-background/60 hover:text-background mt-4 inline-block">
            ← Back to work
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-foreground text-background">
      <Navbar />
      
      {/* Hero Image - 100vh */}
      <section className="h-screen w-full">
        <motion.img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        />
      </section>

      {/* Project Info - Two columns like Wolff Olins */}
      <section className="py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Title & Metadata */}
            <AnimatedSection className="lg:col-span-4">
              <div className="space-y-8 lg:sticky lg:top-28">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
                  {project.title}
                </h1>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-2 text-background/50">Industry</h3>
                    <p className="font-sans text-sm text-background/70">{project.industry}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-2 text-background/50">What I Did</h3>
                    <p className="font-sans text-sm text-background/70">{project.services.join(', ')}</p>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 font-sans text-sm font-medium border border-background/30 px-6 py-3 hover:bg-background hover:text-foreground transition-colors">
                  Download Project Images
                </button>
              </div>
            </AnimatedSection>

            {/* Right Column - Extended Content */}
            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div className="space-y-12">
                {/* Main Headline */}
                <h2 className="font-serif text-2xl md:text-3xl font-medium leading-snug">
                  {project.description}
                </h2>

                {/* Extended Content */}
                <div className="space-y-6 font-sans text-base text-background/70 leading-relaxed">
                  <p>{project.intro}</p>
                  
                  <p>
                    The project demanded a comprehensive approach that would resonate across multiple touchpoints and audiences. 
                    We began with extensive research to understand the brand's position in the market and identify opportunities 
                    for differentiation. This foundation allowed us to develop a strategy that was both ambitious and achievable.
                  </p>
                  
                  <p>
                    Working closely with stakeholders, we refined the visual language to ensure it communicated the brand's 
                    core values while remaining flexible enough to adapt to various contexts. The result is a cohesive system 
                    that feels fresh yet timeless.
                  </p>
                </div>

                {/* Section: The Approach */}
                <div className="space-y-4 pt-8">
                  <h3 className="font-serif text-xl md:text-2xl font-medium">
                    The approach
                  </h3>
                  <div className="space-y-4 font-sans text-base text-background/70 leading-relaxed">
                    <p>
                      A simple question sat at the heart of our approach: what role does this brand play in people's lives? 
                      From initial concepts to final execution, we heard the same thing: when people connect with authentic 
                      design, they form lasting relationships with brands.
                    </p>
                    <p>
                      Research revealed that people's appreciation for design is not rooted in aesthetics alone but in the 
                      meaning and functionality it brings. This major insight, combined with the brand's proud legacy of 
                      quality, led to the development of our strategy which is anchored around the idea of purposeful design.
                    </p>
                    <p>
                      Purpose is the promise of amplifying all the emotions of great design: clarity, connection, delight, 
                      the ups, the downs and everything in between. It's an invitation for people to experience design 
                      their way, on their terms.
                    </p>
                  </div>
                </div>

                {/* Section: The Execution */}
                <div className="space-y-4 pt-8">
                  <h3 className="font-serif text-xl md:text-2xl font-medium">
                    The execution
                  </h3>
                  <div className="space-y-4 font-sans text-base text-background/70 leading-relaxed">
                    <p>
                      Alongside refreshing the visual identity and refining its unique voice, we introduced a new design 
                      system to reflect the brand's north star: 'move people through purposeful design.' The system conveys 
                      movement and progression, with a strong visual angle inspired by the brand's heritage.
                    </p>
                    <p>
                      The new identity will now feature prominently across all touchpoints, from digital platforms to 
                      physical experiences. We developed comprehensive guidelines to ensure consistency while allowing 
                      for creative flexibility across different applications and markets.
                    </p>
                    <p>
                      The result is a brand that feels both familiar and excitingly new—one that honors its past while 
                      confidently stepping into the future. Early reception has been overwhelmingly positive, with 
                      stakeholders and audiences alike responding to the refreshed direction.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="py-16 md:py-24 border-t border-background/10">
          <div className="px-6 md:px-12 lg:px-16">
            <AnimatedSection>
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">
                Next Project
              </p>
              <Link 
                to={`/work/${nextProject.slug}`} 
                className="group block"
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium group-hover:opacity-60 transition-opacity">
                  {nextProject.title}
                </h2>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ProjectDetail;
