import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';


class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           key: 'pending'
         }
        this.updateUserStatus = this.updateUserStatus.bind(this)
    }

    updateUserStatus(id){
        const URI = 'http://159.65.218.115';
        /*fetch(`${URI}/users/${id}`)
            .then(res => res.json())
            .then(resJson => console.log('Info Id: ', resJson))
            .catch(e=>console.log('Error fetch Escorts: ', e)) */
             // Simple PUT request with a JSON body using fetch
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            /*headers: {
                authorization: `Bearer ${accessToken}`,
            }*/
        };
        fetch(`${URI}/users/${id}`, requestOptions)
            .then(response => console.log(response))
            //.then(data => console.log('Data: ', data));
    }

    componentDidUpdate(prevState, prevProps){
        if(prevState.users !== this.props.users){
            this.props.getUsers()
        }
    }

    render() { 
        let pending = this.props.users.filter(e=> e.status === 'pending');
        let approved = this.props.users.filter(e=> e.status === 'approved');
        let reject = this.props.users.filter(e=> e.status === 'reject');
        let banned = this.props.users.filter(e=> e.status === 'banned');
        return ( 
            <Tabs activeKey={this.state.key} onSelect={k => this.setState({key: k})} transition={false} id="controlled-tab-example">
                <Tab eventKey="pending" title="Pending">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { pending.map((user,i)=> {
                            return <tr key={user.id}>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { approved.map((user,i)=> {
                            return <tr key={user.id}>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className='text-center'><button className="btn btn-info" onClick={()=>this.updateUserStatus(user.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="reject" title="Reject">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>  
                        <tbody>
                            { reject.map((user,i)=> {
                            return <tr key={user.id}>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className='text-center'><button className="btn btn-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>          
                </Tab>
                <Tab eventKey="banned" title="Banned">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>  
                        <tbody>
                            { banned.map((user,i)=> {
                            return <tr key={user.id}>
                                <td>{i}</td>
                                <td>{user.alias}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className='text-center'><button className="btn btn-info">
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
         );
    }
}
 
export default Status;