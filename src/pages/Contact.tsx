import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', company: '', budget: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-4xl">
              Let's work together
            </h1>
            <p className="font-sans text-base md:text-lg text-muted-foreground mt-6 max-w-2xl">
              Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Form */}
            <AnimatedSection className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-foreground/20 font-sans text-base focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-foreground/20 font-sans text-base focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-foreground/20 font-sans text-base focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-foreground/20 font-sans text-base focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-foreground/20 font-sans text-base focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="What are you working on? What do you need help with?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 font-sans text-sm font-semibold bg-foreground text-background px-8 py-4 hover:opacity-80 transition-opacity"
                >
                  Send Message
                  <span>→</span>
                </button>
              </form>
            </AnimatedSection>

            {/* Right Column - Contact Info */}
            <AnimatedSection delay={0.1} className="lg:col-span-5">
              <div className="lg:pl-8 space-y-10">
                {/* Email */}
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-3">Email</h3>
                  <a 
                    href="mailto:hello@julienmoreau.design"
                    className="font-sans text-base text-foreground hover:opacity-60 transition-opacity"
                  >
                    hello@julienmoreau.design
                  </a>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-3">Location</h3>
                  <p className="font-sans text-base text-muted-foreground">
                    Paris, France<br />
                    Available for remote work worldwide
                  </p>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-wider mb-3">Social</h3>
                  <div className="flex flex-col gap-2">
                    {['LinkedIn', 'Twitter', 'Instagram', 'Dribbble'].map((social) => (
                      <a 
                        key={social}
                        href="#"
                        className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="pt-6 border-t border-foreground/10">
                  <p className="font-sans text-sm text-muted-foreground">
                    Currently accepting new projects for Q2 2025.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
