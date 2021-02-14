import React, {Component} from 'react'
import FormGroup from './components/FormGroup'
import FormCheck from './components/FormCheck'
import FormSelect from './components/FormSelect'
import Button from '../button/Button'
import Link from '../../partials/link/Link'
import Row from '../../partials/row/Row'


class FormEmail extends Component {
    render() {
        return (
            <form>
                <FormGroup 
                    attribute = {{
                        type: 'email',
                        id: 'getEmail',
                        className: 'form-control col-10',
                        placeholder: 'Ingrese su email',
                        help: 'user-error'
                    }}
                    helpId='user-error'
                >
                Por favor ingrese una direccion valida</FormGroup>
                <Button
                    type='button'
                    style='primary'
                >
                Enviar enlace</Button>
            </form>
        )
    }
}

export class FormLogin extends Component {
    state = {
        user: '',
        password: '',
    }

    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onHandleSubmit(e) {
        e.preventDefault();
        this.props.saveData(
            this.state.user,
            this.state.password
        )
    }

    render() {
        
        return ( 
            <form onSubmit={this.onHandleSubmit.bind(this)}>
                <FormGroup 
                    attribute = {{
                        type: 'text',
                        id: 'user',
                        name: 'user',
                        className: 'form-control col-10',
                        placeholder: 'Ingrese su nombre de usuario',
                        help: 'user-error'
                    }}

                    helpId='user-error'
                    onHandleChange={this.onHandleChange}
                    value={this.state.user}
                    
                >
                El usuario debe contener mas de 3 letras como min</FormGroup>

                <FormGroup 
                    attribute = {{
                        type: 'password',
                        id: 'password',
                        name: 'password',
                        className: 'form-control col-10',
                        placeholder: 'Ingrese su password',
                        help: 'pass-error'
                    }}
                    helpId='pass-error'
                    onHandleChange={this.onHandleChange}
                    value={this.state.password}
                    
                >
                La password es invalida</FormGroup>
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
                <Row className='col mb-3'>
                    <Link
                        href='#'
                        className='text-primary font-weight-italic h6'
                    >You forgot your password?</Link>
                </Row>
                <Row className='col'>
                    <Button
                        type='submit'
                        style='secondary'
                    >Ingresar</Button>
                </Row>
            </form>
        );
    }
}

export class FormPublish extends Component {
    render() {
        return (
            <form>
                <FormSelect
                attribute = {{
                    htmlFor: 'provId',
                    label: 'Provincia',
                    id: 'provId'
                }}
                >Provincia de Buenos Aires</FormSelect>
            </form>
        )
    }
}
 
export default FormEmail;