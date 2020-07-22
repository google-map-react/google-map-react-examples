import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';

// examples:
import GoogleMap from '../components/GoogleMap';

// consts
import LOS_ANGELES_CENTER from '../const/la_center';

class Heatmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    fetch('places.json')
      .then((response) => response.json())
      .then((data) => this.setState({ places: data.results }));
  }

  render() {
    const { places } = this.state;
    const data = places.map((place) => ({
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
      weight: Math.floor(Math.random() * Math.floor(5)),
    }));
    const heatmapData = {
      positions: data,
      options: {
        radius: 20,
        opacity: 1,
      },
    };

    return (
      <>
        {!isEmpty(places) && (
          <GoogleMap
            defaultZoom={10}
            defaultCenter={LOS_ANGELES_CENTER}
            heatmap={heatmapData}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_MAP_KEY,
              libraries: ['visualization'],
            }}
          />
        )}
      </>
    );
  }
}

export default Heatmap;
