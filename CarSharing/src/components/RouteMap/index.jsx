import {View, Text, Image} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
  const origin = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  const destination = {
    latitude: 37.78825,
    longitude: -122.9324,
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDSiLvhS0wqqLIzg8ZUl6XdckV4YeOkhPM'; //direction api
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{width: '100%', height: '100%'}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title="Origin" />
      <Marker coordinate={destination} title="Destination" />
    </MapView>
  );
};

export default RouteMap;
