import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ActivityFormComponent from './ActivityFormComponent';

const TravelForm = () => {
  const [activity, setActivity] = useState({ title: "", startDate: "", endDate: "", destination: "" });
  const [destinations, setDestinations] = useState([]);

  const handleChange = (field, value) => {
    setActivity({ ...activity, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.title.trim() !== "" && activity.startDate.trim() !== "" && activity.endDate.trim() !== "" && activity.destination.trim() !== "") {
      const newDestination = { id: uuidv4(), ...activity };
      console.log(`New destination added with ID: ${newDestination.id}`);
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
            {destinations.map((dest) => (
              <li key={dest.id}>
                <strong>{dest.title}</strong> - {dest.destination} (from {dest.startDate} to {dest.endDate})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TravelForm;