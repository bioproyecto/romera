import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimalProfileHeader } from "@/features/animals/components/animal-profile-header";
import { getAnimal, getAnimalSlugs } from "@/features/animals/animals";

export function generateStaticParams() {
  return getAnimalSlugs().map((animalSlug) => ({ animalSlug }));
}

export default async function AnimalLayout({ children, params }: LayoutProps<"/[animalSlug]">) {
  const { animalSlug } = await params;
  const animal = getAnimal(animalSlug);

  if (!animal) notFound();

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#193b2a] selection:bg-[#c7dac9]">
      <nav className="mx-auto flex max-w-5xl items-center px-5 py-4 sm:px-8 sm:py-5">
        <Link href={`/${animal.slug}`} className="text-lg font-semibold tracking-[-0.06em]">romera</Link>
      </nav>
      <AnimalProfileHeader animal={animal} />
      {children}
      <footer className="mx-auto flex max-w-5xl flex-col justify-between gap-3 px-5 py-10 text-xs text-[#708a77] sm:flex-row sm:px-8"><p>Romera · Cada observación suma a su historia.</p><p>Ubicaciones protegidas y aproximadas.</p></footer>
    </main>
  );
}
