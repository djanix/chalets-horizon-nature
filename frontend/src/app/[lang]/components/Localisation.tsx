'use client';
// import { APIProvider, Map, AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
// import { useState } from 'react';

interface IMap {
  id: string;
  address: string;
}

interface LocalisationProps {
  data: {
    id: string;
    description: string;
    map: IMap;
  };
}

export default function Localisation({ data }: LocalisationProps) {
  const API_KEY = process.env.GOOGLE_MAP_API_KEY || '';

  // const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  // const [markerRef, marker] = useAdvancedMarkerRef();

  // const [markerLocation] = useState({
  //   lat: 46.26914,
  //   lng: -73.75621,
  // });

  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 pt-0 mx-auto lg:flex-row-reverse lg:justify-between">
        <div className="relative flex items-center justify-center lg:w-2/3">
          <div className="pt-[56.25%] w-full overflow-hidden">
            <iframe
              className="border-0 absolute top-0 left-0 right-0 bottom-0 w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${data.map.address}`}
              // src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${markerLocation.lat},${markerLocation.lng}`}>
            ></iframe>

            {/*<APIProvider apiKey={API_KEY}>*/}
            {/*  <Map*/}
            {/*    mapId='ADDRESS_MAP'*/}
            {/*    className="border-0 absolute top-0 left-0 right-0 bottom-0 w-full h-full"*/}
            {/*    defaultCenter={markerLocation}*/}
            {/*    defaultZoom={15}*/}
            {/*    gestureHandling={'greedy'}*/}
            {/*    disableDefaultUI={false}*/}
            {/*  >*/}
            {/*    <AdvancedMarker*/}
            {/*      ref={markerRef}*/}
            {/*      position={markerLocation}*/}
            {/*      title={data.map.address}*/}
            {/*      onClick={() => setInfoWindowOpen(!infoWindowOpen)}*/}
            {/*    />*/}

            {/*    {infoWindowOpen && (*/}
            {/*      <InfoWindow*/}
            {/*        anchor={marker}*/}
            {/*        maxWidth={250}*/}
            {/*        onCloseClick={() => setInfoWindowOpen(false)}*/}
            {/*        headerContent={<span className="font-bold text-[14px]">Chalets Horizon Nature</span>}*/}
            {/*      >*/}
            {/*        <div className="max-w-36">*/}
            {/*          {data.map.address}*/}
            {/*          <br/>*/}
            {/*          <a href={`https://www.google.com/maps/search/${data.map.address}`}*/}
            {/*             className="text-[#1a73e8] hover:underline">View on Google Maps</a>*/}
            {/*        </div>*/}
            {/*      </InfoWindow>*/}
            {/*    )}*/}
            {/*  </Map>*/}
            {/*</APIProvider>*/}
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 pl-0 text-center lg:text-left lg:w-1/3">
          {data.description}
        </div>
      </div>
    </section>
  );
}
