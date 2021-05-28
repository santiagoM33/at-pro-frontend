/* eslint-disable */
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           key: 'pending',
           updateData: false,
           show: false,
           form: {
               id: this.props.users.id,
               user: '',
               email: '',
               status: '',
               role: '',
           }
         }
        this.updateUserData = this.updateUserData.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    updateUserData(id){
        const URI = 'http://159.65.218.115';
        const form = this.state;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: form
        };
        fetch(`${URI}/users/${id}`, requestOptions)
            .then(res => {
                this.toggleModal()
                if (res.ok === true){
                    this.props.getUsers()
                }
                console.log('Response update: ', res)
            }).catch(err => console.log('Error al tratar de actualizar: ', err))
            //.then(data => console.log('Data: ', data));
    }

    componentDidUpdate(prevState, prevProps){
        if(prevState.users !== this.props.users){
            this.props.getUsers();
        }
    }

    toggleModal(){
        this.setState({show: !this.state.show})
    }

    async handleChange(e){
        e.persist();
        await this.setState({form:{...this.state.form, [e.target.name]: e.target.value}})
    }

    render() { 
        let pending = this.props.users.filter(e=> e.status === 'pending');
        let approved = this.props.users.filter(e=> e.status === 'approved');
        let reject = this.props.users.filter(e=> e.status === 'reject');
        let banned = this.props.users.filter(e=> e.status === 'banned');

        const {form} = this.state;

        console.log('USER: ', form)
        return ( 
            <React.Fragment>
            <Tabs activeKey={this.state.key} onSelect={k => this.setState({key: k})} id="controlled-tab-example">
                <Tab eventKey="pending" title="Pending">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Direccion de Email</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { pending.map((user,i)=> {
                            return <tr key={user.id} className='text-center'>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className='text-center'>{user.roleId}</td>
                                <td className='text-center'><button className="btn btn-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                </button>
                                {"  "}
                                <button className="btn btn-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button>
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="approved" title="Approved">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Direccion de Email</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { approved.map((user,i)=> {
                            return <tr key={user.id} className='text-center'>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className='text-center'>{user.roleId}</td>
                                <td className='text-center'><button color="info" onClick={()=>{this.toggleModal(); this.updateUserData(user.id)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="reject" title="Reject">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Direccion de Email</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>  
                        <tbody>
                            { reject.map((user,i)=> {
                            return <tr key={user.id} className='text-center'>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td><button className="btn btn-info" onClick={()=>this.toggleModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>          
                </Tab>
                <Tab eventKey="banned" title="Banned">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Direccion de Email</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>  
                        <tbody>
                            { banned.map((user,i)=> {
                            return <tr key={user.id} className='text-center'>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className='text-center'><button className="btn btn-info" onClick={()=>this.toggleModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>          
                </Tab>
            </Tabs>
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="id">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="#ID" name="id" readOnly value={form.id}/>
                        </Form.Group>
                        <Form.Group controlId="user">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="change username" name="user" onChange={this.handleChange} value={form.user}/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.handleChange} value={form.email}/>
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange}>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Reject</option>
                            <option>Banned</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="role">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange}>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Escort</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={this.toggleModal}>
                    Close
                    </button>
                    <button className="btn btn-primary" onClick={this.updateUserData}>
                    Update
                    </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
         );
    }
}
 
export default Status;