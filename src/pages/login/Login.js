import React, {Fragment, Component} from 'react';
import {FormLogin} from '../../components/form/Form';
import Row from '../../partials/row/Row';
import Title from '../../partials/title/Title';

import { Redirect as RouterRedirect } from 'react-router-dom';

function Redirecting({ to }) {
    if (to) {
      return (
        <RouterRedirect to={to} />
      )
    } else {
      return null;
    }
  }

class Login extends Component {

    

    render() { 
        return ( 
            <Fragment>
                <Redirecting to={this.props.to}></Redirecting>

                <div className='container-fluid'>
                    <Title
                        className='text-center my-3 h4'
                    >Ingreso al Panel de control</Title>
                    
                    <Row className='col'>
                        <FormLogin 
                            onLogin={this.props.onLogin}
                            errors={this.props.errors}
                            //to={this.props.to}
                        />
                    </Row>
                </div>
            </Fragment>
         );
    }
}
 
export default Login;