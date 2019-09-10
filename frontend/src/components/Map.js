import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';


class SimpleMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClick = this.onMapClick.bind(this);
  }

  // onMarkerClick = (props, marker, e) => {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });
  // }

  // onMapClick = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // }
  
  render() {
    const style = {
      width: '90%',
      height: '360px',
      "box-shadow": "0 1rem 2rem rgba(0,0,0,.175)",
      "text-align": "center"
    }
    return (
      <Map
        item
        xs = { 11 }
        style = { style }
        google = { this.props.google }
        // onClick = { this.onMapClick }
        zoom = { 12 }
        initialCenter = {{ lat: 31.114181, lng: -97.743882 }}
        mapTypeControl={false}
        disableDefaultUI={true}
      >
        <Marker
          // onClick = { this.onMarkerClick }
          title = { "Military Supply" }
          position = {{ lat: 31.114181, lng: -97.743882 }}
          name = { "Military Supply" }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >

        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "" /*       AIzaSyCMsUZdVxb-1l7OCVKWTIWMt1BlyGUQEh0      */
})(SimpleMap)


