/* eslint-disable */
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

import ModalAdminManager from './ModalAdminManager';

/*import PaginationPending from './PaginationPending';
import PaginationApproved from './PaginationApproved';
import PaginationRejected from './PaginationRejected';
import PaginationBanned from './PaginationBanned';*/
import StatusRow from './StatusRow';

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
               roleId: '',
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
           },
           statusUpdate: ''
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
    //Idea fumado: Hacer un swith de cada getStatus en cada case y compara con el valor que deseo buscar,
    //la idea es que solo llame a la api dependiendo de la llamada que desea realizar

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

    /*switch (status) {
        case 'pending':

            break;
    
        default:
            break;
    }*/

    catchUser= user => {
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
        /*const citas = [...this.props.users]
        console.log('Usuarios', citas)*/
        //console.log('Form catch user data: ', this.state.form)
        return ( 
            <React.Fragment>
            <Tabs activeKey={this.state.key} onSelect={k => this.setState({key: k})} id="controlled-tab-example">
                <Tab eventKey="pending" title="Pending">
                { !!pending.length ?
                    <React.Fragment>
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
                                return <StatusRow 
                                            user={user} 
                                            index={i}
                                            catchUser={this.catchUser}
                                            toggleShow={this.toggleModal}
                                        />
                                })}
                            </tbody>
                        </Table>
                        {/*<PaginationPending data={this.state.data} status={this.state.status}/>*/}
                    </React.Fragment>
                    : <div className='text-center'>No hay elementos que mostrar</div>} 
                </Tab>
                <Tab eventKey="approved" title="Approved">
                { !!approved.length ?
                    <React.Fragment>
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
                            return <StatusRow 
                                        user={user} 
                                        index={i}
                                        catchUser={this.catchUser}
                                        toggleShow={this.toggleModal}
                                    />
                            })}
                        </tbody>
                    </Table>
                    {/*<PaginationApproved data={this.state.data} status={this.state.status}/>*/}
                    </React.Fragment>
                    : <div className='text-center'>No hay elementos que mostrar</div>} 
                </Tab>
                <Tab eventKey="rejected" title="Rejected">
                { !!rejected.length ?
                    <React.Fragment>
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
                                return <StatusRow 
                                            user={user} 
                                            index={i}
                                            catchUser={this.catchUser}
                                            toggleShow={this.toggleModal}
                                        />
                            })}
                        </tbody>
                    </Table>
                    {/*<PaginationRejected data={this.state.data} status={this.state.status}/> */}
                    </React.Fragment>
                    : <div className='text-center'>No hay elementos que mostrar</div>}         
                </Tab>
                <Tab eventKey="banned" title="Banned">
                    {!!banned.length ? 
                        <React.Fragment>
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
                                    { banned.map((user,i)=> {
                                        return <StatusRow 
                                                    user={user} 
                                                    index={i}
                                                    catchUser={this.catchUser}
                                                    toggleShow={this.toggleModal}
                                                />
                                        })
                                    }
                                </tbody>
                            </Table>
                           {/*} <PaginationBanned data={this.state.data} status={this.state.status}/>*/}
                        </React.Fragment>
                    : <div className='text-center'>No hay elementos que mostrar</div>}        
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