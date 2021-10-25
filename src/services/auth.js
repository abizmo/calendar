import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/auth`;

export const loginService = ({ email, password }) => axios
  .post(`${baseUrl}/login`, { email, password })
  .then(({ data }) => data)
  .catch(({ response: { data } }) => data);

export const registerService = ({ email, name, password }) => axios
  .post(`${baseUrl}/register`, { email, name, password })
  .then(({ data }) => data)
  .catch(({ response: { data } }) => data);
