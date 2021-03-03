import React, { Component } from 'react';

import Row from 'partials/row/Row';
import SpanError from 'partials/help/SpanError';
import Button from '../../../components/button/Button';


class FormRegister extends Component {
    constructor(...props) {
        super(...props)
        this.state= {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            category: 3,
            //Manejo de errores en cada campo
            fNameError: false,
            lNameError: false,
            emailError: false,
            passError: false,
            //Manejo de errores generales
            hasError: false,
            //Login
            isLogin: false
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.isMatch = this.isMatch.bind(this)
    } 
 
    onHandleChange(e) {
        switch (e.target.name) {
            case 'firstName':
                if (e.target.value.length < 3 ){
                    this.setState({fNameError: true})
                    
                } else {
                    this.setState({fNameError: false})
                }
                this.setState({firstName: e.target.value})
                break;
            case 'lastName':
                if (e.target.value.length < 4 ){
                    this.setState({lNameError: true})
                    
                } else {
                    this.setState({lNameError: false})
                }
                this.setState({lastName: e.target.value})
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
            case 'category':
                this.setState({category: e.target.value})
                break;
            default:
                break;
        }
    }
 

    isMatch = (param) => {
        if (param.firstName.length > 0 && param.lastName.length > 0 && param.email.length > 0 && param.password.length > 0) {
            const {firstName, lastName, email, password, category} = param;
            //console.log(category)
            this.props.getDataR(
                firstName,
                lastName,
                email,
                password,
                category,
            )
        }
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const {firstName, lastName, email, password, category} = this.state;
        let account = {firstName, lastName, email, password, category};
        if (account) {
            this.isMatch(account)
        }
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit.bind(this)}>
                <Row className='col-12 input-group'>
                    <div className="col-12 form-group">
                        <input 
                            type='text'
                            placeholder='Ingrese su nombre'
                            className='form-control col'

                            name='firstName'
                            aria-describedby={'fName-error'} 

                            value={this.name}
                            onChange={this.onHandleChange}
                        />
            
                        { this.state.fNameError &&
                            <SpanError id='fName-error' styles='form-text text-danger'>Su nombre debe contener mas de 3 letras.</SpanError>
                        }
                        <input
                            type='text'
                            placeholder='Ingrese su apellido'
                            className='form-control mt-3 col'

                            name='lastName'
                            aria-describedby={'lName-error'} 

                            value={this.name}
                            onChange={this.onHandleChange}
                        />
                        { this.state.lNameError &&
                            <SpanError id='lName-error' styles='form-text text-danger'>Su apellido debe contener mas de 4 letras.</SpanError>
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
                            onChange={this.onHandleChange}
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
                            placeholder='Ingrese su password'
                            className='form-control col'

                            name='password'
                            aria-describedby={'pass-error'} 

                            value={this.name}
                            onChange={this.onHandleChange}
                        />
                        { this.state.passError &&
                            <SpanError id='pass-error' styles='form-text text-danger'>El password debe contener numeros, signos, mayúsculas y minúsculas</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className='col-12 input-group mb-3'>
                        
                        <select
                            className="custom-select col col-sm-12" 
                            name='category'
                            multiple= {false}
                            
                        hidden>
                            <option value={this.state.category}></option>
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