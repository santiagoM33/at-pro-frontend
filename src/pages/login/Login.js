import React, {Fragment, Component} from 'react';
import FormEmail, {FormLogin} from '../../components/form/Form';
import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';
import {loginAccountAuth} from '../../services/api';


class Login extends Component {
    
    getDataL= (email, password) => {
        const user = {
            email: email,
            password: password
        }
        //loginAccountAuth(user).then((res, err) => )
    }
    

    render() { 
        console.log('Errors ', this.props.errors);
        return ( 
            <Fragment>
                <div className='container-fluid'>
                    <Title
                        className='text-center my-3 h4'
                    >Ingreso al Panel de control</Title>
                    <Row className='col'>
                        <FormLogin 
                            onLogin={this.props.onLogin}
                        />
                    </Row>
                    { this.props.errors.length > 0 ? <span>Hay error</span> : null }
                    <Title
                        className='h5 mt-4'
                    >Aun no tengo acceso</Title>
                    <Row className='col'>
                        Si ya has publicado un anuncio, pero no has accedido nunca a tu panel de control, indícanos el email del anuncio que deseas gestionar y te enviaremos el enlace para entrar.
                    </Row>
                    <Row className='col'>
                        <FormEmail/>
                    </Row>
                </div>
            </Fragment>
         );
    }
}
 
export default Login;