// import React from 'react';
import PropTypes from 'prop-types';

const TripFormComponent = ({ trip, handleChange, handleSubmit, handleCancel, isEditing }) => {
  return (
    <>
      <h1 className="title">{isEditing ? 'Edit Trip' : 'Add Trip'}</h1>
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
          {isEditing ? 'Update' : 'Save'}
        </button>
        <button type="button" className="button" onClick={handleCancel}>
          Cancel
        </button>
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
  
};


export default TripFormComponent;