import { notFound } from "next/navigation";
import { getAnimal } from "@/features/animals/animals";

export default async function ObservationsPage({ params }: PageProps<"/[animalSlug]/observaciones">) {
  const { animalSlug } = await params;
  const animal = getAnimal(animalSlug);
  if (!animal) notFound();

  return (
    <section className="mx-auto max-w-5xl px-5 py-5 sm:px-8 sm:py-14">
      <div className="mb-3 flex items-center justify-between sm:mb-6"><p className="hidden text-xs text-[#66806e] sm:block">Registros compartidos por la comunidad</p><p className="ml-auto text-[10px] font-medium uppercase tracking-[0.13em] text-[#66806e]">Más recientes</p></div>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-1.5">
        {animal.observations.map((observation, index) => (
          <article key={observation.id} className={`group relative overflow-hidden rounded-md bg-[#dae5da] ${index === 0 ? "col-span-2 aspect-[4/3] sm:col-span-1 sm:aspect-square" : "aspect-square"}`}>
            <div role="img" aria-label={`Observación de ${animal.commonName} en ${observation.location}`} className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${observation.image}')` }} />
            <div className="absolute inset-0 bg-[#173d26]/0 transition-colors group-hover:bg-[#173d26]/20" />
            {observation.contributorType === "institutional" ? <span title="Registro institucional" className="absolute bottom-2 left-2 inline-flex max-w-[calc(100%-1rem)] items-center gap-1.5 rounded-full bg-[#f2f7f0]/90 px-2.5 py-1 text-[8px] font-semibold text-[#234a31] shadow-sm backdrop-blur-sm"><span className="truncate">Alcaldía de Sabaneta</span><span role="img" aria-label="Logo de la Alcaldía de Sabaneta" className="size-4 shrink-0 rounded-full border border-[#c7d9c8] bg-white bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://www.sabaneta.gov.co/themes/img/17496572236363.png')" }} /></span> : <span className="absolute bottom-2 left-2 inline-flex max-w-[calc(100%-1rem)] items-center gap-1.5 rounded-full bg-[#102a1a]/70 py-1 pl-1 pr-2 text-[9px] font-medium text-white backdrop-blur-sm"><span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#d7e8d8] text-[7px] font-semibold text-[#214a2e]">{observation.observer.slice(1, 3).toUpperCase()}</span><span className="truncate">{observation.observer}</span></span>}
          </article>
        ))}
      </div>
    </section>
  );
}
