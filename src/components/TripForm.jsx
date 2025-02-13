import { useState } from "react";
import ActivityFormComponent from './ActivityFormComponent';
import './TripForm.css';

const TripForm = () => {
  const [activity, setActivity] = useState({ title: "", startDate: "", endDate: "", destination: "" });
  const [destinations, setDestinations] = useState([]);

  const handleChange = (field, value) => {
    setActivity({ ...activity, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.title.trim() !== "" && activity.startDate.trim() !== "" && activity.endDate.trim() !== "" && activity.destination.trim() !== "") {
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