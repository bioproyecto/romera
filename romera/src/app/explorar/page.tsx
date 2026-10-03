import Link from "next/link";
import { AnimalSearch } from "@/features/animals/components/animal-search";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#193b2a] selection:bg-[#c7dac9]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link href="/momotus-aequatorialis" className="text-lg font-semibold tracking-[-0.06em]">romera</Link>
        <Link href="/momotus-aequatorialis" className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#58715f] transition-colors hover:text-[#193b2a]">Ver perfil destacado</Link>
      </nav>
      <AnimalSearch />
      <footer className="mx-auto flex max-w-5xl flex-col justify-between gap-3 px-5 py-10 text-xs text-[#708a77] sm:flex-row sm:px-8"><p>Romera · Cada observación suma a su historia.</p><p>Catálogo demostrativo de La Romera.</p></footer>
    </main>
  );
}
