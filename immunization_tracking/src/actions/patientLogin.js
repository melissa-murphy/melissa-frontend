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
