/* eslint-disable */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class ModalAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false
         }
         this.handleClose = this.handleClose.bind(this);
         this.handleShow = this.handleShow.bind(this);
    }

    handleClose(){
        this.setState({show: !this.state.show})
    }
    handleShow(){
        this.setState({show:!this.state.show})
    }

    render() { 
        return ( 
            <>
                {/*<button className={`btn btn-${this.props.color}`} onClick={this.handleShow}>
                {this.props.children}
        </button>*/}
        
                <Modal show={this.props.isOpen} >
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar Usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="id">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="#ID" name="id" readOnly/>
                            </Form.Group>
                            <Form.Group controlId="user">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="change username" name="user" onChange={this.props.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.props.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="status">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select" onChange={this.props.handleChange}>
                                <option>Pending</option>
                                <option>Approved</option>
                                <option>Reject</option>
                                <option>Banned</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="role">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select" onChange={this.props.handleChange}>
                                <option>Admin</option>
                                <option>User</option>
                                <option>Escort</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={this.props.toggleModal}>
                        Close
                        </button>
                        <button className="btn btn-primary" onClick={this.props.updateStatus}>
                        Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
         );
    }
}
 
export default ModalAdmin;