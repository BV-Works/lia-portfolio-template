export interface ResponsiveImage {
  publicId: string;
  sizes?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  category: "filmes" | "otros-proyectos";

  title: string;
  listingDescription: string;

  heroImage: ResponsiveImage;
  homeImage?: ResponsiveImage;
  poster: ResponsiveImage;

  synopsis: string;

  credits: {
    role: string;
    people: string;
  }[];

  screenings: string[];

  funding?: ResponsiveImage[];

  production?: ResponsiveImage[];

  links?: ProjectLink[];

  trailer?: {
    platform: "vimeo" | "youtube";
    url: string;
  };

  gallery: ResponsiveImage[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "saltar",
    category: "filmes",

    title: "Saltar",

    listingDescription: "Cortometraje documental - 18 min",

    heroImage: {
      publicId: "hero-saltar",
      sizes: "100vw",
    },

    homeImage: {
      publicId: "saltar-home1",
      sizes: "100vw",
    },

    poster: {
      publicId: "cartel-saltar",
      sizes: "(min-width: 1024px) 50vw, 100vw",
    },

    synopsis:
      "A veces saltar significa ser engullido: por el vacío, por el agua, por un campo de tierra húmeda, por la boca de piedras de un acantilado.\n\nNo es el clima, no es la luz, ¿qué hay detrás de cada salto?",

    credits: [
      {
        role: "Guión y Dirección",
        people: "Lía Lugilde",
      },
      {
        role: "Producción",
        people: "Freews, Marta F. Crestelo",
      },
      {
        role: "Jefe de producción",
        people: "Rodrigo Agüeria",
      },
      {
        role: "Ayudante de producción",
        people: "Howi Álvarez",
      },
      {
        role: "Dirección de fotografía",
        people: "Lucía C. Pan y Lía Lugilde",
      },
      {
        role: "Sonido directo",
        people: "Gabriel Granda",
      },
      {
        role: "Diseño de sonido",
        people: "Óscar de Ávila",
      },
      {
        role: "Montaje",
        people: "Leire Álvarez y Laura Piñeiro",
      },
      {
        role: "Color",
        people: "Eduardo Gugliano",
      },
    ],

    screenings: [
      "Estrenado en Festival Internacional de Cine de Gijón FICX 63",
      "Proyectado en Oriéntate Llanes",
      "Corto inaugural CortoGijón XII",
    ],

    funding: [
      {
        publicId: "funding-saltar",
        sizes: "300px",
      },
    ],

    production: [
      {
        publicId: "production-saltar",
        sizes: "300px",
      },
    ],

    links: [
      {
        label: "Reportaje TPA",
        url: "https://www.rtpa.es/noticias-sociedad/2025-11-19/Saltar,-una-pelicula-documental-dirigida-por-Lia-Lugilde-busca-reflexionar-sobre-la-alta-tasa-de-suicidios-en-Asturias_111763583758.html",
      },
      {
        label: "Entrevista CineFilm",
        url: "https://cinefilm.es/entrevista-a-lia-lugilde-por-saltar-2025-especial/",
      },
    ],

    trailer: {
      platform: "vimeo",
      url: "https://vimeo.com/1135848300?fl=pl&fe=vl",
    },

    gallery: [
      {
        publicId: "fotograma-1-saltar",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
      {
        publicId: "fotograma-2-saltar",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
    ],
  },

  {
    id: "2",
    slug: "los-trazos-que-quedan-de-ti",
    category: "filmes",

    title: "Los trazos que quedan de ti",

    listingDescription: "Cortometraje documental - 24 min",
    heroImage: {
      publicId: "hero-trazos",
      sizes: "100vw",
    },
    homeImage: {
      publicId: "trazos-home",
      sizes: "100vw",
    },
    poster: {
      publicId: "cartel-trazos",
      sizes: "(min-width: 1024px) 50vw, 100vw",
    },

    synopsis:
      "¿Se puede capturar una vida en un montón de cartas y fotografías? La existencia de Ramón, inevitablemente entrelazada con la turbulenta marcha de su país, se escondía hasta hace poco en una caja oculta entre las vigas de una panera.\n\nTres generaciones después, un miembro de la familia la descubre y empieza a construir un extraño vínculo con quien es, a todas luces, un desconocido. Los interrogantes, entre prejuicios y recuerdos olvidados, comienzan a tomar forma. Entre la memoria y la mirada personal, su figura empieza entonces a reconstruirse poco a poco.",

    credits: [
      {
        role: "Guión y Dirección",
        people: "Lía Lugilde",
      },
      {
        role: "Fotografía",
        people: "Lía Lugilde",
      },
      {
        role: "Montaje",
        people: "Lía Lugilde",
      },
      {
        role: "Diseño Sonoro",
        people: "Óscar de Ávila",
      },
      {
        role: "Diseño Gráfico",
        people: "Carlos Alfaya",
      },
    ],

    screenings: [
      "MENCIÓN ESPECIAL RTPA – Festival Internacional de Cine de Gijón FICX 61",
      "MEJOR CORTOMETRAJE DOCUMENTAL – CortoGijon 10º",
      "Cortometraje incluido en el Catálogo de distribución Laboral Cinemateca",
      "HONOURABLE MENTION for Best Short Doc – Sevilla Indie Film Festival 2024",
      "PREMIO ASTURIAS JOVEN – Cortoviedo 2024",
      "Proyectado en la sección Arraianos en Conecta Lab de Crea 2024",
      "Proyectado en FESTIVAL DE CINE BEGIRADAK 2024",
      "Proyectado en el Festival de Cine de Ribadesella",
      "Proyectado en la Cineteca Nacional de México",
      "Proyectado en la 47 Semana de Cine de Lugo",
      "Proyectado en 20 Memorimage, Festival Internacional de Cinema de Reus",
      "Proyectado en Sección oficial de Ribadedeva en corto",
      "Proyectado en XVI Muestra Audiovisual Cortos de la Polis Joven (Costa Rica)",
      "Proyectado en 10ª muestra audiovisual LA IMAGEN DE LA MEMORIA (Colombia)",
    ],

    links: [
      {
        label: "Laboral Cinemateca",
        url: "https://www.laboralcinemateca.es/archivo-de-cortos/-/asset_publisher/vncsKJpqHgRM/content/id/4087958/maximized",
      },
    ],

    trailer: {
      platform: "vimeo",
      url: "https://vimeo.com/914227692?fl=pl&fe=vl",
    },

    gallery: [
      {
        publicId: "fotograma-1-trazos",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
      {
        publicId: "fotograma-2-trazos",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
    ],
  },

  {
    id: "3",
    slug: "breves-anotaciones-sobre-una-ruptura",
    category: "filmes",

    title: "BREVES ANOTACIONES SOBRE UNA RUPTURA",

    listingDescription: "Cortometraje de ficción - 9 min",
    heroImage: {
      publicId: "hero-ruptura",
      sizes: "100vw",
    },
    homeImage: {
      publicId: "ruptura-home1",
      sizes: "100vw",
    },
    poster: {
      publicId: "cartel-ruptura",
      sizes: "(min-width: 1024px) 50vw, 100vw",
    },

    synopsis:
      "Tras una breve relación, Oliver se enfrenta a una nueva ruptura en su vida. Mientras vaga pensativo por las calles de la ciudad, maldiciendo el amor moderno, una pregunta asoma una y otra vez dentro de su cabeza: ¿por qué?",

    credits: [
      {
        role: "Dirección",
        people: "Lía Lugilde",
      },
      {
        role: "Guión",
        people: "Pelayo de las Heras, Lía Lugilde",
      },
      {
        role: "Fotografía",
        people: "Lía Lugilde",
      },
      {
        role: "Montaje",
        people: "Lía Lugilde",
      },
      {
        role: "Reparto",
        people: "Claudia Carré, Pelayo de las Heras",
      },
      {
        role: "Sonido",
        people: "Paula Morandeira",
      },
      {
        role: "Diseño de Cartel e imagen gráfica",
        people: "Carlos Alfaya",
      },
      {
        role: "Traducción y subtitulado",
        people: "Isabel Peinador",
      },
    ],

    screenings: [
      "Estrenado en el «Festival Internacional de Cine de Gijón FICX ’60»",
      "Proyectado en «Hornada de Cortos»",
      "Proyectado en CortoGijón Festival",
    ],

    trailer: {
      platform: "vimeo",
      url: "https://vimeo.com/823422231?fl=pl&fe=vl",
    },

    gallery: [
      {
        publicId: "fotograma-1-ruptura",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
      {
        publicId: "fotograma-2-ruptura",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
    ],
  },
  {
    id: "4",
    slug: "una-mujer-que-conoci-llamada-yudita",
    category: "otros-proyectos",

    title: "Una mujer que conocí llamada Yudita",

    listingDescription: "Cortometraje documental - 19 mins",
    heroImage: {
      publicId: "hero-yudita",
      sizes: "100vw",
    },

    poster: {
      publicId: "cartel-yudita",
      sizes: "(min-width: 1024px) 50vw, 100vw",
    },

    synopsis:
      "Cuando Rodrigo era niño comía en casa de su abuela, Marité esperaba hasta ver entrar a Montse, su tía, que venía del trabajo. Sin sentarse, Montse llenaba una bolsa de plástico con una barra de pan, un recipiente con comida, botellas de plástico vacías, galletas Príncipe y un ladrillo caliente envuelto en periódico. Iba a llevar la comida a alguien. Un día, decidió llevar consigo a Rodrigo a esa cabaña en el monte con una condición: no hablar.",

    credits: [
      {
        role: "Guion y Dirección",
        people: "Rodrigo Agüeria",
      },
      {
        role: "Producción",
        people: "Lía Lugilde",
      },
      {
        role: "Ayudante de dirección",
        people: "Daniel Braga",
      },
      {
        role: "Dirección de fotografía",
        people: "Pablo Casanueva",
      },
      {
        role: "Ayudante de fotografía",
        people: "Jorge Cachero",
      },
      {
        role: "Sonido directo",
        people: "Luis Gutiérrez",
      },
      {
        role: "Montaje",
        people: "Lía Lugilde",
      },
      {
        role: "Fotografía fija",
        people: "Celia Cuervo",
      },
    ],

    screenings: [
      "Estrenado en Festival Internacional de Cine de Gijón FICX 63",
      "Premio jurado en Oriéntate Llanes",
      "Proyectado en Corto Oviedo",
    ],

    links: [
      {
        label: "Entrevista CineFilm",
        url: "https://cinefilm.es/entrevista-a-rodrigo-agueria-por-una-mujer-que-conoci-llamada-yudita-2025-especial/",
      },
    ],

    gallery: [
      {
        publicId: "fotograma-1-yudita",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
      {
        publicId: "fotograma-2-yudita",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
    ],
  },

  {
    id: "5",
    slug: "soleda",
    category: "otros-proyectos",

    title: "SOLEDÁ",

    listingDescription: "Cortometraje ficción - 15 min",
    heroImage: {
      publicId: "hero-soleda",
      sizes: "100vw",
    },

    poster: {
      publicId: "cartel-soleda",
      sizes: "(min-width: 1024px) 50vw, 100vw",
    },

    synopsis:
      "Una joven ganadera vive en una aldea costera casi deshabitada, sumida en una rutina de la que no puede salir. Convive con su padre, al que le cuesta comunicarse con ella. Cuando el único vecino de la aldea se pone enfermo, el padre de la joven cuida de él dejando a su hija sola a cargo de la casa y del ganado. Con la ausencia del vecino, su perro pastor se queda solo en sus parcelas, de las que escapa buscando a su dueño. La joven y el perro se encuentran en medio de sus respectivas soledades y comienzan una relación de amistad fiel que les ayuda a ambos a la hora de afrontar su melancolía.",

    credits: [
      {
        role: "Guión y Dirección",
        people: "Howi Álvarez",
      },
      {
        role: "Producción",
        people: "Freews",
      },
      {
        role: "Asistente de producción",
        people: "Diego Torrecilla",
      },
      {
        role: "Dirección de fotografía",
        people: "Lía Lugilde",
      },
      {
        role: "Sonido directo",
        people: "Luis Gutiérrez",
      },
      {
        role: "Diseño de sonido",
        people: "Óscar de Ávila",
      },
      {
        role: "Montaje",
        people: "Miguel Santillana",
      },
      {
        role: "Color",
        people: "Eduardo Gugliano",
      },
      {
        role: "Fotografía fija",
        people: "Celia Cuervo",
      },
      {
        role: "Música",
        people: "Álex Miranda",
      },
      {
        role: "Actor principal",
        people: "Luciano Álvarez",
      },
      {
        role: "Actriz principal",
        people: "Laura Ubach",
      },
    ],

    screenings: [
      "Cortogijón",
      "Paradox Film Festival",
      "Curt-movies 2025",
      "Oriéntate, Festival de Cine de Llanes (Premio mejor cortometraje)",
      "Festival Internacional de Cine de Gijón (Premio mejor cortometraje)",
      "Mejor Dirección en el III Festival de Cine Rural y Montaña de Cervera de Pisuerga",
      "Festival Internacional de Cine y Medio Ambiente Sidi Wassay-Massa",
    ],

    gallery: [
      {
        publicId: "fotograma-1-soleda",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
      {
        publicId: "fotograma-2-soleda",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
    ],
  },

  {
    id: "6",
    slug: "in-migracion",
    category: "otros-proyectos",

    title: "IN-MIGRACIÓN",

    listingDescription: "Cabecera para el festival MUSOC edición 2025.",
    heroImage: {
      publicId: "hero-inmigracion",
      sizes: "100vw",
    },

    poster: {
      publicId: "cartel-inmigracion",
      sizes: "(min-width: 1024px) 50vw, 100vw",
    },

    synopsis:
      "Al hablar de inmigración, el matiz de un prefijo ya determina la forma que tenemos de relacionarnos con esta realidad. Poner un in- significa ver esta tierra que clamamos como nuestra como la prometida, el final, un lugar donde llegar, en el que otras personas se introducen. Al poner un in- borramos el significado de la palabra que viene después: el motivo de la salida, el viaje, el posible deseo de volver, adaptarse a una nueva realidad que conlleva migrar. Ninguna de las personas que hemos trabajado en esta pieza conocemos la experiencia que supone. Al igual que la programación de MUSOC, nos guiamos por un compromiso y, en este caso, por un sentimiento común a todo humano: la empatía.\n\nLa metáfora del pájaro para la migración no es nueva; sin embargo, nos hemos querido centrar en la parte sensorial de la llegada a otra tierra. Las huellas de ese viaje no quedan esculpidas en la arena, que ha visto millones de pasos sin saber el motivo de quienes los daban. Con la misma indolencia, el mar borra esas huellas.\n\nEl camino se ha hecho, pero solo queda en la memoria de quienes lo realizan. Nosotros somos espectadores empáticos de algo que se nos escapa.\n\nEs el sonido quien nos acerca a esa realidad angustiosa, asfixiante, la ansiedad continua de encontrarse ante un mundo diferente va creciendo hasta hacerse ensordecedor.\n\nLo que otorga algo de calma es la concepción de un hogar: el dejado, el deseado o el que se habita en ese momento.\n\nPor ello, como creadores hemos podido concebir el final de la pieza desde el entendimiento de que lo que se desea, por encima de todo: un hogar en forma de una casa para pájaros. El que sea para cada uno de los pájaros que una vez pasaron por ella o la han soñado.",

    credits: [
      {
        role: "Dirección y Montaje",
        people: "Lía Lugilde",
      },
      {
        role: "Guión",
        people: "Rodrigo Agüeria y Lía Lugilde",
      },
      {
        role: "Diseño sonoro",
        people: "Gabriel Granda",
      },
      {
        role: "Grafismo",
        people: "Carlos Alfaya",
      },
    ],

    screenings: [],

    links: [
      {
        label: "MUSOC Asturias",
        url: "https://musocasturies.org/",
      },
    ],

    trailer: {
      platform: "vimeo",
      url: "https://vimeo.com/1047459806?fl=pl&fe=vl",
    },

    gallery: [
      {
        publicId: "fotograma-1-inmigracion",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
      {
        publicId: "fotograma-2-inmigracion",
        sizes: "(min-width: 768px) 50vw, 100vw",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (
  category: Project["category"],
): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug,
  );

  if (currentIndex === -1) return undefined;

  return projects[(currentIndex + 1) % projects.length];
};

export const getPreviousProject = (
  currentSlug: string,
): Project | undefined => {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug,
  );

  if (currentIndex === -1) return undefined;

  return projects[(currentIndex - 1 + projects.length) % projects.length];
};

// export interface Project {
//   id: string;
//   slug: string;
//   title: string;
//   description: string;
//   tags: string[];
//   image: string;
//   heroImage: string;
//   color: string;
//   industry: string;
//   role: string;
//   services: string[];
//   intro: string;
//   sections: {
//     title: string;
//     content: string;
//     image?: string;
//   }[];
//   gallery: string[];
// }

// export const projects: Project[] = [
//   {
//     id: '1',
//     slug: 'procreate-palm',
//     title: 'Procreate Palm',
//     description: 'Digital illustration series exploring retro aesthetics',
//     tags: ['Illustration', 'Digital Art', 'Procreate'],
//     image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80',
//     heroImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1920&q=80',
//     color: '#00CED1',
//     industry: 'Digital Art',
//     role: 'Illustrator',
//     services: ['Digital Illustration', 'Art Direction', 'Visual Design'],
//     intro: 'A vibrant digital illustration series created in Procreate, exploring 80s synthwave aesthetics with bold colors and nostalgic palm tree motifs.',
//     sections: [
//       {
//         title: 'The Concept',
//         content: 'This series draws inspiration from the retro-futuristic aesthetics of the 1980s, combining neon colors with tropical elements to create a distinctive visual language that feels both nostalgic and contemporary.',
//         image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80'
//       }
//     ],
//     gallery: [
//       'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80',
//       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
//       'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80'
//     ]
//   },
//   {
//     id: '2',
//     slug: 'varoom-magazine',
//     title: 'Varoom Magazine',
//     description: 'Editorial design for illustration publication',
//     tags: ['Editorial', 'Print Design', 'Art Direction'],
//     image: 'https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?w=1200&q=80',
//     heroImage: 'https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?w=1920&q=80',
//     color: '#FF8C00',
//     industry: 'Publishing',
//     role: 'Art Director',
//     services: ['Editorial Design', 'Layout Design', 'Typography', 'Print Production'],
//     intro: 'Complete editorial redesign for Varoom, a leading illustration magazine. The new design system brings a fresh, contemporary feel while honoring the publication\'s artistic heritage.',
//     sections: [
//       {
//         title: 'The Approach',
//         content: 'Working closely with the editorial team, we developed a flexible grid system that allows each issue to feel unique while maintaining brand consistency. Bold typography choices and generous white space let the featured artwork breathe.',
//         image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80'
//       }
//     ],
//     gallery: [
//       'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80',
//       'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
//       'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80'
//     ]
//   },
//   {
//     id: '3',
//     slug: 'fluid-forms',
//     title: 'Fluid Forms',
//     description: 'Abstract art collection with fluid dynamics',
//     tags: ['Abstract', 'Generative Art', 'Visual Design'],
//     image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80',
//     heroImage: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1920&q=80',
//     color: '#FF1493',
//     industry: 'Fine Art',
//     role: 'Artist',
//     services: ['Generative Art', 'Visual Design', 'Art Direction'],
//     intro: 'An exploration of fluid dynamics and color interaction through digital art. Each piece captures the organic beauty of liquids in motion, frozen in time.',
//     sections: [
//       {
//         title: 'The Process',
//         content: 'Using a combination of photography and digital manipulation, these pieces explore the unpredictable beauty of fluid interactions. The vibrant color palette creates a sense of energy and movement.',
//         image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80'
//       }
//     ],
//     gallery: [
//       'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80',
//       'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
//       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80'
//     ]
//   },
//   {
//     id: '4',
//     slug: 'cosmic-landscapes',
//     title: 'Cosmic Landscapes',
//     description: '3D rendered surreal planetary environments',
//     tags: ['3D Art', 'Cinema 4D', 'Surrealism'],
//     image: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=1200&q=80',
//     heroImage: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=1920&q=80',
//     color: '#8B0000',
//     industry: '3D Art',
//     role: '3D Artist',
//     services: ['3D Modeling', 'Texturing', 'Lighting', 'Rendering'],
//     intro: 'A series of surreal 3D landscapes exploring alien worlds and cosmic environments. Each piece invites viewers to imagine life beyond our planet.',
//     sections: [
//       {
//         title: 'World Building',
//         content: 'Created in Cinema 4D with Octane Render, these landscapes combine organic forms with otherworldly color palettes. The goal was to create environments that feel both familiar and completely alien.',
//         image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80'
//       }
//     ],
//     gallery: [
//       'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80',
//       'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
//       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
//     ]
//   },
//   {
//     id: '5',
//     slug: 'chrome-david',
//     title: 'Chrome David',
//     description: 'Neo-classical sculpture reimagined in chrome',
//     tags: ['3D Art', 'Sculpture', 'Digital Art'],
//     image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80',
//     heroImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1920&q=80',
//     color: '#0A0A2E',
//     industry: 'Digital Sculpture',
//     role: '3D Artist',
//     services: ['3D Sculpting', 'Material Design', 'Lighting', 'Post-Production'],
//     intro: 'A contemporary reinterpretation of classical sculpture through digital media. The iconic David bust is transformed with iridescent chrome materials and dramatic lighting.',
//     sections: [
//       {
//         title: 'Modern Classics',
//         content: 'By applying contemporary materials and lighting techniques to classical forms, this project bridges the gap between ancient artistry and modern digital capabilities. The chrome finish creates mesmerizing color shifts that change with viewing angle.',
//         image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80'
//       }
//     ],
//     gallery: [
//       'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80',
//       'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80',
//       'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80'
//     ]
//   },
//   {
//     id: '6',
//     slug: 'feline-studies',
//     title: 'Feline Studies',
//     description: 'Digital portrait illustrations of cats',
//     tags: ['Illustration', 'Procreate', 'Portraits'],
//     image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&q=80',
//     heroImage: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1920&q=80',
//     color: '#2F4F4F',
//     industry: 'Illustration',
//     role: 'Illustrator',
//     services: ['Digital Illustration', 'Portrait Art', 'Pet Portraits'],
//     intro: 'A collection of digital cat portraits created in Procreate on iPad Pro. Each illustration captures the unique personality and character of its feline subject.',
//     sections: [
//       {
//         title: 'Capturing Character',
//         content: 'Working from photo references, each portrait goes through multiple stages of refinement to capture not just the physical likeness but the personality of each cat. The minimalist background puts full focus on the subject.',
//         image: 'https://images.unsplash.com/photo-1561883088-039e53143d73?w=1200&q=80'
//       }
//     ],
//     gallery: [
//       'https://images.unsplash.com/photo-1561883088-039e53143d73?w=1200&q=80',
//       'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80',
//       'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80'
//     ]
//   }
// ];
