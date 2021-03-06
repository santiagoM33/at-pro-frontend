import React, { Component } from "react";
import "./announce.css";

import Title from "../../partials/title/Title";
import Row from "../../partials/row/Row";
import SpanError from 'partials/help/SpanError';
import {Numbers} from 'helpers/filters'
import {saveUsers} from 'services/fakeApi'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


class Announce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: '',
            phone:'',
            country: '',
            category: 2,
            emailError: false,
            passError: false,
            userError: false,
            phoneError: false
        };
        this.onSelectCountry = this.onSelectCountry.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleClick = this.onHandleClick.bind(this)
        this.isMatch = this.isMatch.bind(this)
    }
    
    onSelectCountry(e){
        this.setState({country: e.target.value})
    }

    onHandleChange(e){
        switch (e.target.name) {
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
                if (e.target.value.length < 6){
                    this.setState({passError: true})
                } else {
                    this.setState({passError: false})
                }
                this.setState({password: e.target.value})
                break;
            case 'user':
                if (e.target.value.length < 8 ){
                    this.setState({userError: true})
                    
                } else {
                    this.setState({userError: false})
                }
                this.setState({user: e.target.value})
                break;
            /*case 'phone':
                if (e.target.value.length < 7 ){
                    this.setState({phoneError: true})
                    
                } else {
                    this.setState({phoneError: false})
                }
                this.setState({phone: e.target.value})
                break;*/
            default:
                break;
        }
    }
 
    isMatch = (param) => {
        if (param.email.length > 0 && param.password.length > 0 && param.user.length > 0 && param.phone.length > 0 && param.country.length > 0) {
            const {email, password, user, phone, country, category} = param;
            saveUsers(
                email,
                password,
                user,
                phone,
                country,
                category
            )
            /*registerDataAccount(
                email,
                password,
                user,
                phone,
                category
            )*/
        }
    }

    onHandleClick(e){
        e.preventDefault();
        const {email, password, user, phone, country, category} = this.state;
        let account = {email, password, user, phone, country, category}
        if (account) {
            this.isMatch(account)
        }
    }

    render() {
        //console.log(this.state.category)
        return (
            <div className="container">
                <div className='offset-md-2 col-md-8 card my-3 mt-sm-5 p-2 shadow-sm rounded-sm'>
                    <Title className="text-center my-3 h4">Crea tu anuncio</Title>
                    <Row className="col-12">
                        <form>
                            <Row className="col-12 mb-3 input-group">
                                <div className="col-12 form-group">
                                    <input
                                        type="email"
                                        placeholder="Ingrese su email"
                                        className="form-control col"
                                        name="email"

                                        onChange={this.onHandleChange}
                                    />
                                    { this.state.emailError &&
                                        <SpanError id='email-error' styles='form-text text-danger'>El email es invalido.</SpanError>
                                    }
                                </div>
                            </Row>
                            <Row className="col-12 mb-3 input-group">
                                <div className="col-12 form-group">
                                    <input
                                        type="password"
                                        placeholder="Ingrese un password entre 6 y 20 caracteres"
                                        className="form-control col"
                                        name="password"

                                        onChange={this.onHandleChange}
                                    />
                                    { this.state.passError &&
                                        <SpanError id='password-error' styles='form-text text-danger'>El password tiene que tener mas de 6 letras</SpanError>
                                    }
                                </div>
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="col-12 input-group">
                                    <input
                                        type="user"
                                        placeholder="Ingrese nombre y apellido para el anuncio"
                                        className="form-control col"
                                        name="user"

                                        onChange={this.onHandleChange}
                                    />
                                    { this.state.userError &&
                                        <SpanError id='user-error' styles='form-text text-danger'>El nombre y apellido tiene que tener mas de 8 letras</SpanError>
                                    }
                                </div>
                            </Row>
                            <Row className="col-12 input-group mb-3">
                                <PhoneInput
                                    placeholder="Ingresa tu numero de contacto"
                                    inputProps={{
                                        name: 'phone',
                                        required: true
                                      }}
                                    country='ar'
                                    regions={'south-america'}
                                    value={this.state.phone}
                                    onChange={phone => this.setState({ phone })}
                                    containerClass='col-12'
                                />
                                { this.state.phoneError &&
                                        <SpanError id='phone-error' styles='form-text text-danger'>El n° de contacto tiene que tener mas de 7 numeros</SpanError>
                                    }                                
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="col input-group">
                                    <select 
                                        className="custom-select"
                                        onChange={this.onSelectCountry}
                                    >
                                        <option defaultValue>
                                            -- Selecciona tu País --
                                        </option>
                                        <option value="1">Argentina</option>
                                        <option value="2">Bolivia</option>
                                        <option value="3">Brazil</option>
                                        <option value="4">Chile</option>
                                        <option value="5">Colombia</option>
                                        <option value="6">Paraguay</option>
                                        <option value="7">Peru</option>
                                        <option value="8">Uruguay</option>
                                        <option value="9">Venezuela</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="col input-group">
                                    <button
                                        type='button'
                                        className='btn btn-danger btn-block'
                                        onClick={this.onHandleClick}
                                    >
                                    Publicar</button>
                                </div>
                            </Row>
                        </form>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Announce;
