import React, {Fragment, Component} from 'react';
import {FormRegister} from '../../components/form/Form';

import {HeaderLog} from '../../partials/header/Header';
import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';

class Register extends Component {
    state = { 
        categories: []
    }

    componentDidMount() {
        const BASE_URI = 'http://localhost:8005';
        const ep = '/categories';

        fetch(`${BASE_URI}${ep}`)
            .then(res => res.json())
            .then(resJson => this.setState({categories: resJson}))
        
    }

    render() { 
        //console.log(this.state.categories)
        return ( 
            <Fragment>
                <HeaderLog>AltoGato</HeaderLog>
                <div className='container-fluid'>
                    <Title
                        className='text-center my-3 h4'
                    >Registro de Usuario</Title>
                    <Row
                        className='col-12'
                    >
                        <FormRegister categories={this.state.categories}/>
                    </Row>
                </div>
            </Fragment>
           
         );
    }
}
 
export default Register;