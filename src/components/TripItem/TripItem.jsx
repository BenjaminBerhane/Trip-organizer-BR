import React from 'react'
// import { useNavigate } from 'react-router-dom';
import './TripItem.css'
import { useSelector, useDispatch } from 'react-redux';


const TripItem = ({ id, title, startDate, endDate, destination } ) => {
  

  const trips = useSelector(state => state.trips.trips);
  const dispatch = useDispatch();

  const handleClickEdit = () => {
    console.log('Edit')
  }
  
  const handleClickDelete = () => {
    console.log('Delete')
  }
  const handleSelectTrip = (trip) => {
    dispatch(setSelectedTrip(trip));
  };

  return (
    
           {trips.map((trip) => (
            <li 
              onClick={() => handleSelectTrip(trip.id)} 
              className='trip'
              key={id}
            >
              <div className='trip-item'><strong>Titel: </strong><br />{title}</div>
              <div className='trip-item'><strong>Från: </strong><br />{startDate}</div>
              <div className='trip-item'><strong>Till: </strong><br />{endDate}</div>
              <div className='trip-item'><strong>Destination: </strong><br />{destination}</div>
              
              <div className='trip-item trip-buttons'>
                <button onClick={(event) => handleClickEdit(event, id)}>Ändra</button>
                <button onClick={(event) => handleClickDelete(event, id)}>X</button>
              </div>
            </li>
            ))}
        );
      }

export default TripItem