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
            {animal.observations.map((observation) => <div key={observation.id} role="img" aria-label={`Observación de ${animal.commonName} en ${observation.location}`} className="aspect-square rounded-md bg-cover bg-center" style={{ backgroundImage: `url('${observation.image}')` }} />)}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f7f8f5] via-[#f7f8f5]/45 to-transparent" />
          <Link href={`/${animal.slug}/observaciones`} className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#285d3a] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-[#1e4b2f]">{animal.observationsCount} observaciones</Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Territorio</p><h2 className="mt-1 font-serif text-2xl tracking-[-0.045em] sm:text-3xl">Dónde se ha visto</h2></div><Link href={`/${animal.slug}/mapa`} className="shrink-0 text-[10px] font-medium uppercase tracking-[0.13em] text-[#285d3a] transition-colors hover:text-[#193b2a]">Ver mapa</Link></div>
        <div className="relative aspect-[16/8] overflow-hidden rounded-lg border border-[#d5e2d6] sm:aspect-[16/6]"><ObservationMapPreview observations={animal.observations} className="h-full w-full" zoom={16} /><Link href={`/${animal.slug}/mapa`} className="absolute bottom-3 left-3 z-[500] rounded-full bg-[#f8faf6]/90 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#476952] transition-colors hover:bg-white">{animal.areasCount} zonas registradas · ver mapa</Link></div>
      </section>

      <section className="border-y border-[#d8e3d9] py-7 sm:py-9">
        <div className="flex items-end justify-between gap-4"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Ficha de especie</p><h2 className="mt-1 font-serif text-2xl tracking-[-0.045em] sm:text-3xl">El {animal.commonName.toLowerCase()}</h2></div><Link href={`/${animal.slug}/acerca-de`} className="shrink-0 text-[10px] font-medium uppercase tracking-[0.13em] text-[#285d3a] transition-colors hover:text-[#193b2a]">Ver ficha</Link></div>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#58715f]">{animal.description}</p>
        <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2 sm:gap-8"><p><span className="block text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Hábitat</span><span className="mt-1 block leading-6 text-[#355d40]">{animal.habitat}</span></p><p><span className="block text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Distribución</span><span className="mt-1 block leading-6 text-[#355d40]">{animal.distribution}</span></p></div>
      </section>
    </div>
  );
}
