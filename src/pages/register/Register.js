import React, {Fragment, Component} from 'react';
import {FormRegister} from 'components/form/Form';

import Row from 'partials/row/Row';
import Title from 'partials/title/Title';

import {registerDataAccount} from 'services/api'

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
            <Fragment>
                <div className='container-fluid'>
                    <Title
                        className='text-center my-3 h4'
                    >Registro de Usuario</Title>
                    <Row
                        className='col-12'
                    >
                        <FormRegister 
                            roles={this.props.roles}
                            getDataR={this.getDataR}
                        />
                    </Row>
                </div>
            </Fragment>
           
         );
    }
}
 
export default Register;