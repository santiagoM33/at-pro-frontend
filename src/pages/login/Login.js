import React, {Fragment, Component} from 'react';
import {HeaderLog} from '../../partials/header/Header';
import FormEmail, {FormLogin} from '../../components/form/Form';
import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';



class Login extends Component {
    state = { 
        login: {}
    }

    saveData= (user, password) => {
        const sData = {
            user: user,
            password: password
        }
        this.setState({login: sData})
    }

    render() { 
        return ( 
            <Fragment>
                <HeaderLog>AltoGato</HeaderLog>
                <div className='container-fluid'>
                    <Title
                        className='text-center my-3 h3'
                    >Panel de control</Title>
                    <Row className='col'>
                        <FormLogin saveData={this.saveData}/>
                    </Row>
                    <Title
                        className='h5 mt-4'
                    >Aun no tengo acceso</Title>
                    <Row className='col'>
                        Si ya has publicado un anuncio, pero no has accedido nunca a tu panel de control, indícanos el email del anuncio que deseas gestionar y te enviaremos el enlace para entrar.
                    </Row>
                    <Row className='col'>
                        <FormEmail />
                    </Row>
                </div>
            </Fragment>
         );
    }
}
 
export default Login;