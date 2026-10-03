"use client";

import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import type { Observation } from "../animals";

const laRomeraCenter: [number, number] = [6.1198569, -75.5976892];

export function ObservationMap({ observations, className, zoom = 15 }: { observations: Observation[]; className?: string; zoom?: number }) {
  return (
    <MapContainer center={laRomeraCenter} zoom={zoom} scrollWheelZoom className={className} aria-label="Mapa de observaciones en la Reserva Ecológica La Romera">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {observations.map((observation) => (
        <CircleMarker key={observation.id} center={observation.coordinates} radius={7} pathOptions={{ color: "#f7f8f5", fillColor: "#285d3a", fillOpacity: 0.92, weight: 2 }}>
          <Tooltip direction="top" offset={[0, -6]} opacity={0.95}>{observation.location}</Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
