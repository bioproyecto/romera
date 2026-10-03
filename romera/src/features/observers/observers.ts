export type Observer = {
  slug: string;
  handle: string;
  name: string;
  avatar: string;
  role?: string;
  bio?: string;
  joinedAt?: string;
  hasProfile?: boolean;
};

export type ObserverObservation = {
  id: string;
  commonName: string;
  scientificName: string;
  classification: string;
  image: string;
  location: string;
  observedAt: string;
  observerSlug: string;
};

const observers: Record<string, Observer> = {
  salome: {
    slug: "salome",
    handle: "@salome.valencia",
    name: "Salomé Valencia",
    avatar: "https://scontent.cdninstagram.com/v/t51.75761-19/505427357_18513268147013308_8598638172268425164_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=TniOxQ8yURoQ7kNvwHljg1b&_nc_oc=AdrDA2vgjDcu-_iy4NJwcpOGa-A1U0CpvGmzOTuXV0fW9Lbx7nlD9g-wbigCrD2Qc9M&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=MZPVKSM6KvK8Lt-7pW5ugw&_nc_ss=7b689&oh=00_AQMuYNAENwjzIYlfGceuAE_4PKNr9WQdlZcIp0PML5_rSA&oe=6AC76958",
    role: "Bióloga",
    bio: "Bióloga y observadora de La Romera.",
    joinedAt: "Desde 2026",
    hasProfile: true,
  },
  "daniel-marquez": {
    slug: "daniel-marquez",
    handle: "@daniel.marquez",
    name: "Daniel Márquez",
    avatar: "https://scontent.cdninstagram.com/v/t51.75761-19/502966757_18511705093061362_1464113692459183488_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=VCpo8ZEdu4QQ7kNvwGZYP1Y&_nc_oc=AdpG44UK3nmumKLjcJmgjwDpqhhyjQOlXuKOMXC2u-Y_OR_SAXWLhE7Z__staNUd_4o&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=65lsNxxOIeKs4WrFJPUiBw&_nc_ss=7b689&oh=00_AQOU-TIuEW0vIVeQGvJ_RW6oztZAqPexu6k4l5TKU3A0ew&oe=6AC76595",
  },
};

const observerObservations: ObserverObservation[] = [
  { id: "salome-tangara", commonName: "Tángara multicolor", scientificName: "Chlorochrysa nitidissima", classification: "Aves · Thraupidae", image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Chlorochrysa_nitidissima_175967736.jpg", location: "Bosque alto de La Romera", observedAt: "28 sep 2026", observerSlug: "salome" },
  { id: "salome-cusumbo", commonName: "Cusumbo", scientificName: "Nasua nasua", classification: "Mamíferos · Procyonidae", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/South_American_coati_%28Nasua_nasua%29.jpg", location: "Sendero La Romera", observedAt: "14 sep 2026", observerSlug: "salome" },
  { id: "salome-rana", commonName: "Rana de cristal de Antioquia", scientificName: "Centrolene antioquiense", classification: "Anfibios · Centrolenidae", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Centrolene_antioquiense.jpg", location: "Quebrada La Doctora", observedAt: "31 ago 2026", observerSlug: "salome" },
  { id: "salome-morpho", commonName: "Morpho azul", scientificName: "Morpho helenor", classification: "Insectos · Nymphalidae", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Common_Morpho_%28Morpho_helenor%29.jpg", location: "Mirador La Romera", observedAt: "19 ago 2026", observerSlug: "salome" },
];

export function getObserver(slug: string) {
  return observers[slug];
}

export function getProfileObservers() {
  return Object.values(observers).filter((observer) => observer.hasProfile);
}

export function getObserverObservations(slug: string) {
  return observerObservations.filter((observation) => observation.observerSlug === slug);
}

export function getAllObserverObservations() {
  return observerObservations;
}
