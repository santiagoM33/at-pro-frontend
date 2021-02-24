import React, {Fragment, Component} from 'react';
import {FormLogin} from 'components/form/Form';
import Row from 'partials/row/Row';
import Title from 'partials/title/Title';

class Login extends Component {

    render() { 
        return ( 
            <Fragment>
                <div className='container card mt-5 p-5 shadow-sm rounded bg-dark'>
                    <Title
                        className='text-center my-3 h4 text-warning'
                    >Ingreso al Panel de control</Title>
                    
                    <Row className='col'>
                        <FormLogin 
                            onLogin={this.props.onLogin}
                            errors={this.props.errors}
                            //onHandleChange={this.props.onHandleChange}
                        />
                    </Row>
                </div>
             
            </Fragment>
         );
    }
}
 
export default Login;