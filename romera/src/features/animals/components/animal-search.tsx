"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { getAllObserverObservations, getObserver } from "../../observers/observers";
import { getAnimals } from "../animals";

type SearchResult = {
  id: string;
  slug?: string;
  commonName: string;
  scientificName: string;
  classification: string;
  image: string;
  location: string;
  observerSlug: string;
  isMock?: boolean;
};

const catalog: SearchResult[] = [
  ...getAnimals().map((animal) => ({
    id: `featured-${animal.slug}`,
    slug: animal.slug,
    commonName: animal.commonName,
    scientificName: animal.scientificName,
    classification: animal.classification,
    image: animal.coverImage,
    location: animal.observations[0].location,
    observerSlug: "daniel-marquez",
  })),
  ...getAllObserverObservations().map((observation) => ({ ...observation, observerSlug: observation.observerSlug, isMock: true })),
];

const locations = [...new Set(catalog.map((animal) => animal.location))].sort();

export function AnimalSearch() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase());
  const results = catalog.filter((animal) => {
    const searchable = [animal.commonName, animal.scientificName, animal.classification].join(" ").toLocaleLowerCase();
    return (!deferredQuery || searchable.includes(deferredQuery)) && (!location || animal.location === location);
  });

  return (
    <div className="mx-auto max-w-5xl px-5 pb-12 pt-3 sm:px-8 sm:pb-16 sm:pt-8">
      <section aria-label="Buscar observaciones" className="flex items-center gap-3 border-b border-[#d8e3d9] pb-4">
        <div className="flex min-w-0 flex-1 items-center text-[#285d3a]">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px] shrink-0"><circle cx="10.8" cy="10.8" r="5.8" stroke="currentColor" strokeWidth="1.7" /><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          <label className="sr-only" htmlFor="species-search">Buscar especie</label>
          <input id="species-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar especie" className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm text-[#193b2a] outline-none placeholder:text-[#8ba08f]" />
        </div>
        <div className="flex shrink-0 items-center border-l border-[#d8e3d9] pl-3 text-[#58715f] sm:pl-4">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4"><path d="M12 20s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.7" /></svg>
          <label className="sr-only" htmlFor="location-search">Filtrar por ubicación</label>
          <select id="location-search" value={location} onChange={(event) => setLocation(event.target.value)} className="h-10 max-w-28 bg-transparent pl-2 text-xs text-[#31573d] outline-none sm:max-w-56 sm:text-sm">
            <option value="">Ubicación</option>
            {locations.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
      </section>

      {results.length ? <div className="mt-5 grid grid-cols-2 gap-1.5 sm:mt-7 sm:grid-cols-3">{results.map((animal, index) => {
        const observer = getObserver(animal.observerSlug)!;
        return <article key={animal.id} className={`group relative overflow-hidden rounded-md bg-[#dae5da] ${index === 0 ? "col-span-2 aspect-[4/3] sm:col-span-1 sm:aspect-square" : "aspect-square"}`}><div role="img" aria-label={`${animal.commonName} en ${animal.location}`} className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${animal.image}')` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#102a1a]/75 via-[#102a1a]/5 to-transparent" /><div className="absolute inset-x-2 bottom-2 flex items-end justify-between gap-2"><div className="min-w-0">{animal.slug ? <Link href={`/${animal.slug}`} className="block truncate text-xs font-semibold text-white hover:underline sm:text-sm">{animal.commonName}</Link> : <p className="truncate text-xs font-semibold text-white sm:text-sm">{animal.commonName}</p>}<p className="mt-0.5 truncate text-[9px] text-white/75">{animal.location}</p></div>{animal.isMock && <span className="shrink-0 rounded-full bg-white/15 px-1.5 py-0.5 text-[7px] font-medium uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm">Muestra</span>}</div>{observer.hasProfile ? <Link href={`/u/${observer.slug}`} aria-label={`Ver perfil de ${observer.name}`} className="absolute left-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-[#102a1a]/65 py-1 pl-1 pr-2 text-[8px] font-medium text-white backdrop-blur-sm"><span role="img" aria-label={`Retrato de ${observer.name}`} className="size-4 rounded-full border border-white/70 bg-cover bg-center" style={{ backgroundImage: `url('${observer.avatar}')` }} /><span className="max-w-20 truncate">{observer.handle}</span></Link> : <span className="absolute left-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-[#102a1a]/65 py-1 pl-1 pr-2 text-[8px] font-medium text-white backdrop-blur-sm"><span role="img" aria-label={`Retrato de ${observer.name}`} className="size-4 rounded-full border border-white/70 bg-cover bg-center" style={{ backgroundImage: `url('${observer.avatar}')` }} /><span className="max-w-20 truncate">{observer.handle}</span></span>}</article>;
      })}</div> : <div className="py-20 text-center"><p className="font-serif text-2xl tracking-[-0.04em] text-[#31573d]">No hay coincidencias.</p><button type="button" onClick={() => { setQuery(""); setLocation(""); }} className="mt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#285d3a]">Ver todos los registros</button></div>}
    </div>
  );
}
