import Link from "next/link";
import { notFound } from "next/navigation";
import { ObserverProfileHeader } from "@/features/observers/components/observer-profile-header";
import { getObserver, getObserverObservations, getProfileObservers } from "@/features/observers/observers";

export function generateStaticParams() {
  return getProfileObservers().map((observer) => ({ observerSlug: observer.slug }));
}

export default async function ObserverPage({ params }: PageProps<"/u/[observerSlug]">) {
  const { observerSlug } = await params;
  const observer = getObserver(observerSlug);
  if (!observer?.hasProfile) notFound();
  const observations = getObserverObservations(observer.slug);
  const speciesCount = new Set(observations.map((observation) => observation.scientificName)).size;

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#193b2a] selection:bg-[#c7dac9]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link href="/momotus-aequatorialis" className="text-lg font-semibold tracking-[-0.06em]">romera</Link>
        <Link href="/explorar" className="hidden text-[10px] font-medium uppercase tracking-[0.13em] text-[#58715f] transition-colors hover:text-[#193b2a] sm:block">Explorar especies</Link>
      </nav>

      <ObserverProfileHeader observer={observer} observationsCount={observations.length} speciesCount={speciesCount} />

      <section className="mx-auto max-w-5xl border-t border-[#d8e3d9] px-5 py-5 sm:px-8 sm:py-8"><p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#718b78]">Observaciones recientes</p><div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">{observations.map((observation, index) => <article key={observation.id} className={`group relative overflow-hidden rounded-md bg-[#dae5da] ${index === 0 ? "col-span-2 aspect-[4/3] sm:col-span-1 sm:aspect-square" : "aspect-square"}`}><div role="img" aria-label={`${observation.commonName} en ${observation.location}`} className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${observation.image}')` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#102a1a]/75 via-[#102a1a]/5 to-transparent" /><span className="absolute left-2 top-2 rounded-full bg-[#102a1a]/65 px-2 py-1 text-[8px] font-medium text-white/90 backdrop-blur-sm">{observation.observedAt}</span><div className="absolute inset-x-2 bottom-2"><p className="truncate text-xs font-semibold text-white sm:text-sm">{observation.commonName}</p><p className="mt-0.5 truncate text-[9px] text-white/75">{observation.location}</p></div></article>)}</div></section>

      <footer className="mx-auto flex max-w-5xl flex-col justify-between gap-3 px-5 py-10 text-xs text-[#708a77] sm:flex-row sm:px-8"><p>Romera · Cada observación suma a su historia.</p><p>Ubicaciones protegidas y aproximadas.</p></footer>
    </main>
  );
}
