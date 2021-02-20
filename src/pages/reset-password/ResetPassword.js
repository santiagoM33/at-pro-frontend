import React, { Component } from 'react';
import Title from '../../partials/title/Title';

import { resetPassword } from '../../services/api';
import toast from 'react-hot-toast';
import { Redirect as RouterRedirect } from 'react-router-dom';
 
function Redirect({ to }) {
  if (to) {
    return (
      <RouterRedirect to={to} />
    )
  } else {
    return null;
  }
}

export default class ResetPassword extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      to: null
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  reset() {
    resetPassword(this.state.email, this.state.password, this.state.code).then(resp => {
      toast.success('The password has been changed');
      this.setState({ to: '/login' });
    }, err => {
      toast.error(this.handleError(err));
    });
  }

  handleError(err) {
    return 'There was a problem resetting the password';
  }

  render() {
    return (
      <>
        <Redirect to={this.state.to}></Redirect>

        <div className='container-fluid'>
          <hr className="mb-4" />

          <Title
            className='text-center mb-4 h4'
          >Reset your password</Title>

          <form action="">
            <div className="form-group">
              <label htmlFor="reset-email">Email address</label>
              <input type="email" className="form-control" id="reset-email" onChange={this.onInputChange}
                aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} />
            </div>

            <div className="form-group">
              <label htmlFor="reset-password">New password</label>
              <input type="password" className="form-control" id="reset-password" onChange={this.onInputChange}
                placeholder="Enter new password" name="password" />
            </div>

            <div className="form-group">
              <label htmlFor="reset-code">Code</label>
              <input type="number" className="form-control" id="reset-code" onChange={this.onInputChange}
                placeholder="Enter code" name="code" />
            </div>

            <button type="button" className="btn btn-primary btn-block text-uppercase"
              onClick={this.reset}>Reset Password</button>
          </form>

        </div>
      </>
    )
  }
}
