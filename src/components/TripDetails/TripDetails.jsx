// import { v4 as uuidv4 } from 'uuid';
import { getTrips } from '../../utils/storage.js';
import { useParams, Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
// import './TripDetails.css';


export default function TripDetails() {
  const { tripId } = useParams(); // hämtar ID från URL
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const trips = getTrips() || [];
    console.log("Hämtade trips från localStorage:", trips); // Logga trips
    const foundTrip = trips.find(trip => trip.id === tripId); 
    if (!foundTrip) {
      console.error("Resa hittades inte, id:", tripId);
    } else {
      console.log("Hittad resa:", foundTrip);
    }
    setTrip(foundTrip);
  }, [tripId]);
  

  if (!trip) {
    return <div>Laddar...</div>;
  }
  
    return (
      <article className="trip-details">
        <Link to="/triplist" className="back-button"> X </Link>
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