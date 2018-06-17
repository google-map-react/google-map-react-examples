import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <section>{children}</section>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

App.defaultProps = {
  children: {},
};

export default App;
