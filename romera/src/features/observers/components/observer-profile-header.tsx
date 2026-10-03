"use client";

import { useState } from "react";
import type { Observer } from "../observers";

export function ObserverProfileHeader({ observer, observationsCount, speciesCount }: { observer: Observer; observationsCount: number; speciesCount: number }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const shareProfile = async () => {
    const shareData = { title: observer.name, text: `Conoce el perfil de ${observer.name} en Romera`, url: window.location.href };
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <section className="mx-auto max-w-5xl px-5 pb-7 pt-5 sm:px-8 sm:pb-10 sm:pt-10">
      <button type="button" onClick={shareProfile} aria-label={`Compartir perfil de ${observer.name}`} title="Compartir" className="fixed right-5 top-5 z-40 grid size-9 place-items-center rounded-full border border-[#bdd1c0] bg-[#f6f7f3]/95 text-[#285d3a] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#e6efe6] sm:right-8 sm:top-8"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4"><circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.7" /><circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" /><circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.7" /><path d="m8.3 10.8 7.4-4.4m-7.4 6.8 7.4 4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg></button>
      <div className="flex items-start gap-4 sm:gap-6">
        <span role="img" aria-label={`Retrato de ${observer.name}`} className="size-[72px] shrink-0 rounded-full border-2 border-[#d3e3d4] bg-cover bg-center p-1 sm:size-[96px]" style={{ backgroundImage: `url('${observer.avatar}')` }}><span className="block size-full rounded-full border border-white/70" /></span>
        <div className="min-w-0 pt-1"><p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#718b78]">Observadora</p><div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1"><h1 className="text-xl font-semibold tracking-[-0.045em] sm:text-2xl">{observer.name}</h1>{observer.role && <span className="text-sm text-[#66806e]">· {observer.role}</span>}</div><p className="mt-1 text-sm font-medium text-[#31573d]">{observer.handle}</p><button type="button" onClick={() => setIsFollowing(!isFollowing)} aria-pressed={isFollowing} className={`mt-4 rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${isFollowing ? "border border-[#bdd1c0] bg-transparent text-[#285d3a] hover:bg-[#e6efe6]" : "bg-[#285d3a] text-white hover:bg-[#1e4b2f]"}`}>{isFollowing ? "Siguiendo" : "Seguir"}</button></div>
      </div>
      <div className="mt-6 grid max-w-md grid-cols-3 border-y border-[#d8e3d9] py-4 text-center sm:ml-[120px]"><div><p className="text-base font-semibold tracking-[-0.04em]">{observationsCount}</p><p className="mt-0.5 text-[10px] text-[#69816f]">registros</p></div><div><p className="text-base font-semibold tracking-[-0.04em]">{speciesCount}</p><p className="mt-0.5 text-[10px] text-[#69816f]">especies</p></div><div><p className="text-xs font-medium text-[#31573d]">{observer.joinedAt}</p><p className="mt-1 text-[10px] text-[#69816f]">en campo</p></div></div>
      {observer.bio && <div className="mt-5 max-w-xl"><p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#718b78]">Notas de campo</p><p className="mt-2 text-sm leading-6 text-[#456650]">{observer.bio}</p></div>}
    </section>
  );
}
