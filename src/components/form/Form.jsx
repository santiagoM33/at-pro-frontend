import React, {Fragment, Component} from 'react'
import {Redirect} from 'react-router-dom'
import FormCheck from './components/FormCheck'
import Alert from '../alert/Alert'
import SpanError from '../../partials/help/SpanError'
import Button from '../button/Button'
import Link from '../../partials/link/Link'
import Row from '../../partials/row/Row'
import {resetPasswordRequest} from '../../services/api'
//import { v4 as uuidv4 } from 'uuid';
//import { uid } from 'uid';

import { Redirect as RouterRedirect } from 'react-router-dom';
 
function Redirecting({ to }) {
  if (to) {
    return (
      <RouterRedirect to={to} />
    )
  } else {
    return null;
  }
}


class FormEmail extends Component {

    constructor(...props){
        super(...props)
        this.state = {
            resetEmmail: ''
        }
    }

    render() {
        return (
            <form>
                <Row className='col-12'>
                    <div className="col-12 form-group">
                        <input
                            type='email'
                            placeholder='Ingrese su email'
                            className='form-control col'

                            name='email'
                            aria-describedby={'email-error'} 

                            //value={this.props.email}
                            //onChange={this.onHandleChange}
                        />
                        
                            <SpanError id='email-error'>Por favor ingrese una direccion valida</SpanError>
                        
                    </div>
                </Row>
                <Button
                    type='button'
                    style='primary'
                    onHandleClick={this.props.onHandleClick}
                >
                Enviar enlace</Button>
            </form>
        )
    }
}

export class FormLogin extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            hasError: false,
            to: null
        }
        this.onHandleChange = this.onHandleChange.bind(this)
    }

    onHandleChange = e => {
        if (e.target.name == 'email') {
            this.setState({email: e.target.value})
            this.setState({hasError: false})
        } else {
            if (e.target.value < 6) {
                this.setState({passwordError: true})
                this.setState({hasError: false})
            } else {
                this.setState({passwordError: false})
                this.setState({password: e.target.value})
                this.setState({hasError: false})
            }
        }
    }
    
    onHandleSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            if (this.props.errors.length == 0) {
                this.props.onLogin(email,password)
                this.setState({ to: '/panel' });
            } else {
                this.setState({ to: null });
            }
            
        } 
    }

    render() {
        console.log(this.props.errors.length)
        return (
        <>
            <Redirecting to={this.state.to}></Redirecting>

            <form onSubmit={this.onHandleSubmit.bind(this)}>
                <Row className='col-12'>
                        {
                            this.props.errors &&
                            <Alert 
                                type='danger'
                            >{this.props.errors[0]}</Alert>
                        }
                    <div className="col-12 form-group">
                        <input
                            type='email'
                            placeholder='Ingrese su email'
                            className='form-control col'

                            name='email'
                            aria-describedby={'email-error'} 
                            //ref={this.emailRef}

                            value={this.state.email}
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

                            value={this.password}
                            onChange={this.onHandleChange}
                        />
                        { this.state.passwordError &&
                            <SpanError id='pass-error'>El password es invalido.</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className="col-12 form-group">
                        <FormCheck
                            attribute = {{
                                type: 'checkbox',
                                id: 'rememberMe',
                                className: 'form-check-input',
                            }}
                            className='form-check-label'
                            htmlFor='rememberMe'
                        >
                        Remember Me    
                        </FormCheck>
                    </div>
                </Row>
                <Row className='col-12 mb-2'>
                    <div className="col-12">
                        <Link
                            href='/reset-password-request'
                            className='text-primary font-weight-italic h6'
                        >You forgot your password?</Link>
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className="col-12 form-group">
                        <Button
                            type='submit'
                            style='secondary'
                            //signIn={this.props.signIn}
                        >Ingresar</Button>
                    </div>
                </Row>
            </form>
        </>
        );
    }
}

export class FormPublish extends Component {
    render() {
        return (
            <form>
                <Row className='col-12'>
                    <div className='input-group mb-3'>
                        <label
                            htmlFor='prov_id'
                        >Provincia</label>
                        <select
                            className="custom-select col-11 col-sm-12 ml-3" 
                            id='prov_id'
                            name='provincia'
                            
                            multiple= {false}
                            //categories={this.props.categories}
                            //onChange={this.onHandleChange}     
                        >
                        </select>
                    </div>
                </Row>
            </form>
        )
    }
}

export class FormRegister extends Component {
    constructor(...props) {
        super(...props)
        this.state= {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            category: 0,
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

    //Metodos que utilizan name y value
    onHandleChange(e) {
        //this.setState({hasError: false})
        
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
            //const {id, firstName, lastName, email, password, category} = param;

            this.props.getDataR(
                this.state.firstName,
                this.state.lastName,
                this.state.email,
                this.state.password,
                this.state.category,
            )
        }
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const {id, firstName, lastName, email, password, category} = this.state;
        let account = {id, firstName, lastName, email, password, category};
        if (account) {
            this.isMatch(account)
        }
    }

    render() {
        //console.log(this.state.category)
        const categories = this.props.roles.filter(elem => elem.id !== 1);
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
                            ref={this.fNameRef}

                            value={this.name}
                            onChange={this.onHandleChange}
                        />
            
                        { this.state.fNameError &&
                            <SpanError id='fName-error' className="form-text text-muted">Su nombre debe contener mas de 3 letras.</SpanError>
                        }
                        <input
                            type='text'
                            placeholder='Ingrese su apellido'
                            className='form-control mt-3 col'

                            name='lastName'
                            aria-describedby={'lName-error'} 
                            ref={this.lNameRef}

                            value={this.name}
                            onChange={this.onHandleChange}
                        />
                        { this.state.lNameError &&
                            <SpanError id='lName-error' className="form-text text-muted">Su apellido debe contener mas de 4 letras.</SpanError>
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
                            ref={this.emailRef}

                            value={this.name}
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
                            ref={this.passRef}

                            value={this.name}
                            onChange={this.onHandleChange}
                        />
                        { this.state.passError &&
                            <SpanError id='pass-error'>El password debe contener numeros, signos, mayúsculas y minúsculas</SpanError>
                        }
                    </div>
                </Row>
                <Row className='col-12'>
                    <div className='input-group mb-3'>
                        
                        <select
                            className="custom-select col-11 col-sm-12 ml-3" 
                            name='category'
                            
                            multiple= {false}
                            onChange={this.onHandleChange}
                            
                        >
                            {
                                categories.map(elem => (
                                    <option key={elem.id} value={elem.id}>{elem.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </Row>
                <Row className='col'>
                    <Button
                        type='submit'
                        style='primary btn-block'
                    >Registrarse</Button>
                </Row>
            </form>
        )
    }
}
 
export default FormEmail;