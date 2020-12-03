import GoogleMapReact from 'google-map-react';
import {useState, useEffect} from 'react'
import RoomIcon from '@material-ui/icons/Room'; 

import LocationMarker from './locationMarker'; 
import Header from './header';


const styles = {

  largeIcon: {
    width: 60,
    height: 60,
  },

};


 
function SimpleMap () {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '80%', margin : "auto", marginTop : "8%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA4911DhTZII7PQhJxCrHOB2VqFFt2B858" }}
          defaultCenter={{lat: 40.1096,lng: -122.2277}}
          defaultZoom={7}
        >
          <LocationMarker lat = {40.1096} lng = {-122.2277} />
        </GoogleMapReact>
      </div>
    );
  
}
// const LocationPin = ({ text }) => (
//   <div >
//     <RoomIcon  style = {{fontSize: 50}}/>
//     <p style = {{fontSize: 20, color : "red"}}>{text}</p>
//   </div>
// )
 
// <LocationPin
//   style={{ fontSize: "100" }}
//   lat={40.1096}
//   lng= {-88.2274}
//   text="UIUC"
// />

function Map() {
  return (
    <>
      <Header/>
      <SimpleMap style ={{margin : "70px 0px 0px 0px"}}/>
    </>
  );
}




export default Map;
