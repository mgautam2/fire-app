import {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room'; 
import axios from "axios";

import LocationMarker from './locationMarker'; 
import LocationInfoBox from './locationInfoBox'; 
import Header from './header';
import image from "./loading.gif"


function SimpleMap ({data: eventData}) {
    
    const [locationInfo, setLocationInfo] = useState(null)
    
    const markers = eventData.map ( ev => {
      if (ev.categories[0].id === 8) {
        let [lng, lat] = ev.geometries[0].coordinates
        return <LocationMarker lat = {lat}
          lng = {lng} onClick = { () => setLocationInfo({id : ev.id , title : ev.title})}
        />
      }
    })

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '80%', margin : "auto", marginTop : "8%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA4911DhTZII7PQhJxCrHOB2VqFFt2B858" }}
          defaultCenter={{lat: 40.1096,lng: -122.2277}}
          defaultZoom={7}
        >
        {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info= {locationInfo}/>}
      </div>
    );
  
}

function LoadingGIF () {
  return (
    <div className = "loadingImage" >
      <img style = {{ width : "30%"}} src= {image} />
    </div >
  )
}


function Map() {
  const [loading, changeLoading] = useState(true);
  const [data, changeData] = useState({});
  
  useEffect ( () => {
    axios.get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
    .then( ({data})  => changeData(data.events))
    .then( () => changeLoading(false) )
    .catch( err => console.log("Teri maa ki chut"))
  }, [])

  
  return (
    <>
      <Header/>
      {(loading) ? <LoadingGIF/> : <SimpleMap data = {data}/> }
    </>
  );
}




export default Map;
