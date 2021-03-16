import React, { Component } from 'react'
import './Comment.css'

import Row from 'partials/row/Row';
import SpanError from 'partials/help/SpanError';
 
class FormComments extends Component {
    constructor(...props){
        super(...props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    commentRef = React.createRef();

    handleSubmit(e){
        e.preventDefault()
        this.props.onHandleComment(this.commentRef.current.value)
    }

    render() {
        return ( 
            <>
                <form onSubmit={this.handleSubmit}>
                    <Row className='row col-12'>
                        <div className="col-2 mt-2">
                            <img src='https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' alt='Profile' className='md-circle'></img>
                        </div>
                        <div className=" offset-1 col-9 form-group">
                            <textarea 
                                className="form-control" 
                                id="validationTextarea" 
                                placeholder="Escribe un comentario..." 
                                rows="3"
                                onChange={this.handleChange}
                                ref={this.commentRef}
                                required 
                            />
                
                            {this.props.commentError && //is-invalid
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