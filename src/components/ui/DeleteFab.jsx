import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteEventStart } from '../../actions/calendar';

import '../../styles/ui.css';

const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(deleteEventStart());
  };

  return (
    <button
      className="btn btn-danger fab-delete"
      onClick={handleOnClick}
      type="button"
    >
      <i className="fas fa-trash" />
    </button>
  );
};

export default AddNewFab;
