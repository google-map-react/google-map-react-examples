import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ center, zoom }) => (
  <div className="map">
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY
      }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <AnyReactComponent
        lat={33.98732}
        lng={-118.4732217}
        text={'Samesun Venice Beach Hostel'}
      />
    </GoogleMapReact>
  </div>
);

Map.defaultProps = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
}

Map.defaultProps = {
  center: [33.9850, -118.4695],
  zoom: 14,
}

export default Map;
