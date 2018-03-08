import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: white;
  border: 5px solid black;
  border-radius: 100%;
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
