import { useState } from "react";
import PropTypes from 'prop-types';
import ActivityFormComponent from './ActivityFormComponent';

const EditActivity = ({ activityToEdit, updateActivity }) => {
  const [activity, setActivity] = useState(activityToEdit);

  const handleChange = (field, value) => {
    setActivity({ ...activity, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateActivity(activity);
  };

  const handleCancel = () => {
    // Handle cancel logic here
  };

  return (
    <ActivityFormComponent
      activity={activity}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      isEditing={true}
    />
  );
};

EditActivity.propTypes = {
  activityToEdit: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    destination: PropTypes.string,
  }).isRequired,
  updateActivity: PropTypes.func.isRequired,
};

export default EditActivity;