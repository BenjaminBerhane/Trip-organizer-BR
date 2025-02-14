// import React from 'react';
import PropTypes from 'prop-types';

const ActivityFormComponent = ({ activity, handleChange, handleSubmit, handleCancel, isEditing }) => {
  return (
    <div className="card-content">
      <h1 className="title">{isEditing ? 'Edit Activity' : 'Add Activity'}</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name='title'
          placeholder="Titel"
          value={activity.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="input"
        />
        <input
          type="date"
          name='startDate'
          placeholder="Startdatum"
          value={activity.startDate}
          onChange={(e) => handleChange('startDate', e.target.value)}
          className="input"
        />
        <input
          type="date"
          name='endDate'
          placeholder="Slutdatum"
          value={activity.endDate}
          onChange={(e) => handleChange('endDate', e.target.value)}
          className="input"
        />
        <input
          type="text"
          name='destination'
          placeholder="Destination"
          value={activity.destination}
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
    </div>
  );
};

ActivityFormComponent.propTypes = {
  activity: PropTypes.shape({
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

export default ActivityFormComponent;