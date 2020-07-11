import React from 'react';
import styled from 'styled-components';

import Searchbox from '../../examples/Searchbox';

export default {
  title: 'Searchbox Examples',
};

export const Base = () => (
  <Wrapper>
    <Searchbox />
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
