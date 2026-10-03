export type Observation = {
  id: string;
  image: string;
  observedAt: string;
  location: string;
  observer: string;
  note: string;
};

export type ProfileReview = {
  reviewer: string;
  role: string;
  organization: string;
  reviewedAt: string;
  sources: string[];
  verifiedObservations: number;
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
  observations: Observation[];
};

const animals: Record<string, Animal> = {
  "panthera-onca": {
    slug: "panthera-onca",
    scientificName: "Panthera onca",
    commonName: "Jaguar",
    classification: "Mammalia · Felidae",
    conservationStatus: "Casi amenazada",
    statusDetail: "UICN · NT",
    conservationLevel: "near-threatened",
    profileReview: {
      reviewer: "Dra. Laura Méndez",
      role: "Bióloga de conservación",
      organization: "Universidad Nacional Autónoma de México",
      reviewedAt: "03 oct 2026",
      sources: ["UICN", "CONABIO", "GBIF"],
      verifiedObservations: 94,
    },
    description: "El felino más grande de América. Su presencia es una señal de bosques sanos y conectados.",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Jaguar_head_shot-edit2.jpg",
    observationsCount: 286,
    observersCount: 74,
    areasCount: 18,
    habitat: "Selvas tropicales, humedales y bosques secos.",
    distribution: "Desde México hasta el norte de Argentina.",
    observations: [
      {
        id: "calakmul-oct-2026",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/009_Female_jaguar_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg",
        observedAt: "03 oct 2026",
        location: "Reserva de la Biosfera Calakmul",
        observer: "@mariana.r",
        note: "Hembra adulta registrada al borde de la selva alta.",
      },
      {
        id: "sian-kaan-sep-2026",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/011_Jaguar_drinking_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg",
        observedAt: "18 sep 2026",
        location: "Corredor Biológico Sian Ka'an",
        observer: "@vida.silvestre",
        note: "Registro de cámara trampa durante la madrugada.",
      },
      {
        id: "calakmul-ago-2026",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.JPG",
        observedAt: "29 ago 2026",
        location: "Reserva de la Biosfera Calakmul",
        observer: "@martin.c",
        note: "Avistamiento al amanecer, junto a un cenote.",
      },
      {
        id: "lacandon-aug-2026",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Jaguar_%28Panthera_onca_palustris%29_male_Rio_Negro_2.JPG",
        observedAt: "12 ago 2026",
        location: "Selva Lacandona",
        observer: "@ana.rios",
        note: "Rastro confirmado en sendero de monitoreo.",
      },
      {
        id: "usumacinta-jul-2026",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Jaguar_%28Panthera_onca_palustris%29_male_Three_Brothers_River_2.jpg",
        observedAt: "25 jul 2026",
        location: "Cuenca del Usumacinta",
        observer: "@sur.territorio",
        note: "Individuo fotografiado cruzando un claro del bosque.",
      },
      {
        id: "campeche-jun-2026",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/On%C3%A7a_do_Pantanal.jpg",
        observedAt: "06 jun 2026",
        location: "Campeche, México",
        observer: "@maria.campos",
        note: "Registro validado por tres observadores.",
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
