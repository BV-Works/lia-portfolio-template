import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  variant?: 'full' | 'half';
  index?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image, 
  slug, 
  variant = 'half',
  index = 0 
}: ProjectCardProps) => {
  return (
    <AnimatedSection 
      delay={index * 0.1} 
      className={variant === 'full' ? 'col-span-1 md:col-span-2' : 'col-span-1'}
    >
      <Link to={`/work/${slug}`} className="group block">
        {/* Image Container */}
        <div className="image-reveal aspect-[4/3] bg-muted mb-6 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          {/* Title - Bold */}
          <h3 className="font-sans text-base md:text-lg font-semibold text-foreground group-hover:opacity-60 transition-opacity duration-300">
            {title}
          </h3>
          
          {/* Description - Regular weight, muted */}
          <p className="font-sans text-sm md:text-base text-muted-foreground">
            {description}
          </p>
          
          {/* Tags - Outline style, inline */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block px-3 py-1 text-xs font-sans border border-foreground/15 rounded-full text-muted-foreground hover:border-foreground/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default ProjectCard;
