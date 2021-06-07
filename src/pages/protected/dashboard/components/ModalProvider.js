import React from 'react';
import { getUserStatus } from 'services/api'

const ModalContext = React.createContext();

class ModalProvider extends React.Component {
    state = { 
        form: {
            id: '',
            alias: '',
            email: '',
            status: '',
            role: '',
        }
     }

    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted){
            getUserStatus().then(res => {
                this.setState({form: {
                    id: res.data.id,
                    alias: res.data.alias,
                    email: res.data.email,
                    status: res.data.status,
                    roleId: res.data.roleId,
                }})
            })
            .catch(e=>console.log('Error fetch Status: ', e)) 
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    
    render() { 
        return ( 
            <ModalContext.Provider value={{
                state: this.state.form
            }}>
                {this.props.children}
            </ModalContext.Provider>
         );
    }
}
 
export default ModalProvider;