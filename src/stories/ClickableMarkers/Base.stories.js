import React from 'react';
import styled from 'styled-components';

import MarkerInfoWindow from '../../examples/MarkerInfoWindow';
import MarkerInfoWindowGmapsObj from '../../examples/MarkerInfoWindowGmapsObj';

export default {
  title: 'MarkerInfo Examples',
};

export const DefaultMarker = () => (
  <Wrapper>
    <MarkerInfoWindowGmapsObj />
  </Wrapper>
);

export const CustomComponent = () => (
  <Wrapper>
    <MarkerInfoWindow />
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
