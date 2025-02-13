import { useState } from "react";

const TravelForm = () => {
  const [destination, setDestination] = useState("");
  const [destinations, setDestinations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination.trim() !== "") {
      setDestinations([...destinations, destination]);
      setDestination("");
    }
  };

  return (
        <div className="card-content">
          <h1 className="title">Travel planner</h1>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Skriv in ditt resmål"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">
              Plan trip
            </button>
          </form>
          {destinations.length > 0 && (
            <div className="result">
              <p>Your trips:</p>
              <ul>
                {destinations.map((dest, index) => (
                  <li key={index}><strong>{dest}</strong></li>
                ))}
              </ul>
            </div>
          )}
        </div>
  );
};

export default TravelForm;
