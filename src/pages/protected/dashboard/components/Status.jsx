/* eslint-disable */
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';


import ModalAdmin from '../../../../components/modal/ModalAdmin'

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
           },
           pending: [],
           approved: [],
           reject: [],
           banned: [],
           status: ''
         }
        this.updateUserData = this.updateUserData.bind(this);
        this.getUsersFromStatusPending = this.getUsersFromStatusPending.bind(this);
        this.getUsersFromStatusApproved = this.getUsersFromStatusApproved.bind(this);
        this.getUsersFromStatusReject = this.getUsersFromStatusReject.bind(this);
        this.getUsersFromStatusBanned = this.getUsersFromStatusBanned.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    controller = new AbortController();

    updateUserData(id){
        const URI = 'http://159.65.218.115';
        const status = this.state;
        const requestOptions = {
            method: 'PUT',
            //headers: { 'Content-Type': 'application/json' },
            body: status
        };
        fetch(`${URI}/users/${id}`, requestOptions)
            .then(res => {
                if (res.ok === true && res.status === 200){
                    this.toggleModal()
                    this.props.getUsers()
                }
                console.log('Response update: ', res)
            }).catch(err => console.log('Error al tratar de actualizar: ', err))
    }

    componentDidMount(){
        this.getUsersFromStatusPending();
        this.getUsersFromStatusApproved();
        this.getUsersFromStatusReject();
        this.getUsersFromStatusBanned();
    }

    componentDidUpdate(prevState, prevProps){ 
        if(prevState.users !== this.props.users){
            //this.props.getUsers();
        }
    }

    componentWillUnmount(){
        //this.controller.abort()
    }

    toggleModal(){
        this.setState({show: !this.state.show})
    }

    changeStatus(status){
        this.setState({status: status})
    }

    async handleChange(e){
        e.persist();
        await this.setState({form:{...this.state.form, [e.target.name]: e.target.value}})
    }

    getUsersFromStatusPending(){
        const signal = this.controller.signal;
        const URI = 'http://159.65.218.115';
        fetch(`${URI}/users`, { signal })
            .then(res => res.json())
            .then(resJson => {this.setState({pending: resJson.data.filter(e=> e.status === 'pending')})}) 
            .catch(e=>console.log('Error fetch Pending Status: ', e)) 
    }

    getUsersFromStatusApproved(){
        const signal = this.controller.signal;
        const URI = 'http://159.65.218.115';
        fetch(`${URI}/users`, { signal })
            .then(res => res.json())
            .then(resJson => {this.setState({approved: resJson.data.filter(e=> e.status === 'approved')})}) 
            .catch(e=>console.log('Error fetch Pending Status: ', e)) 
    }

    getUsersFromStatusReject(){
        const signal = this.controller.signal;
        const URI = 'http://159.65.218.115';
        fetch(`${URI}/users`, { signal })
            .then(res => res.json())
            .then(resJson => {this.setState({reject: resJson.data.filter(e=> e.status === 'reject')})}) 
            .catch(e=>console.log('Error fetch Pending Status: ', e)) 
    }

    getUsersFromStatusBanned(){
        const signal = this.controller.signal;
        const URI = 'http://159.65.218.115';
        fetch(`${URI}/users`, { signal })
            .then(res => res.json())
            .then(resJson => {this.setState({banned: resJson.data.filter(e=> e.status === 'banned')})}) 
            .catch(e=>console.log('Error fetch Pending Status: ', e)) 
    }

    render() { 
        /*let pending = this.props.users.filter(e=> e.status === 'pending');
        let approved = this.props.users.filter(e=> e.status === 'approved');
        let reject = this.props.users.filter(e=> e.status === 'reject');
        let banned = this.props.users.filter(e=> e.status === 'banned');*/

        const {pending, approved, reject, banned} = this.state;

        /*console.log('Pagination: ', this.props.pagination)
        console.log('ItemsRemaining: ', this.props.pagination.itemsRemaining)
        console.log('PagesRemaining: ', this.props.pagination.pagesRemaining)*/
        //console.log('Pending: ', this.state.pending)
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
                                <td className='text-center'><button className="btn btn-success" onClick={()=>{this.changeStatus('accepted'), this.updateUserData(user.id)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                </button>
                                {"  "}
                                <button className="btn btn-danger" onClick={()=>{this.changeStatus('reject'), this.updateUserData(user.id)}}>
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
                                <td className='text-center'><button color="info" onClick={()=>{this.toggleModal()}}>
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
            <ModalAdmin isOpen={this.state.show} handleChange={this.handleChange} toggleModal={this.toggleModal} updateStatus={this.updateUserData}/>
        </React.Fragment>
         );
    }
}
 
export default Status;