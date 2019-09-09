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

//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }

//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
  
  render() {
    const style = {
      width: '90%',
      height: '360px',
      "box-shadow": "0 1rem 1rem rgba(0,0,0,.175)",
      "text-align": "center"
    //   position: 'absolute' 31.114181, -97.743882
    }
    console.log(this.props.google)
    return (
      <Map
        item
        xs = { 11 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 31.114181, lng: -97.743882 }}
        mapTypeControl={false}
        disableDefaultUI={true}
      >
        <Marker
        //   onClick = { this.onMarkerClick }
          title = { "Military Supply" }
          position = {{ lat: 31.114181, lng: -97.743882 }}
          name = { "Military Supply" }
        />
        {/* <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >

        </InfoWindow> */}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCMsUZdVxb-1l7OCVKWTIWMt1BlyGUQEh0  "
})(SimpleMap)


// import React, { Component } from 'react';
// import {GoogleMapReact} from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 29.759176,
//       lng: -95.363457
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '400%', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyCMsUZdVxb-1l7OCVKWTIWMt1BlyGUQEh0" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={29.759176}
//             lng={-95.363457}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;



// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({text}) => <div>{text}</div>;

// const SimpleMap = (props) => {
//     const [center, setCenter] = useState({lat: 29.759176, lng: -95.363457 });
//     const [zoom, setZoom] = useState(12);
//     return (
//         <div style={{ height: '400', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyCMsUZdVxb-1l7OCVKWTIWMt1BlyGUQEh0" }}
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           <AnyReactComponent
//             lat={29.759176}
//             lng={-95.363457}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
// }

// export default SimpleMap;