import React, {Fragment, Component} from 'react';
import {FormRegister} from '../../components/form/Form';

import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';

import {registerDataAccount} from '../../services/api'

class Register extends Component {
    constructor(...props) {
        super(...props);
        this.state = { 
            categories: [],
            account: ''
        }
        this.getDataR = this.getDataR.bind(this)
    }

    componentDidMount() {
        const BASE_URI = 'http://localhost:8005';
        const ep = '/categories';

        fetch(`${BASE_URI}${ep}`)
            .then(res => res.json())
            .then(resJson => this.setState({categories: resJson}))
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
        /*this.setState({
            account: sData
        })*/
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
                            categories={this.state.categories}
                            getDataR={this.getDataR}
                        />
                    </Row>
                </div>
            </Fragment>
           
         );
    }
}
 
export default Register;