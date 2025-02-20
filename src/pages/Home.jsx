import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

const Inspiration = lazy(() => import('../components/Inspiration/Inspiration'));

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 sekunder

    return () => clearTimeout(timer); // Rensa timeout om komponenten avmonteras
  }, []);

  return (
    <>
      <h2>Välkommen hit!</h2>
      <section className='section-container'>
        <h3>Vad vill du göra?</h3>
        <Link to="/alltripsview"><button>Se alla mina planerade resor</button></Link>
        <Link to="/addtrip"><button>Skapa en ny resa</button></Link>
      </section>
      {isLoading ? (
        <div>Laddar inspiration...</div>
      ) : (
        <Suspense fallback={<div>Laddar inspiration...</div>}>
          <Inspiration />
        </Suspense>
      )}
    </>
  );
}

export default Home;