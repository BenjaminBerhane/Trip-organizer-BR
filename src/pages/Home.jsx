import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <h2>Välkommen hit!</h2>
    <section className='section-container'>
        <h3>Vad vill du göra?</h3>
        <Link to="/alltripsview"><button>Se alla mina planerade resor</button></Link>
        <Link to="/addtrip"><button>Skapa en ny resa</button></Link>
        
    </section>
    </>
  )
}

export default Home