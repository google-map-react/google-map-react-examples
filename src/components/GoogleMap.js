import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// components:
import Marker from './Marker';

import PLACES from '../data/places.json';
import LOS_ANGELES_CENTER from '../const/la_center';

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
      {PLACES.results.map(place => (
        <Marker
          key={place.id}
          text={place.name}
          lat={place.geometry.location.lat}
          lng={place.geometry.location.lng}
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
  center: LOS_ANGELES_CENTER,
  zoom: 10,
};

export default GoogleMap;
