import React, {Component} from 'react';
import FormLogin from './form/FormLogin';
import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';

class Login extends Component {
    constructor(...props){
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
                <div className='offset-md-2 col-md-8 card my-3 mt-sm-5 p-2 shadow-sm rounded-sm'>
                    <Title
                        className='text-center my-3 h5 text-dark'
                    >Ingresar</Title>
                    
                    <Row className='col-12'>
                        {<div className='col-12'>
                            Status: {this.props.loggedInStatus}
                        </div>}
                        <FormLogin 
                            onLogin={this.props.onLogin}
                            handleSuccessAuth={this.handleSuccessAuth}
                        />
                    </Row>
                </div>
            </div>
         );
    }
}
 
export default Login;