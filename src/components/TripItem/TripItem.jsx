import React from 'react'
// import { useNavigate } from 'react-router-dom';
import './TripItem.css'


const TripItem = ({ id, title, startDate, endDate, destination } ) => {
  

  // const navigate = useNavigate();

  const handleClickEdit = () => {
    console.log('Edit')
  }
  
  const handleClickDelete = () => {
    console.log('Delete')
  }

  return (
    
          <article className="trip-item-container">
            <div className='trip-item' id='title'><strong>Titel: </strong><br />{title}</div>
            <div className='trip-item'><strong>Från: </strong><br />{startDate}</div>
            <div className='trip-item'><strong>Till: </strong><br />{endDate}</div>
            <div className='trip-item'><strong>Destination: </strong><br />{destination}</div>
            
            <div className='trip-item trip-buttons'>
              <button onClick={(event) => handleClickEdit(event, id)}>Ändra</button>
              <button onClick={(event) => handleClickDelete(event, id)}>x</button>
            </div>
          </article>
        );
      }

export default TripItem