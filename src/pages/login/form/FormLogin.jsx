import React, { Component } from 'react';

import Row from 'partials/row/Row';
import SpanError from 'partials/help/SpanError';
import Link from 'partials/link/Link';
import Button from 'components/button/Button';
import Alert from 'components/alert/Alert';


class FormLogin extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            hasError: false
        }
        this.onHandleChange = this.onHandleChange.bind(this)
    }
  

    onHandleChange = e => {
        if (e.target.name == 'email') {
            this.setState({email: e.target.value})
        } else {
            if (e.target.value.length < 6) {
                this.setState({passwordError: true})
                
            } else {
                this.setState({passwordError: false})
                this.setState({password: e.target.value})
            }
        }
    }
    
    onHandleSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            //this.props.clearErrors()
            if (this.props.errors.length == 0) {
                this.props.onLogin(email,password)
            } 
        } 
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit.bind(this)}>
                <Row className='col-12'>
                    {<div className='col-12'>
                        Status: {this.props.loggedInStatus}
                    </div>}
                        {
                            !!this.props.errors.length 
                            ?
                            <Alert 
                                type='danger'
                            >{this.props.errors[0]}</Alert>
                            : null
                        }
                    <div className="col-12 form-group">
                        <input
                            type='email'
                            placeholder='Ingrese su email'
                            className='form-control col'

                            name='email'
                            aria-describedby={'email-error'} 
                            onChange={this.onHandleChange}
                        />
                        { this.state.emailError &&
                            <SpanError id='email-error'>El email es invalido.</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className="col-12 form-group">
                        <input
                            type='password'
                            placeholder='Ingrese su password'
                            className='form-control col'

                            name='password'
                            aria-describedby={'pass-error'} 

                            onChange={this.onHandleChange}
                        />
                        { this.state.passwordError &&
                            <SpanError id='pass-error'>El password es invalido.</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12 mb-2'>
                    <div className="col-12">
                        <Link
                            href='/reset-password-request'
                            className='text-dark font-weight-italic offset-sm-6 offset-lg-8'
                        >You forgot your password?</Link>
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className="col-12 form-group">
                        <Button
                            type='submit'
                            color='danger'
                            block='block'
                    
                        >Ingresar</Button>
                    </div>
                </Row>
            </form>
        );
    }
}

export default FormLogin;