import { Outlet } from 'react-router-dom'
import './App.css'
import TripForm from './components/TripForm'; 

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