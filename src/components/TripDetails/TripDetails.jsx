import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './TripDetails.css';

const TripDetails =() => {
  const trip = useSelector(state => state.trips.selectedTrip); // ✅ Hämta från Redux

  if (!trip) {
    return <div>Laddar...</div>;
  }

  return (
    <article className="trip-details">
      <Link to="/alltripsview" className="back-button"> X </Link>
      <h1 className="trip-details-title">{trip.title}</h1>
      <div className="trip-details-info">
        <p className="trip-details-destination">Destination: {trip.destination}</p>
        <p className="trip-details-date">Startdatum: {trip.startDate}</p>
        <p className="trip-details-date">Slutdatum: {trip.endDate}</p>
        <button className='deleteTripBtn'>Radera</button>
        <button className='EditTripBtn'>Redigera</button>
      </div>
    </article>
  );
}

export default  TripDetails