import React, {Fragment, Component} from 'react';
import {FormRegister} from '../../components/form/Form';

import {HeaderLog} from '../../partials/header/Header';
import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';

import jwt from 'jsonwebtoken';
import {registerDataAccount} from '../../services/api'

class Register extends Component {
    constructor(...props) {
        super(...props);
        this.state = { 
            categories: [],
            account: ''
        }
        this.getDataR = this.getDataR.bind(this)
        this.generateToken = this.generateToken.bind(this);
    }

    componentDidMount() {
        /*const categories = {
            id: 1, name: "Admin", label: "admin",
            id: 2, name: "Escort", label: "escort",
            id: 3, name: "User", label: "user"
        }*/
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
            category: category
        }
        registerDataAccount(sData)
        /*this.setState({
            account: sData
        })*/
    }

    

    generateToken(account){
        let user = {
            firstName: account.firstName,
            lastName: account.lastName,
            email: account.email,
            password: account.password,
            category: account.category
        }
        let token;
        return token = jwt.sign(user, 'atpro', {
            expiresIn: 60*60*24
        })
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