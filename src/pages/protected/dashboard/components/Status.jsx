/* eslint-disable */
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

import { updateUserData } from '../../../../services/api'

import ModalAdminManager from './ModalAdminManager';

import PaginationPending from './PaginationPending';
import PaginationApproved from './PaginationApproved';
import PaginationRejected from './PaginationRejected';
import PaginationBanned from './PaginationBanned';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = { 
           key: 'pending',
           updateData: false,
           show: false,
           form: {
               id: '',
               alias: '',
               email: '',
               status: '',
               role: '',
           },
           status: {
                pending: [],
                approved: [],
                rejected: [],
                banned: []
           },
           data: {
            items: 0,
            pages: 0
           }
        }
           
        /*this.getUsersFromStatusPending = this.getUsersFromStatusPending.bind(this);
        this.getUsersFromStatusApproved = this.getUsersFromStatusApproved.bind(this);
        this.getUsersFromStatusReject = this.getUsersFromStatusReject.bind(this);
        this.getUsersFromStatusBanned = this.getUsersFromStatusBanned.bind(this);*/
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getDataStatus = this.getDataStatus.bind(this);
    }

    toggleModal(){
        this.setState({show: !this.state.show})
    }

    handleChange(e){
        e.persist();
        this.setState({form:{...this.state.form, [e.target.name]: e.target.value}})
    }

    getDataStatus(status){
        this.setState({status: {
            pending: status.data.filter(e=> e.status === 'pending'),
            approved: status.data.filter(e=> e.status === 'approved'),
            rejected: status.data.filter(e=> e.status === 'rejected'),
            banned: status.data.filter(e=> e.status === 'banned'),
        },
        data: {items: status.itemsRemaining, pages: status.pagesRemaining}
        })
    }

    catchUser=(user)=>{
        this.setState({form:{
            id: user.id, 
            alias: user.alias, 
            email: user.email, 
            status: user.status, 
            roleId: user.roleId}
        })
    }

    /*getUsersFromStatusPending(){
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
    }*/

    render() { 
        /*let pending = this.props.users.filter(e=> e.status === 'pending');
        let approved = this.props.users.filter(e=> e.status === 'approved');
        let reject = this.props.users.filter(e=> e.status === 'reject');
        let banned = this.props.users.filter(e=> e.status === 'banned');*/
        const {pending, approved, rejected, banned} = this.state.status;
        //console.log('Form: ', this.state.form)
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
                                <td className='text-center'><button className="btn btn-success" onClick={()=>updateUserData(user.id, {status:'approved'})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                </button>
                                {"  "}
                                <button className="btn btn-danger" onClick={()=>updateUserData(user.id, {status:'rejected'})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button>
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </Table>
                    <PaginationPending data={this.state.data} status={this.state.status}/>
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
                                <td className='text-center'><button className="btn btn-info" onClick={()=> this.setState({show: !this.state.show}), ()=> this.catchUser(user)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                    <PaginationApproved data={this.state.data} status={this.state.status}/>
                </Tab>
                <Tab eventKey="rejected" title="Rejected">
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
                            { rejected.map((user,i)=> {
                            return <tr key={user.id} className='text-center'>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className='text-center'>{user.roleId}</td>
                                <td><button className="btn btn-info" onClick={()=> this.setState({show: !this.state.show}), ()=> this.catchUser(user)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                    <PaginationRejected data={this.state.data} status={this.state.status}/>          
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
                                <td className='text-center'><button className="btn btn-info" onClick={()=> this.setState({show: !this.state.show}), ()=> this.catchUser(user)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                    <PaginationBanned data={this.state.data} status={this.state.status}/>          
                </Tab>
            </Tabs>
            <ModalAdminManager 
                open={this.state.show} 
                toggleModal={()=> this.setState({show: !this.state.show})} 
                handleChange={this.handleChange} 
                updateStatus={this.updateUserData} 
                status={this.state.status} 
                getDataStatus={this.getDataStatus} 
                dataUsers={this.getDataUsers}
                form={this.state.form}
            />
        </React.Fragment>
         );
    }
}
 
export default Status;