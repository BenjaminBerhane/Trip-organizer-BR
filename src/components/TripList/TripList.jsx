import React from 'react'
import { useNavigate } from 'react-router-dom';
import TripItem from '../TripItem/TripItem.jsx';
import { getTrips } from '../../utils/storage.js';



const TripList = () => {

  const trips = getTrips()

  const navigate = useNavigate();
  const handleClickAdd =() =>
    navigate ("/addtrip");
  

  const handleClickShowDetails = (id) => {
    navigate(`/tripsview/${id}`);
  };

  return (
    <section>
      <button onClick= {handleClickAdd}> +</button>
      <ul>
        {trips.map((trip) => (
          <li 
            onClick={() => handleClickShowDetails(trip.id)} 
            className='trip'
          >
           <TripItem key={trip.id} {...trip} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TripList