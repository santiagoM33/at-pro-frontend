import React, { Component } from 'react'

import './Comment.css'

import Row from 'partials/row/Row';
import SpanError from 'partials/help/SpanError';
import Link from 'partials/link/Link';
import Button from 'components/button/Button';
import Alert from 'components/alert/Alert';

class FormComments extends Component {
    constructor(...props){
        super(...props)
        this.state= {
            comment: '',
            commentError: false
        }
    }
    
    render() {
        return ( 
            <>
                <form>
                    <Row className='row col-12'>
                        <div className="col-2 mt-2">
                            <img src='https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' alt='Profile' className='md-circle'></img>
                        </div>
                        <div className=" offset-1 col-9 form-group">
                            <textarea className="form-control" id="validationTextarea" placeholder="Escribe un comentario..." required rows="3"></textarea>
                
                            {this.state.commentError && //is-invalid
                                <SpanError id='fName-error' styles='form-text invalid-feedback'>Please enter a message in the textarea.</SpanError>
                            }
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary btn-block'>Comentar</button>
                        </div>
                    </Row>
                </form>
            </>
        );
    }
}
 
export default FormComments;