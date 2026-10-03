import { notFound } from "next/navigation";
import { getAnimal } from "@/features/animals/animals";

export default async function AboutPage({ params }: PageProps<"/[animalSlug]/acerca-de">) {
  const { animalSlug } = await params;
  const animal = getAnimal(animalSlug);
  if (!animal) notFound();

  return <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14"><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Ficha de especie</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.045em]">Acerca del {animal.commonName.toLowerCase()}</h2><p className="mt-4 max-w-xl text-sm leading-6 text-[#58715f]">{animal.description}</p><dl className="mt-9 max-w-2xl divide-y divide-[#d8e3d9] border-y border-[#d8e3d9]"><div className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]"><dt className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Nombre científico</dt><dd className="text-sm"><em>{animal.scientificName}</em></dd></div><div className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]"><dt className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Hábitat</dt><dd className="text-sm leading-6">{animal.habitat}</dd></div><div className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]"><dt className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Distribución</dt><dd className="text-sm leading-6">{animal.distribution}</dd></div><div className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]"><dt className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#708a77]">Conservación</dt><dd className="text-sm leading-6">{animal.conservationStatus} · {animal.statusDetail}</dd></div></dl></section>;
}
