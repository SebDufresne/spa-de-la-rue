import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

require('dotenv').config();

export const MapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props: any ) => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: props.google_coords_X, lng: props.google_coords_Y }}>
      <Marker position={{ lat: props.google_coords_X, lng: props.google_coords_Y }} />
  </GoogleMap>
));