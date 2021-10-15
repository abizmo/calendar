/* eslint-disable jsx-a11y/label-has-associated-control */
import moment from 'moment';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import Swal from 'sweetalert2';

import '../../styles/modal.css';

const customStyles = {
  content: {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const startDate = moment().minutes(0).seconds(0).add(1, 'hours');
const endDate = startDate.clone().add(1, 'hours');

const CalendarModal = () => {
  const [formValues, setFormValues] = useState({
    description: '',
    end: endDate.toDate(),
    start: startDate.toDate(),
    title: '',
  });
  const [titleInvalid, setTitleInvalid] = useState(false);

  const {
    description, end, start, title,
  } = formValues;
  // TODO: cerrar modal
  const closeModal = () => { console.log('closing...'); };

  const handleEndDateChange = (date) => {
    setFormValues({
      ...formValues,
      end: date,
    });
  };

  const handleFormValueChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleStartDateChange = (date) => {
    setFormValues({
      ...formValues,
      start: date,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const momentStartDate = moment(start);
    const momentEndDate = moment(end);

    if (momentStartDate.isSameOrAfter(momentEndDate)) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'End date has to be later than start date',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    if (title.length < 3) {
      return setTitleInvalid(true);
    }

    setTitleInvalid(false);
    // TODO: enviar valores y cerrar formulario
    console.log(formValues);
    return true;
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
      <form className="row g-3" onSubmit={handleSubmit}>
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
            value={start}
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
            minDate={start}
            onChange={handleEndDateChange}
            value={end}
          />
        </div>
        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className={`form-control ${titleInvalid && 'is-invalid'}`}
            id="title"
            name="title"
            onChange={handleFormValueChange}
            type="text"
            value={title}
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
            onChange={handleFormValueChange}
            rows="5"
            value={description}
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
