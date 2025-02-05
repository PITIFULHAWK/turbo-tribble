"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google?: typeof google; // Use `typeof google` for better type support
    initMap?: () => void;
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && window.google) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 40.7128, lng: -74.006 },
          zoom: 8,
        });
      }
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      window.initMap = initMap;
    } else {
      initMap();
    }

    return () => {
      delete window.initMap;
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full rounded-lg shadow-md" />;
}
