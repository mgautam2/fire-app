

function LocationInfoBox ({info}) {
    
      return (
        <div className = "location-info">
          <h2> Event Location Info</h2>
          <ul>
            <li> Title: <strong> {info.title} </strong> </li>
          </ul>
        </div>
      )
} 

export default LocationInfoBox