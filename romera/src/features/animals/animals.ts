export type Observation = {
  id: string;
  image: string;
  observedAt: string;
  location: string;
  coordinates: [number, number];
  observer: string;
  note: string;
  contributorType?: "institutional";
};

export type ProfileReview = {
  reviewer: string;
  reviewerImage: string;
  role: string;
  organization: string;
  reviewedAt: string;
  sources: string[];
  verifiedObservations: number;
  reviewNote: string;
};

export type PublicContent = {
  title: string;
  videoId: string;
  duration: string;
};

export type Animal = {
  slug: string;
  scientificName: string;
  commonName: string;
  classification: string;
  conservationStatus: string;
  statusDetail: string;
  conservationLevel: "not-threatened" | "near-threatened" | "vulnerable" | "endangered" | "critically-endangered";
  profileReview: ProfileReview;
  description: string;
  coverImage: string;
  observationsCount: number;
  observersCount: number;
  areasCount: number;
  habitat: string;
  distribution: string;
  localPresence: string;
  identification: string;
  diet: string;
  elevation: string;
  publicContent: PublicContent[];
  observations: Observation[];
};

const animals: Record<string, Animal> = {
  "momotus-aequatorialis": {
    slug: "momotus-aequatorialis",
    scientificName: "Momotus aequatorialis",
    commonName: "Barranquero andino",
    classification: "Aves · Momotidae",
    conservationStatus: "Preocupación menor",
    statusDetail: "UICN · LC",
    conservationLevel: "not-threatened",
    profileReview: {
      reviewer: "Salomé Valencia",
      reviewerImage: "https://scontent.cdninstagram.com/v/t51.75761-19/505427357_18513268147013308_8598638172268425164_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=TniOxQ8yURoQ7kNvwHljg1b&_nc_oc=AdrDA2vgjDcu-_iy4NJwcpOGa-A1U0CpvGmzOTuXV0fW9Lbx7nlD9g-wbigCrD2Qc9M&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=MZPVKSM6KvK8Lt-7pW5ugw&_nc_ss=7b689&oh=00_AQMuYNAENwjzIYlfGceuAE_4PKNr9WQdlZcIp0PML5_rSA&oe=6AC76958",
      role: "Bióloga",
      organization: "Romera",
      reviewedAt: "03 oct 2026",
      sources: ["UICN", "eBird", "GBIF"],
      verifiedObservations: 47,
      reviewNote: "El barranquero andino es un buen indicador de los bordes de bosque conservados en La Romera.",
    },
    description: "Ave de bosque andino, de plumaje verde y cola en forma de raqueta. En La Romera suele recorrer el sotobosque y los bordes húmedos.",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Andean_motmot_%28Momotus_aequatorialis_aequatorialis%29_Las_Tangaras.jpg",
    observationsCount: 126,
    observersCount: 39,
    areasCount: 7,
    habitat: "Bosque montano húmedo, bordes de bosque y vegetación secundaria, con frecuencia cerca de quebradas.",
    distribution: "Andes desde Colombia hasta Bolivia; en Colombia habita las tres cordilleras entre 1.500 y 3.100 m.",
    localPresence: "En La Romera se observa en el sotobosque, claros y bordes húmedos del bosque, sobre todo durante las primeras horas de la mañana.",
    identification: "Corona azul brillante, antifaz negro, pecho verde oliva y una cola larga terminada en dos raquetas.",
    diet: "Insectos, otros artrópodos y frutos.",
    elevation: "1.500 a 3.100 m s. n. m.",
    publicContent: [
      {
        title: "Reserva Ecológica, La Romera",
        videoId: "4-HS-GUJoDY",
        duration: "2:41",
      },
      {
        title: "La Romera, patrimonio natural de los sabaneteños",
        videoId: "WsNnBNFs26M",
        duration: "26:09",
      },
    ],
    observations: [
      {
        id: "romera-oct-2026",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Momotus_aequatorialis_(Barranquero_coronado_-_Andean_motmot)_(30894963777).jpg",
        observedAt: "03 oct 2026",
        location: "Sendero La Romera",
        coordinates: [6.1203, -75.5972],
        observer: "@mariana.r",
        note: "Posado en un borde de bosque después de la lluvia.",
        contributorType: "institutional",
      },
      {
        id: "romera-sep-2026",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/BARRANQUERO_ANDINO_-_Momotus_aequatorialis.jpg",
        observedAt: "18 sep 2026",
        location: "Quebrada La Doctora",
        coordinates: [6.1193, -75.5981],
        observer: "@vida.silvestre",
        note: "Vocalización registrada cerca de la quebrada.",
      },
      {
        id: "romera-ago-2026",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Barranquero_Andino.jpg",
        observedAt: "29 ago 2026",
        location: "Bosque alto de La Romera",
        coordinates: [6.1209, -75.5984],
        observer: "@martin.c",
        note: "Individuo forrajeando entre árboles de borde.",
        contributorType: "institutional",
      },
      {
        id: "romera-ago-2026-2",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Barranquero_o_Momotus.jpg",
        observedAt: "12 ago 2026",
        location: "Mirador La Romera",
        coordinates: [6.1198, -75.5968],
        observer: "@ana.rios",
        note: "Observado cruzando el sotobosque al amanecer.",
      },
      {
        id: "romera-jul-2026",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Momotus_aequatorialis_(Barranquero_coronado_-_Andean_motmot)_(30894964007).jpg",
        observedAt: "25 jul 2026",
        location: "Límite oriental de La Romera",
        coordinates: [6.1188, -75.5973],
        observer: "@sur.territorio",
        note: "Registro compartido por el grupo de caminantes.",
      },
      {
        id: "romera-jun-2026",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Momotus_aequatorialis_(Barranquero_coronado_-_Andean_motmot)_(45834582331).jpg",
        observedAt: "06 jun 2026",
        location: "Sendero de la reserva",
        coordinates: [6.1201, -75.5988],
        observer: "@maria.campos",
        note: "Registro validado por tres observadores de la reserva.",
        contributorType: "institutional",
      },
    ],
  },
};

export function getAnimal(slug: string) {
  return animals[slug];
}

export function getAnimalSlugs() {
  return Object.keys(animals);
}
