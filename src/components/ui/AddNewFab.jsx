import React from 'react';
import { useDispatch } from 'react-redux';
import { modalOpen } from '../../actions/modal';

import '../../styles/ui.css';

const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(modalOpen());
  };

  return (
    <button
      className="btn btn-primary fab"
      onClick={handleOnClick}
      type="button"
    >
      <i className="fas fa-plus" />
    </button>
  );
};

export default AddNewFab;
