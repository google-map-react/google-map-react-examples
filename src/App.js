import React from 'react';
import styled from 'styled-components';

// components:
import GoogleMap from './components/GoogleMap';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <Wrapper>
    <GoogleMap />
  </Wrapper>
);

export default App;
