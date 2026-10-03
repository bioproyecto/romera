export type Observation = {
  id: string;
  image: string;
  observedAt: string;
  location: string;
  observer: string;
  note: string;
};

export type Animal = {
  slug: string;
  scientificName: string;
  commonName: string;
  classification: string;
  conservationStatus: string;
  statusDetail: string;
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
    description: "El felino más grande de América. Su presencia es una señal de bosques sanos y conectados.",
    coverImage: "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?auto=format&fit=crop&w=900&q=90",
    observationsCount: 286,
    observersCount: 74,
    areasCount: 18,
    habitat: "Selvas tropicales, humedales y bosques secos.",
    distribution: "Desde México hasta el norte de Argentina.",
    observations: [
      {
        id: "calakmul-oct-2026",
        image: "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?auto=format&fit=crop&w=1000&q=85",
        observedAt: "03 oct 2026",
        location: "Reserva de la Biosfera Calakmul",
        observer: "@mariana.r",
        note: "Hembra adulta registrada al borde de la selva alta.",
      },
      {
        id: "sian-kaan-sep-2026",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=85",
        observedAt: "18 sep 2026",
        location: "Corredor Biológico Sian Ka'an",
        observer: "@vida.silvestre",
        note: "Registro de cámara trampa durante la madrugada.",
      },
      {
        id: "calakmul-ago-2026",
        image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=85",
        observedAt: "29 ago 2026",
        location: "Reserva de la Biosfera Calakmul",
        observer: "@martin.c",
        note: "Avistamiento al amanecer, junto a un cenote.",
      },
      {
        id: "lacandon-aug-2026",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=85",
        observedAt: "12 ago 2026",
        location: "Selva Lacandona",
        observer: "@ana.rios",
        note: "Rastro confirmado en sendero de monitoreo.",
      },
      {
        id: "usumacinta-jul-2026",
        image: "https://images.unsplash.com/photo-1518467166778-46c7f0e11a50?auto=format&fit=crop&w=1000&q=85",
        observedAt: "25 jul 2026",
        location: "Cuenca del Usumacinta",
        observer: "@sur.territorio",
        note: "Individuo fotografiado cruzando un claro del bosque.",
      },
      {
        id: "campeche-jun-2026",
        image: "https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=1000&q=85",
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
