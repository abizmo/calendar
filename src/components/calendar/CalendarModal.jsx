/* eslint-disable jsx-a11y/label-has-associated-control */
import moment from 'moment';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';

import '../../styles/modal.css';

const customStyles = {
  content: {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const initialStartDate = moment().minutes(0).seconds(0).add(1, 'hours');
const initialEndDate = initialStartDate.clone().add(1, 'hours');

const CalendarModal = () => {
  const [startDate, setStartDate] = useState(initialStartDate.toDate());
  const [endDate, setEndDate] = useState(initialEndDate.toDate());

  const closeModal = () => { console.log('closing...'); };

  const handleStartDateChange = (e) => {
    setStartDate(e);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e);
  };

  return (
    <Modal
      isOpen
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal p-4"
      overlayClassName="modal-fondo"
    >
      <h1>New Event</h1>
      <hr />
      <form className="row g-3">
        <div className="col-12">
          <label
            className="form-label"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <DateTimePicker
            className="form-control"
            id="startDate"
            onChange={handleStartDateChange}
            value={startDate}
          />
        </div>
        <div className="col-12">
          <label
            className="form-label"
            htmlFor="endDate"
          >
            End Date
          </label>
          <DateTimePicker
            className="form-control"
            id="endDate"
            minDate={startDate}
            onChange={handleEndDateChange}
            value={endDate}
          />
        </div>
        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            cols="30"
            id="description"
            name="description"
            rows="5"
          />
        </div>
        <div className="col-12 mt-3">
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Create Event
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CalendarModal;
