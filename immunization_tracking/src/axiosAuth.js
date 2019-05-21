import axios from 'axios';

export const axiosAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://immunization-tracker-backend.herokuapp.com/login?role=1'
  });
};