"use client";

import dynamic from "next/dynamic";
import type { Observation } from "../animals";

const ObservationMap = dynamic(() => import("./observation-map").then((module) => module.ObservationMap), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-[#dfeade]" />,
});

export function ObservationMapPreview({ observations, className, zoom }: { observations: Observation[]; className?: string; zoom?: number }) {
  return <ObservationMap observations={observations} className={className} zoom={zoom} />;
}
