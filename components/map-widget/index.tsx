'use client';

import { Autocomplete, GoogleMap, TrafficLayer, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import {
  calculateRoute,
  initMapCenter,
  placeChangeListener,
  placeDestinationMarker
} from './map-utils';
import './styles/style.css';
import Waypoints from './waypoint';

const MapWidget = ({ apikey }: { apikey: string }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apikey,
    libraries: ['places']
  });

  const [isTrafficLayerVisible, setIsTrafficLayerVisible] = useState(false);
  const [optionData, setOptionData] = useState('DRIVING');

  const [mapRef, setMapRef] = useState<google.maps.Map>();
  const [originAutoCompleteRef, setOriginAutoCompleteRef] =
    useState<google.maps.places.Autocomplete>();
  const [destinationAutoCompleteRef, setDestinationAutoCompleteRef] =
    useState<google.maps.places.Autocomplete>();

  const [waypoints, setWaypoints] = useState<{ id: number }[]>([]);

  const addWaypoint = () => {
    setWaypoints((prev) => [...prev, { id: Date.now() }]);
  };

  const removeWaypoint = (id: number) => {
    setWaypoints((prev) => prev.filter((waypoint) => waypoint.id !== id));
  };

  const onLoad = (map: google.maps.Map) => {
    setMapRef(map);
    initMapCenter(map);
  };

  //don't know if this is required or not
  useEffect(() => {
    if (mapRef) {
      mapRef.addListener('click', function (event: google.maps.MapMouseEvent) {
        placeDestinationMarker(event.latLng, mapRef);
      });
    }
  }, [mapRef]);

  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="mb-4 flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <Autocomplete
                onLoad={(autocomplete) => setOriginAutoCompleteRef(autocomplete)}
                onPlaceChanged={() => placeChangeListener(originAutoCompleteRef, mapRef, 'origin')}
              >
                <input
                  placeholder="Enter Origin Location"
                  type="text"
                  id="origin-input"
                  className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                />
              </Autocomplete>
            </div>
            <div className="flex-1">
              <Autocomplete
                onLoad={(autocomplete) => setDestinationAutoCompleteRef(autocomplete)}
                onPlaceChanged={() =>
                  placeChangeListener(destinationAutoCompleteRef, mapRef, 'destination')
                }
              >
                <input
                  placeholder="Enter Destination Location"
                  type="text"
                  id="destination-input"
                  className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                />
              </Autocomplete>
            </div>
            <select
              value={optionData}
              onChange={(e) => setOptionData(e.target.value as google.maps.TravelMode)}
              className="appearance-none rounded-md bg-[rgb(255,209,97)] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAABGdBTUEAALGPC/xhBQAAAQtJREFUOBG1lEEOgjAQRalbGj2OG9caOACn4ALGtfEuHACiazceR1PWOH/CNA3aMiTaBDpt/7zPdBKy7M/DCL9pGkvxxVp7KsvyJftL5rZt1865M+Ucq6pyyF3hNcI7Cuu+728QYn/JQA5yKaempxuZmQngOwEaYx55nu+1lQh8GIatMGi+01NwBcEmhxBqK4nAPZJ78K0KKFAJmR3oPp8+Iwgob0Oa6+TLoeCvRx+mTUYf/FVBGTPRwDkfLxnaSrRwcH0FWhNOmrkWYbE2XEicqgSa1J0LQ+aPCuQgZiLnwewbGuz5MGoAhcIkCQcjaTBjMgtXGURMVHC1wcQEy0J+Zlj8bKAnY1/UzDe2dbAVqfXn6wAAAABJRU5ErkJggg==')] bg-[length:0.7rem] bg-[right_0.7rem_center] bg-no-repeat px-[10px]"
              id="travel-mode-select"
            >
              <option value="DRIVING">Driving</option>
              <option value="WALKING">Walking</option>
              <option value={'BICYCLING'}>Bicycling</option>
              <option value={'TRANSIT'}>Public Transportation</option>
            </select>
          </div>

          {waypoints.map((waypoint) => {
            return (
              <div key={waypoint.id} className="mb-4">
                <Waypoints id={waypoint.id} mapRef={mapRef} removeHandler={removeWaypoint} />
              </div>
            );
          })}

          <div className="mb-4 flex flex-col gap-4 lg:flex-row">
            <button onClick={addWaypoint} className="rounded-md bg-[rgb(255,209,97)] px-[10px]">
              Add Waypoint
            </button>
            <button
              onClick={() =>
                calculateRoute(
                  originAutoCompleteRef,
                  destinationAutoCompleteRef,
                  optionData as google.maps.TravelMode
                )
              }
              className="rounded-md bg-[rgb(255,209,97)] px-[10px]"
            >
              Get Directions
            </button>
            <button
              onClick={() => setIsTrafficLayerVisible(!isTrafficLayerVisible)}
              className="rounded-md bg-[rgb(255,209,97)] px-[10px]"
            >
              Toggle Traffic Layer
            </button>
          </div>
          <GoogleMap mapContainerClassName="map-container" zoom={12} onLoad={onLoad}>
            {isTrafficLayerVisible && (
              <TrafficLayer
                options={{
                  autoRefresh: true
                }}
              />
            )}
          </GoogleMap>
        </>
      )}
    </div>
  );
};

export default MapWidget;
