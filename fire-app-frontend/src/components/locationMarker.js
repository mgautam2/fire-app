
import { Icon, InlineIcon } from '@iconify/react';

import fireIcon from '@iconify/icons-mdi/fire';

const LocationMarker = ({lat, long, onClick}) => {
  
  return (
    <div className = "locationMarker" onClick = {onClick}>
      <Icon icon={fireIcon} className = "location-icon" />
    </div>
  )
  
}

export default LocationMarker