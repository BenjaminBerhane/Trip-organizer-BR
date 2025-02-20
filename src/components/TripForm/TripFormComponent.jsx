// import React from 'react';
import PropTypes from 'prop-types';

const TripFormComponent = ({ trip, handleChange, handleSubmit, handleCancel, isEditing, errorMessage }) => {
  return (
    <>
      <h1 className="title">{isEditing ? 'Ändra resa' : 'Lägg till resa'}</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name='title'
          placeholder="Titel"
          value={trip.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="input"
        />
        <input
          type="date"
          name='startDate'
          placeholder="Startdatum"
          value={trip.startDate}
          onChange={(e) => handleChange('startDate', e.target.value)}
          className="input"
        />
        <input
          type="date"
          name='endDate'
          placeholder="Slutdatum"
          value={trip.endDate}
          onChange={(e) => handleChange('endDate', e.target.value)}
          className="input"
        />
        <input
          type="text"
          name='destination'
          placeholder="Destination"
          value={trip.destination}
          onChange={(e) => handleChange('destination', e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          {isEditing ? 'Spara' : 'Spara'}
        </button>
        <button type="button" className="button" id='cancel-button' onClick={handleCancel}>
          Avbryt
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </>
  );
};

TripFormComponent.propTypes = {
  trip: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    destination: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};


export default TripFormComponent;