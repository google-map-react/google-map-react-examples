import React from 'react';
import styled from 'styled-components';

import AutoComplete from '../../examples/AutoComplete';

export default {
  title: 'AutoComplete Examples',
};

export const Base = () => (
  <Wrapper>
    <AutoComplete />
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
