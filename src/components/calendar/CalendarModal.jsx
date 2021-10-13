import React from 'react';
import Modal from 'react-modal';

import '../../styles/modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const CalendarModal = () => {
  // eslint-disable-next-line no-console
  const closeModal = () => { console.log('closing...'); };

  return (
    <Modal
      isOpen
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1>Hola</h1>
    </Modal>
  );
};

export default CalendarModal;
