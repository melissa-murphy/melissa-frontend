// import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

// Fetch + Initial Render
export const FETCH_PATIENT_USER_START = 'FETCH_PATIENT_USER_START';
export const FETCH_PATIENT_USER_SUCCESS = 'FETCH_PATIENT_USER_SUCCESS';
export const FETCH_PATIENT_USER_FAILURE = 'FETCH_PATIENT_USER_FAILURE';

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_PATIENT_USER_START });
  console.log(`---------------patient fetching users`);
  axiosAuth()
    .get(`${URL}/api/patients`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_PATIENT_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_PATIENT_USER_FAILURE, payload: err });
    });
};
