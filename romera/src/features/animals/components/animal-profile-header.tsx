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
  "not-threatened": "border-[#b8d5bc] bg-[#dcecdf] text-[#285b35]",
  "near-threatened": "border-[#c8bd5d] bg-[#e7e3ad] text-[#504d16]",
  vulnerable: "border-[#d9af62] bg-[#f0d49d] text-[#71480f]",
  endangered: "border-[#d28f74] bg-[#edc0af] text-[#783522]",
  "critically-endangered": "border-[#bf706a] bg-[#dc9c96] text-[#682522]",
};

export function AnimalProfileHeader({ animal }: { animal: Animal }) {
  const pathname = usePathname();
  const [isSaved, setIsSaved] = useState(false);
  const [isCredentialsOpen, setIsCredentialsOpen] = useState(false);
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
          <div className="min-w-0 self-center sm:self-start">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h1 className="text-xl font-medium tracking-[-0.04em] text-[#193b2a] sm:text-2xl">{handle}</h1>
              <button type="button" onClick={() => setIsCredentialsOpen(true)} aria-label="Ver credenciales de la ficha" className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#285d3a] p-0 leading-none text-white transition-colors hover:bg-[#1e4b2f]">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="block size-4"><path d="m7.5 12 2.8 2.8L16.8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" /></svg>
              </button>
            </div>
            <span title={animal.statusDetail} className={`mt-2 inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border px-2.5 text-[9px] font-medium uppercase tracking-[0.1em] sm:hidden ${conservationStyle}`}>
              <span className="size-1.5 shrink-0 rounded-full bg-current" />
              <span className="truncate">{animal.conservationStatus}</span>
            </span>
          </div>
          <div className="col-span-2 mt-4 flex items-center gap-2 sm:col-span-1 sm:col-start-2">
            <button type="button" aria-label={`Subir una observación de ${animal.commonName}`} className="min-w-0 flex-1 rounded-md bg-[#285d3a] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e4b2f] sm:h-8 sm:flex-none sm:py-0 sm:text-xs">+ Subir observación</button>
            <button type="button" aria-label={isSaved ? `Quitar ${animal.commonName} de especies guardadas` : `Guardar ${animal.commonName}`} aria-pressed={isSaved} onClick={() => setIsSaved(!isSaved)} className={`grid size-10 shrink-0 place-items-center rounded-md border transition-colors sm:size-8 ${isSaved ? "border-[#285d3a] bg-[#285d3a] text-white" : "border-[#bdd1c0] bg-transparent text-[#285d3a] hover:bg-[#e6efe6]"}`}>
              <svg viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} aria-hidden="true" className="size-[17px]"><path d="M6.5 4.5h11v15l-5.5-3.7-5.5 3.7v-15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            </button>
            <span title={animal.statusDetail} className={`hidden h-8 items-center gap-1.5 rounded-full border px-2.5 text-[9px] font-medium uppercase tracking-[0.1em] sm:inline-flex sm:h-7 sm:gap-1 sm:px-2 sm:text-[8px] ${conservationStyle}`}>
              <span className="size-1.5 shrink-0 rounded-full bg-current sm:size-1" />
              <span>{animal.conservationStatus}</span>
            </span>
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

        {isCredentialsOpen && (
          <div role="dialog" aria-modal="true" aria-labelledby="credentials-title" className="fixed inset-0 z-50 grid place-items-end bg-[#102418]/40 p-3 backdrop-blur-[2px] sm:place-items-center sm:p-6">
            <div className="w-full max-w-md rounded-2xl bg-[#f8faf6] p-6 shadow-2xl sm:p-7">
              <div className="flex items-start justify-between gap-6">
                <div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#69816f]">Credenciales científicas</p><h2 id="credentials-title" className="mt-2 font-serif text-2xl tracking-[-0.04em]">Ficha revisada</h2></div>
                <button type="button" onClick={() => setIsCredentialsOpen(false)} aria-label="Cerrar credenciales" className="grid size-8 place-items-center rounded-full border border-[#d2dfd3] text-[#486b53] transition-colors hover:bg-[#e9f0e8]">×</button>
              </div>
              <div className="mt-7 border-y border-[#dce6dd] py-5"><p className="text-sm font-semibold text-[#244a31]">{animal.profileReview.reviewer}</p><p className="mt-1 text-sm leading-5 text-[#5b7562]">{animal.profileReview.role}<br />{animal.profileReview.organization}</p><p className="mt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#708a77]">Revisado el {animal.profileReview.reviewedAt}</p></div>
              <div className="mt-5 grid grid-cols-2 gap-4"><div><p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#708a77]">Fuentes</p><p className="mt-1 text-sm text-[#355d40]">{animal.profileReview.sources.join(" · ")}</p></div><div><p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#708a77]">Registros validados</p><p className="mt-1 text-sm text-[#355d40]">{animal.profileReview.verifiedObservations} observaciones</p></div></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
