import { Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';
import { placeChangeListener, removeWaypointMarker } from './map-utils';

const Waypoints = ({
  id,
  mapRef,
  removeHandler
}: {
  id: number;
  mapRef: google.maps.Map | undefined;
  removeHandler: Function;
}) => {
  const [waypointAutoCompleteRef, setWaypointAutoCompleteRef] =
    useState<google.maps.places.Autocomplete>();

  return (
    <div className="flex gap-4">
      <Autocomplete
        onLoad={(autocomplete) => setWaypointAutoCompleteRef(autocomplete)}
        onPlaceChanged={() => placeChangeListener(waypointAutoCompleteRef, mapRef, 'waypoint', id)}
      >
        <input
          placeholder="Enter Waypoint"
          type="text"
          className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
        />
      </Autocomplete>
      <button
        onClick={() => {
          removeWaypointMarker(id);
          removeHandler(id);
        }}
        className="rounded-md bg-[rgb(255,209,97)] px-[20px]"
      >
        –
      </button>
    </div>
  );
};

export default Waypoints;
