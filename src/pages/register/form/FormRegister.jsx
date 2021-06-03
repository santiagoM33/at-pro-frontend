import React, { Component } from 'react';

import Row from 'partials/row/Row';
import SpanError from 'partials/help/SpanError';
import Button from '../../../components/button/Button';

import { registerDataAccount } from "services/api";

class FormRegister extends Component {
    constructor(...props) {
        super(...props)
        this.state= {
            alias: '',
            email: '',
            password: '',
            roleId: 3,
            //Manejo de errores en cada campo
            aliasError: false,
            emailError: false,
            passError: false,
            //Manejo de errores generales
            hasError: false,
            //Login
            isLogin: false
        }
        this._onHandleChange = this._onHandleChange.bind(this)
        this._handleChange = this._handleChange.bind(this)
        this.isMatch = this.isMatch.bind(this)
    } 
 
    _onHandleChange(e) {
        switch (e.target.name) {
            case 'alias':
                if (e.target.value.length < 4 ){
                    this.setState({aliasError: true})
                    
                } else {
                    this.setState({aliasError: false})
                }
                this.setState({alias: e.target.value})
                break;
            case 'email':
                const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                if (!patternEmail.test(e.target.value)) {
                    this.setState({emailError: true})
                } else {
                    this.setState({emailError: false})
                }

                this.setState({email: e.target.value})
                break;    
            case 'password':
                if (e.target.value.length < 6 ){
                    this.setState({passError: true})
                } else {
                    this.setState({passError: false})
                }
                this.setState({password: e.target.value})
                break;
            default:
                break;
        }
    }
 

    isMatch = (param) => {
        if (param.alias.length > 0 && param.email.length > 0 && param.password.length > 0) {
            const {alias, email, password, roleId} = param;
            //let fileName = `${firstName} ${lastName}`;
            //this.props.fileGrabber(fileName)
            registerDataAccount({
                alias,
                email,
                password,
                roleId,
            }).then(res => {
                localStorage.setItem('token', JSON.stringify(res.token));
                localStorage.setItem('user', JSON.stringify(res.user));
                this.props.handleSuccessAuth(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const {alias, email, password, roleId} = this.state;
        let account = {alias, email, password, roleId};
        if (account) {
            this.isMatch(account)
        }
    }

    _handleChange(e){
        this.setState({roleId: e.target.value})
    }

    render() {
        console.log('Role: ', this.state.roleId)
        return (
            <form onSubmit={this.onHandleSubmit.bind(this)}>
                <Row className='col-12 input-group'>
                    <div className="col-12 form-group">
                        <input 
                            type='text'
                            placeholder='Ingrese su nombre de usuario'
                            className='form-control col'

                            name='alias'
                            aria-describedby={'alias-error'} 

                            value={this.name}
                            onChange={this._onHandleChange}
                        />
            
                        { this.state.aliasError &&
                            <SpanError id='alias-error' styles='form-text text-danger'>Su nombre debe contener mas de 4 letras.</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className="col-12 form-group">
                        <input
                            type='email'
                            placeholder='Ingrese su email'
                            className='form-control col'

                            name='email'
                            aria-describedby={'email-error'} 

                            value={this.name}
                            onChange={this._onHandleChange}
                        />
                        { this.state.emailError &&
                            <SpanError id='email-error' styles='form-text text-danger'>El email es invalido.</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className="col-12 form-group">
                        <input 
                            type='password'
                            placeholder='Escriba un password'
                            className='form-control col'

                            name='password'
                            aria-describedby={'pass-error'} 

                            value={this.name}
                            onChange={this._onHandleChange}
                        />
                        { this.state.passError &&
                            <SpanError id='pass-error' styles='form-text text-danger'>El password debe contener numeros, signos, mayúsculas y minúsculas</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className="col-12 input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Role</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={this._handleChange}>
                            <option defaultValue>Choose...</option>
                            <option value="1">Admin</option>
                            <option value="2">Escort</option>
                            <option value="3">User</option>
                        </select>
                     </div>
                </Row>
                <Row className='col'>
                    <div className='col-12 mb-3'>
                        <Button
                            type='submit'
                            style='danger btn-block'
                        >Registrarse</Button>
                    </div>
                </Row>
            </form>
        )
    }
}

export default FormRegister;