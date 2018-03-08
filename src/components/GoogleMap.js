import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// components:
import Marker from './Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const Map = ({ center, zoom }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
        // TODO: Specifying the version 3.30 avoids a bug where markers are animated from the corners
        // everytime you zoom in or out, ideally we would like to set this as the default version of GMR
        v: '3.30',
      }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <Marker
        lat={33.98732}
        lng={-118.4732217}
        text="Samesun Venice Beach Hostel"
      />
    </GoogleMapReact>
  </Wrapper>
);

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: [33.9850, -118.4695],
  zoom: 14,
};

export default Map;
