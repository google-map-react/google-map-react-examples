import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// components:
import Marker from './Marker';

import PLACES from '../data/places.json';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const GoogleMap = ({ center, zoom }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
      }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {PLACES.businesses.map(place => (
        <Marker
          key={place.id}
          text={place.name}
          lat={place.coordinates.latitude}
          lng={place.coordinates.longitude}
        />
      ))}
    </GoogleMapReact>
  </Wrapper>
);

GoogleMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
};

GoogleMap.defaultProps = {
  center: [PLACES.region.center.latitude, PLACES.region.center.longitude],
  zoom: 14,
};

export default GoogleMap;
