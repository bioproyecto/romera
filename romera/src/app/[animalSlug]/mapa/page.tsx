import { notFound } from "next/navigation";
import { getAnimal } from "@/features/animals/animals";

const points = ["left-[22%] top-[30%]", "left-[36%] top-[47%]", "left-[49%] top-[37%]", "left-[61%] top-[56%]", "left-[72%] top-[40%]", "left-[81%] top-[62%]"];

export default async function MapPage({ params }: PageProps<"/[animalSlug]/mapa">) {
  const { animalSlug } = await params;
  const animal = getAnimal(animalSlug);
  if (!animal) notFound();

  return <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14"><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Registros protegidos</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.045em]">Mapa de observaciones</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#58715f]">Mostramos áreas aproximadas para cuidar a la especie y los ecosistemas donde habita.</p><div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-[#d5e2d6] bg-[#dfeade]"><div className="absolute inset-0 opacity-50 [background-image:linear-gradient(#b9d0bc_1px,transparent_1px),linear-gradient(90deg,#b9d0bc_1px,transparent_1px)] [background-size:46px_46px]" />{points.map((position) => <span key={position} className={`absolute ${position} grid size-8 place-items-center rounded-full border border-white/70 bg-[#326a45]/85 shadow-sm`}><span className="size-2 rounded-full bg-white" /></span>)}<p className="absolute bottom-4 left-4 rounded-full bg-[#f8faf6]/90 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#476952]">{animal.areasCount} zonas registradas</p></div></section>;
}
