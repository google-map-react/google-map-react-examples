import React from 'react';
import styled from 'styled-components';

import Main from '../../examples/Main';

export default {
  title: 'Simple examples',
};

export const Base = () => (
  <Wrapper>
    <Main />
  </Wrapper>
);

Base.story = {
  name: 'Main',
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
