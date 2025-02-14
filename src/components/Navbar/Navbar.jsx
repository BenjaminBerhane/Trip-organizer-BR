import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faHouse, faPlus, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <nav className='nav-bar'>
        <ul>
            <li><NavLink to="/">
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
            </NavLink></li>
            <li><NavLink to="/alltripsview">
                <FontAwesomeIcon icon={faPlane} />
                <span>All Trips</span>
            </NavLink></li>
            <li><NavLink to="/addtrip">
                <FontAwesomeIcon icon={faPlus} />
                <span>New Trip</span>
            </NavLink></li>
            <li><NavLink to="*">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <span>ErrorPage (temp)</span>
            </NavLink></li>

        </ul>
    </nav>
  )
}

export default Navbar

