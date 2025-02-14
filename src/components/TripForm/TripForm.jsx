import { useState, useEffect } from "react";
import ActivityFormComponent from './ActivityFormComponent';
import { getTrips } from "../../utils/storage";
import { handleTripSubmission } from "../../utils/tripHandlers";
/* import './TravelForm.css'; */

const TripForm = () => {
  const [activity, setActivity] = useState({ title: "", startDate: "", endDate: "", destination: "" });
  const [destinations, setDestinations] = useState([]);

    //! Load trips from local storage on component mount
    useEffect(() => {
      const savedTrips = getTrips();
      if (savedTrips) {
        setDestinations(savedTrips);
      }
    }, []);

  const handleChange = (field, value) => {
    setActivity({ ...activity, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.title.trim() !== "" && activity.startDate.trim() !== "" && activity.endDate.trim() !== "" && activity.destination.trim() !== "") {
      handleTripSubmission(activity); // Pass activity directly
  
      const newDestination = { ...activity };
      console.log(`New destination added: ${newDestination.title}`);
      setDestinations([...destinations, newDestination]);
      setActivity({ title: "", startDate: "", endDate: "", destination: "" });
    }
  };

  const handleCancel = () => {
    setActivity({ title: "", startDate: "", endDate: "", destination: "" });
  };

  return (
    <div className="card-content">
      <ActivityFormComponent
        activity={activity}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        isEditing={false}
      />
      {destinations.length > 0 && (
        <div className="result">
          <p>Your trips:</p>
          <ul>
            {destinations.map((dest, index) => (
              <li key={index}>
                <strong>{dest.title}</strong> - {dest.destination} (from {dest.startDate} to {dest.endDate})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TripForm;