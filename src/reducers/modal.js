import { MODAL_CLOSE, MODAL_OPEN } from '../actions/modal';

export default (state = false, { type }) => {
  switch (type) {
    case MODAL_OPEN:
      return true;

    case MODAL_CLOSE:
      return false;

    default:
      return state;
  }
};
