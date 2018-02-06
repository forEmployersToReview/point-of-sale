// Module
import { isEmpty } from 'lodash';

// Icon
const marker_icon = require('../../../assets/map-marker.png');
export const initiate_map = (el_id, lat, lng) => {
  const point = new window.google.maps.LatLng(lat, lng);
  const myMapOptions = {
    zoom: 15,
    center: point,
    mapTypeId: 'roadmap',
    styles
  };

  const map = new window.google.maps.Map(
    document.getElementById(el_id),
    myMapOptions
  );

  const marker = new window.google.maps.Marker({
    draggable: true,
    map: map,
    zoom: 20,
    icon: marker_icon,
    position: point,
    animation: window.google.maps.Animation.DROP
  });

  return {
    container: map.getDiv(),
    marker: marker,
    mapa: map
  };
};

export const new_marker = coords => {
  initiate_map('map', coords[1], coords[0]);
};

export const process_input_search = findVendors => {
  initiate_map('map', -23.5505, -46.6333);

  // Create the search box and link it to the UI element.
  const input = document.getElementById('search-input');
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  if (input) {
    const searchBox = new window.google.maps.places.SearchBox(input);
    searchBox.addListener('places_changed', () => {
      const place = searchBox.getPlaces()[0];
      if (isEmpty(place) || !place.geometry) {
        return;
      }

      // Grab lat and lng from pinpoint to push upstream.
      const { lat, lng } = place.geometry.location;
      const userLocation = {
        lat: lat(),
        lng: lng()
      };

      findVendors(userLocation);
      initiate_map('map', lat(), lng());
    });
  }
};

// Custom map style, not meant to be exported.z
const styles = [
  {
    featureType: 'administrative.country',
    elementType: 'geometry.fill',
    stylers: [
      {
        saturation: '-17'
      },
      {
        lightness: '4'
      },
      {
        gamma: '3.80'
      },
      {
        weight: '0.68'
      }
    ]
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.fill',
    stylers: [
      {
        saturation: '-13'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#e0efef'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        hue: '#1900ff'
      },
      {
        color: '#c0e8e8'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on'
      },
      {
        lightness: 700
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#7dcdcd'
      }
    ]
  }
];
