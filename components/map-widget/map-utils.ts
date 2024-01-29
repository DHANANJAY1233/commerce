var destinationMarker: google.maps.Marker;
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

const handleLocationError = (browserHasGeolocation: boolean) => {
  console.error(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation."
  );
};

export const placeChangeListener = (
  autocomplete: google.maps.places.Autocomplete | undefined,
  map: google.maps.Map | undefined
) => {
  if (autocomplete && map) {
    var place = autocomplete.getPlace();

    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    if (place.geometry.location) {
      // Set the destination marker and update the input field
      placeDestinationMarker(place.geometry.location, map);
      // autocompleteInput.value = place.formatted_address;
    } else {
      console.log('Something went wrong');
    }
  }
};

export const calculateRoute = (
  autocomplete: google.maps.places.Autocomplete | undefined,
  optionData: google.maps.TravelMode
) => {
  if (autocomplete) {
    var destination = autocomplete.getPlace()?.formatted_address || '';

    if (destination.trim() === '') {
      alert('Please enter a destination address or click on the map to set it.');
      return;
    }

    var directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: userPosition,
        destination: destination,
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
