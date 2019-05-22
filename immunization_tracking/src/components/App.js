import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddUser from './AddUser';
import PrivateRoute from './PrivateRoute';


// import {  } from '../actions';

import '../styles/index.css';

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.props.getData(JSON.parse(localStorage.getItem('data')));
    }
  }
  render() {
    return (
      <Router>
        <Route path="/patient-login" component={PatientLogin} />
        <Route path="/staff-login" component={StaffLogin} />
        <Route exact path="/" component={AddUser} />
        <PrivateRoute exact path="/dashboard" component={UserProfile} />
        <PrivateRoute exact path="/child-patient/" component={PatientProfile} />
      </Router>
    );
  }
}

export default connect(
  null,
  { getData }
)(App);
