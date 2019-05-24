// Patient Actions

import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

export const URL = 'https://immunization-tracker-backend.herokuapp.com';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// async () =>
export const login = creds => dispatch => {
  console.log(`---------------patient login fired`);
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${URL}/login?role=1`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('patient_id', res.data.patient_id);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('message', res.data.message);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      const saved = JSON.stringify(res.data);
      console.log(`------------------------saved response` + saved);
      localStorage.setItem('data', saved);
      console.log(`---------------------login response` + JSON.stringify(res));
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      alert(`Incorrect credentials used: Please check and try again.`);
    });
};

// Fetch + Initial Render
export const FETCH_PATIENT_START = 'FETCH_PATIENT_START';
export const FETCH_PATIENT_SUCCESS = 'FETCH_PATIENT_SUCCESS';
// export const FETCH_PATIENT_FAILED = 'FETCH_PATIENT_FAILED';

export const fetchPatients = data => dispatch => {
  dispatch({ type: FETCH_PATIENT_START, payload: data });
  console.log(`----------------------fetch patient start`);
  axiosAuth()
    .get(`${URL}/api/patients`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_PATIENT_SUCCESS });
      console.log(`-------------------fetch sucessful`);
    })
    .catch(err => {
      console.log(err);
    });
};
