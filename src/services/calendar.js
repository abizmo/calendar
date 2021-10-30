import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/events`;
const getConfig = () => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      'X-Authorization': token,
    },
  };
};

export const createEvent = (event) => {
  const config = getConfig();

  return axios
    .post(`${baseUrl}/`, event, config)
    .then(({ data }) => data)
    .catch(({ response: { data } }) => data);
};

export const deleteOneEvent = (eventId) => {
  const config = getConfig();

  return axios
    .delete(`${baseUrl}/${eventId}`, config)
    .then(({ data }) => data)
    .catch(({ response: { data } }) => data);
};

export const getAllEvents = () => {
  const config = getConfig();

  return axios
    .get(`${baseUrl}/`, config)
    .then(({ data }) => data)
    .catch(({ response: { data } }) => data);
};

export const updateOneEvent = (event) => {
  const config = getConfig();

  return axios
    .put(`${baseUrl}/${event.id}`, event, config)
    .then(({ data }) => data)
    .catch(({ response: { data } }) => data);
};
