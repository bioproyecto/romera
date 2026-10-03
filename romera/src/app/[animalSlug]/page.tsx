import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnimal } from "@/features/animals/animals";
import { ObservationMapPreview } from "@/features/animals/components/observation-map-preview";

export default async function AnimalPage({ params }: PageProps<"/[animalSlug]">) {
  const { animalSlug } = await params;
  const animal = getAnimal(animalSlug);
  if (!animal) notFound();

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-5 py-8 sm:space-y-16 sm:px-8 sm:py-14">
      <section>
        <div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Comunidad</p><h2 className="mt-1 font-serif text-2xl tracking-[-0.045em] sm:text-3xl">Observaciones recientes</h2></div><Link href={`/${animal.slug}/observaciones`} className="shrink-0 text-[10px] font-medium uppercase tracking-[0.13em] text-[#285d3a] transition-colors hover:text-[#193b2a]">Ver todas</Link></div>
        <div className="relative overflow-hidden rounded-lg">
          <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
            {animal.observations.map((observation) => <div key={observation.id} role="img" aria-label={`Observación de ${animal.commonName} en ${observation.location}`} className="relative aspect-square overflow-hidden rounded-md bg-cover bg-center" style={{ backgroundImage: `url('${observation.image}')` }}>{observation.contributorType === "institutional" && <span aria-label="Registro institucional de la Alcaldía de Sabaneta" className="absolute right-1.5 top-1.5 grid size-5 place-items-center rounded-full bg-[#f2f7f0]/90 text-[#285d3a] shadow-sm"><svg viewBox="0 0 24 24" aria-hidden="true" className="size-3" fill="none"><path d="M4 20h16M6.5 20v-9h11v9M4 11l8-5 8 5M9 14h1m4 0h1m-6 3h1m4 0h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="absolute -bottom-0.5 -right-0.5 grid size-2.5 place-items-center rounded-full border border-white bg-[#285d3a] text-[6px] text-white">✓</span></span>}</div>)}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f7f8f5] via-[#f7f8f5]/45 to-transparent" />
          <Link href={`/${animal.slug}/observaciones`} className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#285d3a] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-[#1e4b2f]">{animal.observationsCount} observaciones</Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Territorio</p><h2 className="mt-1 font-serif text-2xl tracking-[-0.045em] sm:text-3xl">Dónde se ha visto</h2></div><Link href={`/${animal.slug}/mapa`} className="shrink-0 text-[10px] font-medium uppercase tracking-[0.13em] text-[#285d3a] transition-colors hover:text-[#193b2a]">Ver mapa</Link></div>
        <div className="relative aspect-[16/8] overflow-hidden rounded-lg border border-[#d5e2d6] sm:aspect-[16/6]"><ObservationMapPreview observations={animal.observations} className="h-full w-full" zoom={16} /><Link href={`/${animal.slug}/mapa`} className="absolute bottom-3 left-3 z-[500] rounded-full bg-[#f8faf6]/90 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#476952] transition-colors hover:bg-white">{animal.areasCount} zonas registradas · ver mapa</Link></div>
      </section>

      <section className="rounded-xl border border-[#d8e3d9] bg-[#f1f5ef] p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Ficha de especie</p><h2 className="mt-1 font-serif text-2xl tracking-[-0.045em] sm:text-3xl">El {animal.commonName.toLowerCase()}</h2></div><Link href={`/${animal.slug}/acerca-de`} className="mt-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.13em] text-[#285d3a] transition-colors hover:text-[#193b2a]">Ver ficha</Link></div>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#58715f]">{animal.description}</p>
        <Link href="/u/salome" className="mt-5 flex items-center gap-3 rounded-lg border border-[#c9dbca] bg-[#f8faf6] p-3 text-[#355d40] transition-colors hover:bg-white"><span role="img" aria-label={`Retrato de ${animal.profileReview.reviewer}`} className="size-9 shrink-0 rounded-full bg-[#285d3a] bg-cover bg-center" style={{ backgroundImage: `url('${animal.profileReview.reviewerImage}')` }} /><p className="text-xs leading-5"><span className="font-semibold">Ficha validada por {animal.profileReview.reviewer}</span><span className="block text-[#67806d]">{animal.profileReview.role} · revisión experta</span></p></Link>
        <div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="rounded-lg bg-white/70 p-4"><p className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">En La Romera</p><p className="mt-2 text-sm leading-6 text-[#355d40]">{animal.localPresence}</p></div><div className="rounded-lg bg-white/70 p-4"><p className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Cómo reconocerlo</p><p className="mt-2 text-sm leading-6 text-[#355d40]">{animal.identification}</p></div><div className="rounded-lg bg-white/70 p-4"><p className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Alimentación</p><p className="mt-2 text-sm leading-6 text-[#355d40]">{animal.diet}</p></div></div>
      </section>
    </div>
  );
}
