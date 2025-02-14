import React from 'react'
import { useNavigate } from 'react-router-dom';
import TripItem from '../TripItem/TripItem.jsx';
import { getTrips } from '../../utils/storage.js';
import './TripList.css';



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
    <section className='trip-list-section-wrapper'>
      <div id="trip-header">
        <h2>Dina planerade resor</h2>
        <div id="add-trip">
          <p className="add-trip-text">Tryck för att lägga till en ny resa</p>
          <button onClick={handleClickAdd} className="add-button">+</button>
        </div>
      </div>
      <ul className='trip-list'>
        {trips.map((trip) => (
          <li key={trip.id}
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