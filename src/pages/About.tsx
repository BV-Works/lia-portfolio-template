import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

const clients = [
  'Acme Ventures',
  'Maison Collective',
  'Northern Bank',
  'Studio Format',
  'Echo Media Group',
  'Shift Technologies'
];

const services = [
  'Brand Identity',
  'Digital Product Design',
  'Web Design',
  'Design Systems',
  'Art Direction'
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10">
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight max-w-5xl">
              I work independently, but never in isolation.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Large Photo Section */}
      <section className="pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=1920&q=80" 
                alt="Julien Moreau"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Title */}
            <AnimatedSection className="lg:col-span-4">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">Julien Moreau</h2>
                <p className="font-sans text-sm text-muted-foreground">
                  Based in Paris, France<br />
                  Available for select projects
                </p>
              </div>
            </AnimatedSection>

            {/* Right Column - Bio Text */}
            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div className="space-y-6 font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  I'm an independent designer specializing in brand identity, 
                  digital product design, and visual systems. For over a decade, I've partnered 
                  with startups, agencies, and established brands to create work that is clear, 
                  functional, and expressive.
                </p>
                <p>
                  My approach is hands-on and end-to-end. I believe the best design comes from 
                  deep understanding — of the problem, the audience, and the context. I work 
                  closely with clients throughout the process, from early strategy through final 
                  delivery.
                </p>
                <p>
                  Before going independent, I led design at several startups and spent time at 
                  agencies in Paris and London. This blend of perspectives shapes how I think 
                  about design: pragmatic enough to ship, ambitious enough to matter.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="w-full h-px bg-foreground/10 mb-8" />
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-12">
              What I Do
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div 
                  key={service} 
                  className="py-4 border-b border-foreground/10"
                >
                  <p className="font-sans text-base font-medium">{service}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="w-full h-px bg-foreground/10 mb-8" />
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-12">
              Selected Clients
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              {clients.map((client) => (
                <p key={client} className="font-sans text-base text-muted-foreground py-2">
                  {client}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-8 leading-tight">
                Have a project in mind? I'm currently accepting new projects for Q2 2025.
              </h2>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 font-sans text-sm font-medium bg-background text-foreground px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Start a Conversation
                <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
