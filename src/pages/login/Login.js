import React, {Fragment, Component} from 'react';
import {FormLogin} from 'components/form/Form';
import Row from 'partials/row/Row';
import Title from 'partials/title/Title';

class Login extends Component {

    render() { 
        return ( 
            <div className='container'>
                <div className='offset-md-2 col-md-8 card my-3 mt-sm-5 p-2 shadow-sm rounded-sm'>
                    <Title
                        className='text-center my-3 h5 text-dark'
                    >Ingresar</Title>
                    
                    <Row className='col-12'>
                        <FormLogin 
                            onLogin={this.props.onLogin}
                            errors={this.props.errors}
                            clearErrors={this.props.clearErrors}
                        />
                    </Row>
                </div>
             
            </div>
         );
    }
}
 
export default Login;