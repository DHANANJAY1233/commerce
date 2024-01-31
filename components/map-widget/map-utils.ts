var destinationMarker: google.maps.Marker;
var originMarker: google.maps.Marker;
var waypointMarkers: {
  id: number;
  location: google.maps.Marker;
  autocomplete: google.maps.places.Autocomplete;
}[] = [];
var userPosition: any;
var directionsRenderer: google.maps.DirectionsRenderer;

export const initMapCenter = (map: google.maps.Map) => {
  directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(userPosition);

        var userMarker = new google.maps.Marker({
          position: userPosition,
          map: map,
          title: 'Your Location'
        });

        //Start watching the user's live location
        navigator.geolocation.watchPosition((pos) => updateUserLocation(pos, map));
      },
      function () {
        handleLocationError(true);
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false);
  }
};

const updateUserLocation = (position: GeolocationPosition, map: google.maps.Map) => {
  var updatedUserPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  // Update the user's live location on the map
  //userPosition = updatedUserPosition;
  map.panTo(updatedUserPosition);

  userPosition = updatedUserPosition;

  // Update the user marker position
  var userMarker = new google.maps.Marker({
    position: updatedUserPosition,
    map: map,
    title: 'Your Location'
  });
};

export const placeDestinationMarker = (
  location: google.maps.LatLng | null,
  map: google.maps.Map
) => {
  // Clear previous destination marker

  if (destinationMarker) {
    destinationMarker.setMap(null);
  }

  // Clear previous directions
  directionsRenderer.setDirections({ routes: [] });

  // Place a new marker at the clicked location
  destinationMarker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Destination'
  });
};

export const placeOriginMarker = (location: google.maps.LatLng | null, map: google.maps.Map) => {
  // Clear previous destination marker

  if (originMarker) {
    originMarker.setMap(null);
  }

  // Clear previous directions
  directionsRenderer.setDirections({ routes: [] });

  // Place a new marker at the clicked location
  originMarker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Origin'
  });
};

export const placeWaypoint = (
  location: google.maps.LatLng | null,
  map: google.maps.Map,
  autocomplete: google.maps.places.Autocomplete,
  waypointId?: number
) => {
  // Clear previous destination marker
  if (!waypointId) {
    console.log('add waypoint id before adding marking in map');
    return;
  }

  waypointMarkers
    .filter((waypointMarker) => waypointMarker.id === waypointId)
    .forEach((waypointMarker) => {
      if (waypointMarker.location) waypointMarker.location.setMap(null);
    });

  // Clear previous directions
  directionsRenderer.setDirections({ routes: [] });

  // Place a new marker at the clicked location
  var newWayPoint = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Origin'
  });
  waypointMarkers = [...waypointMarkers, { id: waypointId, location: newWayPoint, autocomplete }];
};

const handleLocationError = (browserHasGeolocation: boolean) => {
  console.error(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation."
  );
};

export const placeChangeListener = (
  autocomplete: google.maps.places.Autocomplete | undefined,
  map: google.maps.Map | undefined,
  markerType: 'origin' | 'destination' | 'waypoint',
  waypointId?: number
) => {
  if (autocomplete && map) {
    var place = autocomplete.getPlace();

    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    if (place.geometry.location) {
      // Set the destination marker and update the input field
      switch (markerType) {
        case 'destination':
          placeDestinationMarker(place.geometry.location, map);
          return;

        case 'origin':
          placeOriginMarker(place.geometry.location, map);
          return;

        case 'waypoint':
          placeWaypoint(place.geometry.location, map, autocomplete, waypointId);
          return;

        default:
          console.log('Error in choosing marker type');
      }
      // autocompleteInput.value = place.formatted_address;
    } else {
      console.log('Something went wrong');
    }
  }
};

export const removeWaypointMarker = (waypointId: number) => {
  waypointMarkers = waypointMarkers.filter((waypointMarker) => waypointMarker.id === waypointId);
  waypointMarkers.forEach((waypointMarker) => {
    if (waypointMarker.location) waypointMarker.location.setMap(null);
  });
};

export const calculateRoute = (
  originAutoComplete: google.maps.places.Autocomplete | undefined,
  destinationAutoComplete: google.maps.places.Autocomplete | undefined,
  optionData: google.maps.TravelMode
) => {
  if (destinationAutoComplete) {
    var destination = destinationAutoComplete.getPlace()?.formatted_address || '';

    if (destination.trim() === '') {
      alert('Please enter a destination address or click on the map to set it.');
      return;
    }

    var originPosition = userPosition;

    console.log(originPosition);

    if (originAutoComplete) {
      var origin = originAutoComplete.getPlace()?.formatted_address || '';

      if (origin.trim() === '') {
        alert(
          'You have not selected an origin point, your cuurent location will be chosen instead!'
        );
      } else {
        originPosition = origin;
      }
    }

    var waypoints: google.maps.DirectionsWaypoint[] = [];

    if (waypointMarkers && waypointMarkers.length > 0) {
      // Collect waypoints from input fields
      waypoints = waypointMarkers.map(function (waypointMarker) {
        return {
          location: waypointMarker.autocomplete.getPlace().formatted_address,
          stopover: true
        };
      });
    }

    var directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: originPosition,
        destination: destination,
        waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode[optionData]
      },
      function (response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }
};
