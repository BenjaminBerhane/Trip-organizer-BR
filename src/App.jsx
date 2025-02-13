import { Outlet } from 'react-router-dom'
import './App.css'
import TravelForm from './components/TripForm';  

function App() {

  return (
    <>
     <main>
      <Outlet />
     </main>
      
    </>
  )
}

export default App;
