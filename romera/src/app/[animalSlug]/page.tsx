import { notFound } from "next/navigation";
import { getAnimal } from "@/features/animals/animals";

export default async function AnimalPage({ params }: PageProps<"/[animalSlug]">) {
  const { animalSlug } = await params;
  const animal = getAnimal(animalSlug);
  if (!animal) notFound();

  return (
    <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="mb-7 flex items-end justify-between"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Aportadas por la comunidad</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.045em]">Observaciones recientes</h2></div><p className="text-xs text-[#66806e]">{animal.observationsCount} registros</p></div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {animal.observations.map((observation) => (
          <article key={observation.id} className="group relative aspect-square overflow-hidden rounded-xl bg-[#dae5da]">
            <div role="img" aria-label={`Observación de ${animal.commonName} en ${observation.location}`} className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${observation.image}')` }} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#11291a]/80 via-[#11291a]/15 to-transparent px-3 pb-3 pt-12 text-white"><p className="text-xs font-medium">{observation.location}</p><p className="mt-0.5 text-[10px] text-white/75">{observation.observer} · {observation.observedAt}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
