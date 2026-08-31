import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Top Section - Links */}
      <div className="px-6 md:px-12 lg:px-16 pt-12 md:pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-3">Contact</h3>
            <a 
              href="mailto:hello@julienmoreau.design"
              className="font-sans text-sm text-background/70 hover:text-background transition-colors"
            >
              hello@julienmoreau.design
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-3">Social</h3>
            <div className="space-y-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block font-sans text-sm text-background/70 hover:text-background transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block font-sans text-sm text-background/70 hover:text-background transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Work */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-3">Work</h3>
            <a 
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-background/70 hover:text-background transition-colors"
            >
              View on Dribbble
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <div className="flex items-center border-b border-background/30 pb-2">
              <input 
                type="email" 
                placeholder="Stay up to date"
                className="bg-transparent font-sans text-sm text-background placeholder:text-background/50 outline-none flex-1"
              />
              <button className="text-background/70 hover:text-background transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Name with Back to Top Button */}
      <div className="px-6 md:px-12 lg:px-16 pt-8 md:pt-12 relative">
        <div className="flex items-end justify-between">
          <h2 
            className="font-logo font-bold text-background leading-none select-none"
            style={{
              fontSize: 'clamp(4rem, 20vw, 22rem)',
              letterSpacing: '-0.02em',
              lineHeight: '0.85',
            }}
          >
            JULIEN.
          </h2>
          
          {/* Back to Top Button - Hidden on tablet and mobile */}
          <button
            onClick={scrollToTop}
            className="hidden lg:flex mb-8 w-16 h-16 bg-background text-foreground items-center justify-center hover:bg-background/90 transition-colors shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp size={24} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs text-background/50">
          © Julien Moreau {currentYear}.
        </p>
        <p className="font-sans text-xs text-background/50">
          Website design by Julien Moreau
        </p>
      </div>
    </footer>
  );
};

export default Footer;
