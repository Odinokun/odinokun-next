'use client';

import { useMemo } from 'react';
import type { NextPage } from 'next';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { snazzyStyles } from './snazzy-map';

export const CustomMap: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 45.4237, lng: -75.7009 }), [],
  );
  
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      scrollwheel: false,
      draggable: false,
      styles: snazzyStyles,
    }),
    [],
  );
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });
  
  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  
  return (
    <GoogleMap
      options={mapOptions}
      zoom={4}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: '100%', height: '100vh' }}
    />
  );
};