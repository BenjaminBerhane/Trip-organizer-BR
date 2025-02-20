import { useNavigate } from 'react-router-dom';
import TripItem from '../TripItem/TripItem.jsx';
import './TripList.css';
import { useSelector, /* useDispatch  */} from 'react-redux';
import { useMemo } from 'react';




const TripList = () => {

  const trips = useSelector(state => state.trips?.trips || []);

  const sortedTrips = useMemo(() => trips.toSorted((a, b) =>    /*sorterar listan efter startdatum toSorted för att inte mutera orginal arrayen. UseMemo används för att inte rendera om sorteringen varje gång komponenten renderas.*/
    new Date(a.startDate) - new Date(b.startDate) 
  ), [trips]);
  
  const navigate = useNavigate();
/*   const dispatch = useDispatch(); */ /* No longer needed as local storage is loaded in tripSlice */

/*   dispatch(loadTrips); */
  

  const handleClickAdd =() => {
    navigate ("/addtrip");
  }
  
  return (
    <section className='trip-list-section-wrapper'>
      <div id="trip-header">
        <h2>Dina planerade resor</h2>
        <div id="add-trip">
          <p className="add-trip-text">Tryck för att lägga till en ny resa</p>
          <button onClick={handleClickAdd} className="add-button">+</button>
        </div>
      </div>
      <ul className='trip-list'>
        {sortedTrips.map((trip) => (
          <TripItem key={trip.id} {...trip} />
        ))}
      </ul>
    </section>
  );
};

export default TripList;