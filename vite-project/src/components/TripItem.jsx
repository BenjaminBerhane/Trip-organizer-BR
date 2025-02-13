import React from 'react'
import { useNavigate } from 'react-router-dom';



const TripItem = () => {

  const navigate = useNavigate();

  const handleClickShowDetails = (id) => {
    navigate(`/tripsview/${id}`);
  };

  return (
    <section>
      <ul>
        {trips.map(({ id, title, fromDate, toDate, destination }) => (
          <li 
            key={id} 
            onClick={() => handleClickShowDetails(id)} 
            className='trip'
          >
            <div className='trip-item'><strong>Titel: </strong><br />{title}</div>
            <div className='trip-item'><strong>Från Datum: </strong><br />{fromDate}</div>
            <div className='trip-item'><strong>Till Datum: </strong><br />{toDate}</div>
            <div className='trip-item'><strong>Destination: </strong><br />{destination}</div>
            
            <div className='trip-item trip-buttons'>
              <button onClick={(event) => handleClickEdit(event, id)}>Ändra</button>
              <button onClick={(event) => handleClickDelete(event, id)}>Radera</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TripItem