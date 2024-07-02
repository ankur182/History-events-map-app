"use client";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { Icon } from "leaflet";
import dynamic from "next/dynamic";

const MapsApp = dynamic(() => import("./Components/MapsApp"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-full">
      <MapsApp />
    </main>
  );
}
