import React, { Component } from 'react';
import styled from 'styled-components';

// components:
import Marker from '../components/Marker';
import GoogleMap from '../components/GoogleMap';

import LOS_ANGELES_CENTER from '../const/la_center';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    fetch('/places.json')
      .then(response => response.json())
      .then(data => this.setState({ places: data.results }));
  }

  render() {
    const { places } = this.state;
    return (
      <Wrapper>
        {places && (
          <GoogleMap
            defaultCenter={LOS_ANGELES_CENTER}
            defaultZoom={10}
          >
            {places.map(place => (
              <Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
              />
            ))}
          </GoogleMap>
        )}
      </Wrapper>
    );
  }
}

export default Main;
