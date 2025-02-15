/* import React from 'react' */
// import { useNavigate } from 'react-router-dom';
import './TripItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTrip, deleteTrip } from '../../reducers/tripSlice';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* const TripItem = ({ id, title, startDate, endDate, destination } ) => { */
const TripItem = ({id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

   //! ✅ Fetch the trip from Redux using `id`
   const trip = useSelector(state => state.trips.trips.find(trip => trip.id === id));

   if (!trip) {
    return null; // ✅ Prevent errors if trip is not found
  }

  const handleClickEdit = (e) => {
    e.stopPropagation(); //prevent tripview navigation on button clicks
    console.log('Edit')
    navigate(`/edittrip/${id}`)
  }
  
  const handleClickDelete = (e) => {
    e.stopPropagation();
    console.log('Delete')
    dispatch(deleteTrip(id)) /* ******** oklart */
  }
  
  /* 
  const handleSelectTrip = () => {
    dispatch(setSelectedTrip({ id, title, startDate, endDate, destination })); navigate(`/tripview/${id}`); // ✅ Navigera till TripDetails
  }; */

  const handleSelectTrip = () => {
    dispatch(setSelectedTrip(id)); // ✅ Pass only `id`
    navigate(`/tripview/${id}`);
  };

  return (
    <li className='trip-item-container' onClick={handleSelectTrip}>
    <div id='title' className='trip-item'><strong>Titel: </strong>{trip.title}</div>
    <div className='trip-item'><strong>Från: </strong>{trip.startDate}</div>
    <div className='trip-item'><strong>Till: </strong>{trip.endDate}</div>
    <div className='trip-item'><strong>Destination: </strong>{trip.destination}</div>
    
    <div className='trip-item trip-buttons'>
      <button onClick={handleClickEdit}>Ändra</button>
      <button onClick={handleClickDelete}>X</button>
    </div>
  </li>
                       
  );
}


TripItem.propTypes = {
  id: PropTypes.string.isRequired, 
};

export default TripItem