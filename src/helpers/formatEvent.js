import moment from 'moment';

const formatEvent = ({ end, start, ...rest }) => ({
  ...rest,
  end: moment(end).toDate(),
  start: moment(start).toDate(),
});

export default formatEvent;
