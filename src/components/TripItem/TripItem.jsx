import React from 'react'
// import { useNavigate } from 'react-router-dom';
import './TripItem.css'
import { useDispatch } from 'react-redux';
import { setSelectedTrip } from '../../reducers/tripSlice';
import { useNavigate } from 'react-router-dom';



const TripItem = ({ id, title, startDate, endDate, destination } ) => {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickEdit = () => {
    console.log('Edit')
  }
  
  const handleClickDelete = () => {
    console.log('Delete')
  }
  const handleSelectTrip = () => {
    dispatch(setSelectedTrip({ id, title, startDate, endDate, destination })); navigate(`/tripview/${id}`); // ✅ Navigera till TripDetails
  };

  return (
    <li className='trip' onClick={handleSelectTrip}>
    <div className='trip-item'><strong>Titel: </strong>{title}</div>
    <div className='trip-item'><strong>Från: </strong>{startDate}</div>
    <div className='trip-item'><strong>Till: </strong>{endDate}</div>
    <div className='trip-item'><strong>Destination: </strong>{destination}</div>
    
    <div className='trip-item trip-buttons'>
      <button>Ändra</button>
      <button>X</button>
    </div>
  </li>
            
        
            
        );
      }

export default TripItem