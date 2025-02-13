import React from 'react'
import { useNavigate } from 'react-router-dom';
import TripItem from './TripItem';

const trips = [  // 🆕 Mockdata
  { id: 1, title: "Weekend i Paris", fromDate: "2024-04-01", toDate: "2024-04-04", destination: "Paris, Frankrike" },
  { id: 2, title: "Sommarlov i Spanien", fromDate: "2024-06-15", toDate: "2024-07-01", destination: "Barcelona, Spanien" },
  { id: 3, title: "Höstresa till Tokyo", fromDate: "2024-10-10", toDate: "2024-10-20", destination: "Tokyo, Japan" },
];

const TripList = () => {

  const navigate = useNavigate();

  const handleClickShowDetails = (id) => {
    navigate(`/tripsview/${id}`);
  };

  return (
    <section>
      <ul>
        {trips.map((trip) => (
          <li 
            onClick={() => handleClickShowDetails(trip.id)} 
            className='trip'
          >
           <TripItem key={trip.id} {...trip} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TripList