/* eslint-disable */
import React from 'react';
import { updateUserData } from 'services/api'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class ModalAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    

    render() {
        const { form } = this.props;
        return (
            <>
                <Modal isOpen={this.props.isOpen} toggle={this.props.onToggleModal}>
                    <ModalHeader toggle={this.props.onToggleModal}>Update User Info</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="id" hidden>ID</Label>
                                <Input type="text" name="id" id="id" readOnly/>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="alias">Username</Label>
                                        <Input type="text" name="alias" id="alias" onChange={this.props.handleChange} placeholder="with a placeholder"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" id="email" onChange={this.props.handleChange} placeholder="email placeholder"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="status">Status</Label>
                                <Input type="select" name="status" id="status" onChange={this.props.handleChange}>
                                <option>Pending</option>
                                <option>Approved</option>
                                <option>Reject</option>
                                <option>Banned</option>

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="role">Role</Label>
                                <Input type="select" name="role" id="role" onChange={this.props.handleChange} value={form.roleId}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                </Input>
                            </FormGroup>
                        </Form> 
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>updateUserData(form.id, form)}>Update</Button>{' '}
                        <Button color="secondary" onClick={this.props.onToggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                {/*<button className={`btn btn-${this.props.color}`} onClick={this.handleShow}>
                {this.props.children}
        </button>*/}

                {/*} <Modal show={this.props.isOpen} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar Usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="id">
                                <Form.Label>ID</Form.Label>
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
                        <button className="btn btn-secondary" onClick={this.props.onToggleModal}>
                        Close
                        </button>
                        <button className="btn btn-primary" onClick={this.props.updateStatus}>
                        Save Changes
                        </button>
                    </Modal.Footer>
    </Modal>*/}
            </>
        );
    }
}

export default ModalAdmin;