import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/events`;
const token = localStorage.getItem('token');

const config = {
  headers: {
    'X-Authorization': token,
  },
};

// eslint-disable-next-line import/prefer-default-export
export const createEvent = (event) => axios
  .post(`${baseUrl}/`, event, config)
  .then(({ data }) => data)
  .catch(({ response: { data } }) => data);
