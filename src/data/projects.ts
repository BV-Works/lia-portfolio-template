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

export const getProjectBySlug = (
  slug: string,
  category?: Project["category"],
): Project | undefined => {
  return projects.find(
    (project) =>
      project.slug === slug && (!category || project.category === category),
  );
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
