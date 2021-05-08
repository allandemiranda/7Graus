import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';


const Login = props => {
  const { user } = props;

  const [progress, setProgress] = useState(true);

  useEffect(()=>{
    if(user){
      setProgress(false)
    }
  },[user])

  return (
    <div>
      {progress ? <CircularProgress/> :         
        <MapContainer 
          center={[user.location.coordinates.latitude, user.location.coordinates.longitude]} 
          icon={icon}          
          style={{ height: '100vh' }}
          zoom={13} 
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[user.location.coordinates.latitude, user.location.coordinates.longitude]}>
            <Popup>
              <p>{user.location.street.name} {user.location.street.number} {user.location.street.name}</p>
              <p>{user.location.city} {user.location.state} {user.location.country}</p>
              <p>{user.location.postcode}</p>
              <p>Latitude: {user.location.coordinates.latitude}</p>
              <p>Longitude: {user.location.coordinates.longitude}</p>
            </Popup>
          </Marker>
        </MapContainer>
      }
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,  
};

export default Login;