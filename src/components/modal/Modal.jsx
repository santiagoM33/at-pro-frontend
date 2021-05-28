import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class ModalBTN extends React.Component {
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
                <button className={`btn btn-${this.props.color}`} onClick={this.handleShow}>
                {this.props.children}
                </button>
        
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar Usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="change username" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select">
                                <option>Admin</option>
                                <option>User</option>
                                <option>Escort</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={this.handleClose}>
                        Close
                        </button>
                        <button className="btn btn-primary" onClick={this.handleClose}>
                        Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
         );
    }
}
 
export default ModalBTN;