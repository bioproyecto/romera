import { notFound } from "next/navigation";
import { getAnimal } from "@/features/animals/animals";
import { ObservationMapPreview } from "@/features/animals/components/observation-map-preview";

export default async function MapPage({ params }: PageProps<"/[animalSlug]/mapa">) {
  const { animalSlug } = await params;
  const animal = getAnimal(animalSlug);
  if (!animal) notFound();

  return <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14"><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#718b78]">Registros protegidos</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.045em]">Mapa de observaciones</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#58715f]">Los registros se muestran en áreas aproximadas de la Reserva Ecológica La Romera para proteger a la especie y sus zonas de anidación.</p><div className="relative mt-8 h-[420px] overflow-hidden rounded-2xl border border-[#d5e2d6] sm:h-[540px]"><ObservationMapPreview observations={animal.observations} className="h-full w-full" /></div><p className="mt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#708a77]">{animal.areasCount} zonas registradas · ubicaciones aproximadas</p></section>;
}
