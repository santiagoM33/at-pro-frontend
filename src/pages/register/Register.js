import React, {Component} from 'react';
import {FormRegister} from '../../components/form/Form';

import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';

import {registerDataAccount} from '../../services/api'

class Register extends Component {
    constructor(...props) {
        super(...props);
        this.getDataR = this.getDataR.bind(this)
    }

    getDataR(fName, lName, email, password, category) {
        const sData = {
            firstName: fName,
            lastName: lName,
            email: email,
            password: password,
            roleId: category
        }
        registerDataAccount(sData)
    }


    render() { 
        return ( 
            <div className='container'>
                <div className='offset-md-2 col-md-8 card my-3 mt-sm-5 p-2 shadow rounded-sm'>
                    <Title
                        className='text-center my-3 h5 text-dark'
                    >Registrar cuenta</Title>
                    <Row
                        className='col-12'
                    >
                        <FormRegister 
                            roles={this.props.roles}
                            getDataR={this.getDataR}
                        />
                    </Row>
                </div>
            </div>
           
         );
    }
}
 
export default Register;