import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteTrip } from '../../reducers/tripSlice';
import './TripDetails.css';
import { useDispatch } from 'react-redux';

const TripDetails = () => {
  const { tripId } = useParams(); // ✅ Get tripId from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Find the trip directly from Redux
  const trip = useSelector(state => state.trips.trips.find(trip => trip.id === tripId));

  if (!trip) {
    return <div>Laddar...</div>;
  }

  const handleDelete = () => {
    dispatch(deleteTrip(trip.id)); // ✅ Delete trip from Redux
    navigate("/alltripsview"); // ✅ Redirect after deleting
  };

  const handleEdit = () => {
    navigate(`/edittrip/${trip.id}`); // ✅ Navigate to edit page
  };

  return (
    <article className="trip-details">
      <Link to="/alltripsview" className="back-button"> X </Link>
      <h1 className="trip-details-title">{trip.title}</h1>
      <div className="trip-details-info">
        <p className="trip-details-destination">Destination: {trip.destination}</p>
        <p className="trip-details-date">Startdatum: {trip.startDate}</p>
        <p className="trip-details-date">Slutdatum: {trip.endDate}</p>
        <button className='deleteTripBtn' onClick={handleDelete}>Radera</button>
        <button className='EditTripBtn' onClick={handleEdit}>Redigera</button>
      </div>
    </article>
  );
}

export default TripDetails;
