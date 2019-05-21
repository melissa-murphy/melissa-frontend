// import axios from 'axios';
// import { axiosAuth } from '../axiosAuth';

// // Login
// export const LOGGING_IN = 'LOGGING_IN';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const login = creds => dispatch => {
//   dispatch({ type: LOGGING_IN });
//   return axios
//     .post('https://immunization-tracker-backend.herokuapp.com/login?role=1', creds)
//     .then(res => {
//       localStorage.setItem('token', res.data.payload);
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
//     })
//     .catch(err => console.log(err));
// };

import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const URL = 'https://immunization-tracker-backend.herokuapp.com';

export const login = creds => dispatch => {
  console.log(`---------------login fired`);
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${URL}/api/auth/login`, creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('data', res.data);
      const saved = JSON.stringify(res.data);
      localStorage.setItem('data', saved);
      console.log(`---------------------login response` + JSON.stringify(res));
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      alert(`Incorrect credentials used: Please check and try again.`);
    });
};
