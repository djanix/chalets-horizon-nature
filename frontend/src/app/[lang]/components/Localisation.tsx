"use client";
import { APIProvider, Map, AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useState } from "react";

interface Map {
  id: string;
  address: string;
}

interface LocalisationProps {
  data: {
    id: string;
    description: string;
    map: Map;
  };
}


export default function Localisation({ data }: LocalisationProps) {
  const API_KEY = process.env.GOOGLE_MAP_API_KEY || '';

  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [markerLocation, setMarkerLocation] = useState({
    lat: 46.26914,
    lng: -73.75621,
  });

  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          {data.description}
        </div>
        <div className="relative flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <APIProvider apiKey={API_KEY}>
            <Map
              mapId='ADDRESS_MAP'
              style={{width: '600px', height: '600px'}}
              defaultCenter={markerLocation}
              defaultZoom={15}
              gestureHandling={'greedy'}
              disableDefaultUI={false}
            >
              <AdvancedMarker
                ref={markerRef}
                position={markerLocation}
                title={data.map.address}
                onClick={() => setInfoWindowOpen(!infoWindowOpen)}
              />

              {infoWindowOpen && (
                <InfoWindow
                  anchor={marker}
                  maxWidth={200}
                  onCloseClick={() => setInfoWindowOpen(false)}
                >
                  <b>Chalets Horizon Nature</b>
                  <br />
                  {data.map.address}
                  <br />
                  <a href={`https://www.google.com/maps/search/${data.map.address}`} className="text-[#1a73e8] hover:underline">View on Google Maps</a>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
}
