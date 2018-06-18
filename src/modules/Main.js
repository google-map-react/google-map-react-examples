import React from 'react';
import styled from 'styled-components';

// components:
import Marker from '../components/Marker';
import GoogleMap from '../components/GoogleMap';

import PLACES from '../data/places.json';
import LOS_ANGELES_CENTER from '../const/la_center';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Main = () => (
  <Wrapper>
    <GoogleMap
      defaultCenter={LOS_ANGELES_CENTER}
      defaultZoom={10}
    >
      {PLACES.results.map(place => (
        <Marker
          key={place.id}
          text={place.name}
          lat={place.geometry.location.lat}
          lng={place.geometry.location.lng}
        />
      ))}
    </GoogleMap>
  </Wrapper>
);

export default Main;
