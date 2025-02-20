import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faHouse, faPlus  } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <nav className='nav-bar'>
        <ul>
            <li><NavLink to="/">
                <FontAwesomeIcon icon={faHouse} />
                <span>Hem</span>
            </NavLink></li>
            <li><NavLink to="/alltripsview">
                <FontAwesomeIcon icon={faPlane} />
                <span>Planerade Resor</span>
            </NavLink></li>
            <li><NavLink to="/addtrip">
                <FontAwesomeIcon icon={faPlus} />
                <span>Skapa Resa</span>
            </NavLink></li>
            

        </ul>
    </nav>
  )
}

export default Navbar

