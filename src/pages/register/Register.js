import React, {Component} from 'react';
import FormRegister from './form/FormRegister';

import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';

import {registerDataAccount} from '../../services/api'

class Register extends Component {
    constructor(...props) {
        super(...props);

        this.handleSuccessAuth = this.handleSuccessAuth.bind(this)
    }

    handleSuccessAuth(data){
        this.props.handleLogin(data)
        this.props.history.push('dashboard')
    }


    render() { 
        return ( 
            <div className='container'>
                <div className='offset-md-2 col-md-8 card my-3 mt-sm-5 p-2 shadow rounded-sm'>
                        {<div className='col-12'>
                            Status: {this.props.loggedInStatus}
                        </div>}
                    <Title
                        className='text-center my-3 h5 text-dark'
                    >Registrar Usuario</Title>
                    <Row
                        className='col-12'
                    >
                        <FormRegister 
                            handleSuccessAuth={this.handleSuccessAuth}
                        />
                    </Row>
                </div>
            </div>
           
         );
    }
}
 
export default Register;