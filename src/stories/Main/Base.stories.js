import React from 'react';
import styled from 'styled-components';

import Main from '../../examples/Main';

export default {
  title: 'Main Examples',
};

export const Base = () => (
  <Wrapper>
    <Main />
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
