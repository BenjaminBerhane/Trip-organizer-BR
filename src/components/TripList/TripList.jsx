import React from 'react'
import { useNavigate } from 'react-router-dom';
import TripItem from '../TripItem/TripItem.jsx';
import { getTrips } from '../../utils/storage.js';



const TripList = () => {

  const trips = getTrips()

  const navigate = useNavigate();
  const handleClickAdd =() => {
    navigate ("/addtrip");
  }

  const handleClickShowDetails = (id) => {
    navigate(`/tripsview/${id}`);
  };

  return (
    <section>
      <div id="add-trip">
        <button onClick={handleClickAdd} className='add-button'>+</button>
        <p>Tryck för att lägga till en ny resa</p>
      </div>
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