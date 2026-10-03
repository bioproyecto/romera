"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Animal } from "../animals";

const tabs = [
  { label: "Observaciones", segment: "" },
  { label: "Mapa", segment: "/mapa" },
  { label: "Acerca de", segment: "/acerca-de" },
];

export function AnimalProfileHeader({ animal }: { animal: Animal }) {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#dce6dd]">
      <div className="mx-auto max-w-5xl px-5 pb-0 pt-9 sm:px-8 sm:pt-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div
            role="img"
            aria-label={animal.commonName}
            className="size-24 shrink-0 rounded-full border-[3px] border-[#e0ebdf] bg-cover bg-center p-1 sm:size-32"
            style={{ backgroundImage: `url('${animal.coverImage}')` }}
          >
            <div className="size-full rounded-full border border-white/70" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 className="font-serif text-4xl tracking-[-0.055em] text-[#193b2a] sm:text-5xl"><em className="font-normal">{animal.scientificName}</em></h1>
              <span className="rounded-full bg-[#dcecdf] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.13em] text-[#376145]">Perfil de especie</span>
            </div>
            <p className="mt-1.5 text-sm text-[#52705e]">{animal.commonName} · {animal.classification}</p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#3f5e4b]">{animal.description}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 border-y border-[#dce6dd] py-4 sm:max-w-lg">
          <div><p className="text-xl font-medium tracking-[-0.05em]">{animal.observationsCount}</p><p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#708a77]">Observaciones</p></div>
          <div><p className="text-xl font-medium tracking-[-0.05em]">{animal.observersCount}</p><p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#708a77]">Observadores</p></div>
          <div><p className="text-xl font-medium tracking-[-0.05em]">{animal.areasCount}</p><p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#708a77]">Zonas</p></div>
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <nav aria-label="Secciones del perfil" className="flex gap-5 overflow-x-auto text-sm font-medium sm:gap-8">
            {tabs.map((tab) => {
              const href = `/${animal.slug}${tab.segment}`;
              const isActive = pathname === href;
              return <Link key={tab.label} href={href} className={`border-b-2 pb-4 transition-colors ${isActive ? "border-[#193b2a] text-[#193b2a]" : "border-transparent text-[#6b8372] hover:text-[#193b2a]"}`}>{tab.label}</Link>;
            })}
          </nav>
          <span className="hidden shrink-0 rounded-full border border-[#d0dfd1] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.13em] text-[#467254] sm:block">{animal.conservationStatus} · {animal.statusDetail}</span>
        </div>
      </div>
    </header>
  );
}
