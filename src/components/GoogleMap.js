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

const GoogleMap = ({ center, zoom }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
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

GoogleMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
};

GoogleMap.defaultProps = {
  center: [33.9850, -118.4695],
  zoom: 14,
};

export default GoogleMap;
