import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedSection from "./AnimatedSection";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  variant?: "full" | "half";
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  slug,
  variant = "half",
  index = 0,
}: ProjectCardProps) => {
  return (
    <AnimatedSection
      delay={index * 0.1}
      className={variant === "full" ? "col-span-1 md:col-span-2" : "col-span-1"}
    >
      <Link
        to={`/work/${slug}`}
        aria-label={`Ver proyecto ${title}`}
        className="
          group block
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-foreground
          focus-visible:ring-offset-4
        "
      >
        {/* Image Container */}
        <div className="image-reveal aspect-video bg-muted mb-6 overflow-hidden">
          <motion.img
            src={getCloudinaryUrl(image, 1536)}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-sans text-base md:text-lg font-semibold text-foreground group-hover:opacity-60 transition-opacity duration-300">
            {title}
          </h3>

          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default ProjectCard;
