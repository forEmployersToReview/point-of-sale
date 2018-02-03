import React from 'react';
import { load_script } from '../../../utils';

class Maps extends React.Component {
  componentDidMount() {
    load_script(
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCL8UIMezYxj5-Q_Eclk9BSvGsTsvaG62k&libraries=places',
      () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: -23.5505, lng: -46.6333 },
          zoom: 10,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        const input = document.getElementById('search-input');
        const searchBox = new window.google.maps.places.SearchBox(input);
        let markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', () => {
          const places = searchBox.getPlaces();
          if (places.length === 0) {
            return;
          }
          // Clear out the old markers.
          markers.forEach(marker => {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          const bounds = new window.google.maps.LatLngBounds();
          places.forEach(place => {
            if (!place.geometry) {
              console.log('Returned place contains no geometry');
              return;
            }
            const icon = {
              url: place.icon,
              size: new window.google.maps.Size(71, 71),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 34),
              scaledSize: new window.google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(
              new window.google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
              })
            );

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
    );
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">I should be a map!</div>
      </div>
    );
  }
}

export default Maps;
