import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
/* import './TripForm.css'; */
/* import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; */

function App() {
/*   const dispatch = useDispatch(); */

/*   useEffect(() => {
    dispatch(loadTrips()); // ✅ Ladda resor när appen startar
  }, [dispatch]); */


  return (

    <>
    <Navbar />
     <main>
      <Outlet />
     </main>
      
    </>
  )
}

export default App;