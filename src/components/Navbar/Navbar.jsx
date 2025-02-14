import './Navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='nav-bar'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/alltripsview">All Trips</NavLink></li>
            <li><NavLink to="/addtrip">Add New Tip</NavLink></li>
            <li><NavLink to="*">ErrorPage (temp)</NavLink></li>

        </ul>
    </nav>
  )
}

export default Navbar