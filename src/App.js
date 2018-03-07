import React from 'react';
import GoogleMapReact from 'google-map-react';

import './App.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const App = () => (
  <div className="app">
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY
      }}
      defaultCenter={[33.9850, -118.4695]}
      defaultZoom={14}
    >
      <AnyReactComponent
        lat={33.98732}
        lng={-118.4732217}
        text={'Samesun Venice Beach Hostel'}
      />
    </GoogleMapReact>
  </div>
);

export default App;
