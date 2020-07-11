import React from 'react';
import styled from 'styled-components';

import MarkerInfoWindow from '../../examples/MarkerInfoWindow';
import MarkerInfoWindowGmapsObj from '../../examples/MarkerInfoWindowGmapsObj';

export default {
  title: 'MarkerInfo examples',
};

export const Base = () => (
  <Wrapper>
    <MarkerInfoWindow />
  </Wrapper>
);

export const GmapsObj = () => (
  <Wrapper>
    <MarkerInfoWindowGmapsObj />
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
