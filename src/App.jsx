import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header';
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
    <Header />
    <Navbar />
     <main>
      <Outlet />
     </main>
      
    </>
  )
}

export default App;