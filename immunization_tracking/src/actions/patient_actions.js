import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';


export const login = creds => dispatch => {
  console.log(`---------------patient login fired`);
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${URL}/login?role=1`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('patient_id', res.data.patient_id);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('message', res.data.message)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      const saved = JSON.stringify(res.data);
      localStorage.setItem('data', saved);
      console.log(`---------------------login response` + JSON.stringify(res));
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      alert(`Incorrect credentials used: Please check and try again.`);
    });
};

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
