import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: grey;
`;

const Marker = ({ text }) => (
  <Wrapper>
    {text}
  </Wrapper>
);

Marker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Marker;
