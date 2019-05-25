import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import { Input } from 'reactstrap';

class PatientLogin extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  componentDidMount = () => {
    if (this.props.location.state) {
      console.log(this.props.location.state);
      if (
        this.props.location.state.email &&
        this.props.location.state.password
      ) {
        this.setState({
          credentials: {
            email: this.props.location.state.email,
            password: this.props.location.state.password
          }
        });
      }
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log(`--------------current auth state`, this.state.credentials);
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/patient-dashboard');
    });
  };

  render() {
    console.log(`-----------------------this.props`, this.props);
    return (
      <div>
        <form onSubmit={this.login}>
          <Input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>login</button>
          {/* onClick={this.login} */}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(PatientLogin);
