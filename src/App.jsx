import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
/* import './TripForm.css'; */

function App() {

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
