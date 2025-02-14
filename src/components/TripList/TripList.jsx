import React from 'react'
import { useNavigate } from 'react-router-dom';
import Testing from '../TripItem/TripItem.jsx';
import './TripList.css';
import { useSelector } from 'react-redux';




const TripList = () => {

  const trips = useSelector(state => state.trips?.trips || []);
  const navigate = useNavigate();

  const handleClickAdd =() => {
    navigate ("/addtrip");
  }

  return (
    <section>
      <div id="trip-header">
        <h2>Dina planerade resor</h2>
        <div id="add-trip">
          <p className="add-trip-text">Tryck för att lägga till en ny resa</p>
          <button onClick={handleClickAdd} className="add-button">+</button>
        </div>
      </div>
      <ul>
        {trips.map((trip) => (
          <Testing key={trip.id} {...trip} />
        ))}
      </ul>
    </section>
  )
}

export default TripList