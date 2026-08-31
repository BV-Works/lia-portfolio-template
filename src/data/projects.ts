export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  heroImage: string;
  color: string;
  industry: string;
  role: string;
  services: string[];
  intro: string;
  sections: {
    title: string;
    content: string;
    image?: string;
  }[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'procreate-palm',
    title: 'Procreate Palm',
    description: 'Digital illustration series exploring retro aesthetics',
    tags: ['Illustration', 'Digital Art', 'Procreate'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1920&q=80',
    color: '#00CED1',
    industry: 'Digital Art',
    role: 'Illustrator',
    services: ['Digital Illustration', 'Art Direction', 'Visual Design'],
    intro: 'A vibrant digital illustration series created in Procreate, exploring 80s synthwave aesthetics with bold colors and nostalgic palm tree motifs.',
    sections: [
      {
        title: 'The Concept',
        content: 'This series draws inspiration from the retro-futuristic aesthetics of the 1980s, combining neon colors with tropical elements to create a distinctive visual language that feels both nostalgic and contemporary.',
        image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80'
    ]
  },
  {
    id: '2',
    slug: 'varoom-magazine',
    title: 'Varoom Magazine',
    description: 'Editorial design for illustration publication',
    tags: ['Editorial', 'Print Design', 'Art Direction'],
    image: 'https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?w=1920&q=80',
    color: '#FF8C00',
    industry: 'Publishing',
    role: 'Art Director',
    services: ['Editorial Design', 'Layout Design', 'Typography', 'Print Production'],
    intro: 'Complete editorial redesign for Varoom, a leading illustration magazine. The new design system brings a fresh, contemporary feel while honoring the publication\'s artistic heritage.',
    sections: [
      {
        title: 'The Approach',
        content: 'Working closely with the editorial team, we developed a flexible grid system that allows each issue to feel unique while maintaining brand consistency. Bold typography choices and generous white space let the featured artwork breathe.',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80',
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80'
    ]
  },
  {
    id: '3',
    slug: 'fluid-forms',
    title: 'Fluid Forms',
    description: 'Abstract art collection with fluid dynamics',
    tags: ['Abstract', 'Generative Art', 'Visual Design'],
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1920&q=80',
    color: '#FF1493',
    industry: 'Fine Art',
    role: 'Artist',
    services: ['Generative Art', 'Visual Design', 'Art Direction'],
    intro: 'An exploration of fluid dynamics and color interaction through digital art. Each piece captures the organic beauty of liquids in motion, frozen in time.',
    sections: [
      {
        title: 'The Process',
        content: 'Using a combination of photography and digital manipulation, these pieces explore the unpredictable beauty of fluid interactions. The vibrant color palette creates a sense of energy and movement.',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80'
    ]
  },
  {
    id: '4',
    slug: 'cosmic-landscapes',
    title: 'Cosmic Landscapes',
    description: '3D rendered surreal planetary environments',
    tags: ['3D Art', 'Cinema 4D', 'Surrealism'],
    image: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=1920&q=80',
    color: '#8B0000',
    industry: '3D Art',
    role: '3D Artist',
    services: ['3D Modeling', 'Texturing', 'Lighting', 'Rendering'],
    intro: 'A series of surreal 3D landscapes exploring alien worlds and cosmic environments. Each piece invites viewers to imagine life beyond our planet.',
    sections: [
      {
        title: 'World Building',
        content: 'Created in Cinema 4D with Octane Render, these landscapes combine organic forms with otherworldly color palettes. The goal was to create environments that feel both familiar and completely alien.',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
    ]
  },
  {
    id: '5',
    slug: 'chrome-david',
    title: 'Chrome David',
    description: 'Neo-classical sculpture reimagined in chrome',
    tags: ['3D Art', 'Sculpture', 'Digital Art'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1920&q=80',
    color: '#0A0A2E',
    industry: 'Digital Sculpture',
    role: '3D Artist',
    services: ['3D Sculpting', 'Material Design', 'Lighting', 'Post-Production'],
    intro: 'A contemporary reinterpretation of classical sculpture through digital media. The iconic David bust is transformed with iridescent chrome materials and dramatic lighting.',
    sections: [
      {
        title: 'Modern Classics',
        content: 'By applying contemporary materials and lighting techniques to classical forms, this project bridges the gap between ancient artistry and modern digital capabilities. The chrome finish creates mesmerizing color shifts that change with viewing angle.',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80',
      'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80'
    ]
  },
  {
    id: '6',
    slug: 'feline-studies',
    title: 'Feline Studies',
    description: 'Digital portrait illustrations of cats',
    tags: ['Illustration', 'Procreate', 'Portraits'],
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1920&q=80',
    color: '#2F4F4F',
    industry: 'Illustration',
    role: 'Illustrator',
    services: ['Digital Illustration', 'Portrait Art', 'Pet Portraits'],
    intro: 'A collection of digital cat portraits created in Procreate on iPad Pro. Each illustration captures the unique personality and character of its feline subject.',
    sections: [
      {
        title: 'Capturing Character',
        content: 'Working from photo references, each portrait goes through multiple stages of refinement to capture not just the physical likeness but the personality of each cat. The minimalist background puts full focus on the subject.',
        image: 'https://images.unsplash.com/photo-1561883088-039e53143d73?w=1200&q=80'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1561883088-039e53143d73?w=1200&q=80',
      'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80'
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex + 1) % projects.length];
};

export const getPreviousProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex - 1 + projects.length) % projects.length];
};
