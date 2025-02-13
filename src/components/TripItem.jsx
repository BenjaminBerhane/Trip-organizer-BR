import React from 'react'
// import { useNavigate } from 'react-router-dom';


const TripItem = ({ id, title, startDate, endDate, destination } ) => {
  

  // const navigate = useNavigate();

  const handleClickEdit = () => {
    console.log('Edit')
  }
  
  const handleClickDelete = () => {
    console.log('Delete')
  }

  return (
    
          <>
            <div className='trip-item'><strong>Titel: </strong><br />{title}</div>
            <div className='trip-item'><strong>Från Datum: </strong><br />{startDate}</div>
            <div className='trip-item'><strong>Till Datum: </strong><br />{endDate}</div>
            <div className='trip-item'><strong>Destination: </strong><br />{destination}</div>
            
            <div className='trip-item trip-buttons'>
              <button onClick={(event) => handleClickEdit(event, id)}>Ändra</button>
              <button onClick={(event) => handleClickDelete(event, id)}>Radera</button>
            </div>
          </>
        );
      }

export default TripItem