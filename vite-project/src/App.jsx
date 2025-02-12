import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
     <main>
      <h1>Trip Planner</h1>
       <Outlet />
     </main>
      
    </>
  )
}

export default App;
