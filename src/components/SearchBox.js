import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    this.searchBox = new mapApi.places.SearchBox(this.searchInput);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
    this.searchBox.bindTo('bounds', map);
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlacesChanged = ({ map, addplace } = this.props) => {
    const selected = this.searchBox.getPlaces();
    const { 0: place } = selected;
    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    addplace(selected);
    this.searchInput.blur();
  };

  clearSearchBox() {
    this.searchInput.value = '';
  }

  render() {
    return (
      <Wrapper>
        <input
          ref={(ref) => {
            this.searchInput = ref;
          }}
          type="text"
          onFocus={this.clearSearchBox}
          placeholder="Enter a location"
        />
      </Wrapper>
    );
  }
}

export default SearchBox;
