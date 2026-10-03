"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Animal } from "../animals";

const tabs = [
  { label: "Observaciones", segment: "" },
  { label: "Mapa", segment: "/mapa" },
  { label: "Acerca de", segment: "/acerca-de" },
];

const conservationStyles = {
  "not-threatened": "border-[#c9dfcd] bg-[#e5f0e6] text-[#356242]",
  "near-threatened": "border-[#d8d8ad] bg-[#f0efd8] text-[#65612b]",
  vulnerable: "border-[#dfc28e] bg-[#f5e5c6] text-[#7b5421]",
  endangered: "border-[#ddb29e] bg-[#f2d5ca] text-[#873f2c]",
  "critically-endangered": "border-[#cf948b] bg-[#e8bdb7] text-[#762d2a]",
};

export function AnimalProfileHeader({ animal }: { animal: Animal }) {
  const pathname = usePathname();
  const [isSaved, setIsSaved] = useState(false);
  const handle = `@${animal.scientificName.toLowerCase().replace(" ", ".")}`;
  const conservationStyle = conservationStyles[animal.conservationLevel];

  return (
    <header>
      <div className="mx-auto max-w-5xl px-5 pb-0 pt-5 sm:px-8 sm:pt-14">
        <div className="grid grid-cols-[88px_1fr] gap-x-5 sm:grid-cols-[150px_1fr] sm:gap-x-11">
          <div className="pt-1 sm:row-span-3 sm:pt-0">
            <div
              role="img"
              aria-label={animal.commonName}
              className="size-[88px] rounded-full border-2 border-[#d3e3d4] bg-cover bg-center p-1 sm:size-[150px]"
              style={{ backgroundImage: `url('${animal.coverImage}')` }}
            >
              <div className="size-full rounded-full border border-white/70" />
            </div>
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
            <h1 className="text-xl font-medium tracking-[-0.04em] text-[#193b2a] sm:text-2xl">{handle}</h1>
            <span title={animal.statusDetail} className={`rounded-full border px-2 py-1 text-[9px] font-medium uppercase tracking-[0.11em] ${conservationStyle}`}>{animal.conservationStatus}</span>
          </div>
          <div className="col-span-2 mt-4 flex gap-2 sm:col-span-1 sm:col-start-2">
            <button type="button" aria-label={`Subir una observación de ${animal.commonName}`} className="min-w-0 flex-1 rounded-md bg-[#285d3a] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e4b2f] sm:flex-none sm:py-1.5 sm:text-xs">+ Subir observación</button>
            <button type="button" aria-label={isSaved ? `Quitar ${animal.commonName} de especies guardadas` : `Guardar ${animal.commonName}`} aria-pressed={isSaved} onClick={() => setIsSaved(!isSaved)} className={`grid size-10 shrink-0 place-items-center rounded-md border transition-colors sm:size-8 ${isSaved ? "border-[#285d3a] bg-[#285d3a] text-white" : "border-[#bdd1c0] bg-transparent text-[#285d3a] hover:bg-[#e6efe6]"}`}>
              <svg viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} aria-hidden="true" className="size-[17px]"><path d="M6.5 4.5h11v15l-5.5-3.7-5.5 3.7v-15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <div className="col-span-2 mt-6 grid grid-cols-3 sm:col-span-1 sm:col-start-2 sm:mt-6 sm:max-w-md">
            <div className="text-center sm:text-left"><p className="text-base font-semibold tracking-[-0.04em]">{animal.observationsCount}</p><p className="mt-0.5 text-[10px] text-[#69816f] sm:inline sm:pl-1">observaciones</p></div>
            <div className="text-center sm:text-left"><p className="text-base font-semibold tracking-[-0.04em]">{animal.observersCount}</p><p className="mt-0.5 text-[10px] text-[#69816f] sm:inline sm:pl-1">observadores</p></div>
            <div className="text-center sm:text-left"><p className="text-base font-semibold tracking-[-0.04em]">{animal.areasCount}</p><p className="mt-0.5 text-[10px] text-[#69816f] sm:inline sm:pl-1">zonas</p></div>
          </div>
          <div className="col-span-2 mt-4 hidden sm:col-span-1 sm:col-start-2 sm:mt-5 sm:block">
            <h2 className="text-sm font-semibold text-[#234a31]"><em className="font-serif font-normal">{animal.scientificName}</em> · {animal.commonName}</h2>
            <p className="mt-1 text-xs font-medium text-[#5b7662]">{animal.classification}</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#3f5e4b]">{animal.description}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center sm:mt-8">
          <nav aria-label="Secciones del perfil" className="flex w-full justify-around text-[10px] font-medium uppercase tracking-[0.12em] sm:w-auto sm:gap-10">
            {tabs.map((tab) => {
              const href = `/${animal.slug}${tab.segment}`;
              const isActive = pathname === href;
              return <Link key={tab.label} href={href} className={`border-b-2 px-1 pb-3 transition-colors ${isActive ? "border-[#193b2a] text-[#193b2a]" : "border-transparent text-[#6b8372] hover:text-[#193b2a]"}`}>{tab.label}</Link>;
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
