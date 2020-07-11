import React from 'react';
import styled from 'styled-components';

import Heatmap from '../../examples/Heatmap';

export default {
  title: 'Heatmap Examples',
};

export const Base = () => (
  <Wrapper>
    <Heatmap />
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
