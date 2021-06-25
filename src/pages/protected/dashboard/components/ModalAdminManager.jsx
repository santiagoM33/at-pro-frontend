import React from 'react';
import PropTypes from 'prop-types';
import ModalAdmin from './ModalAdmin';
import { getUserStatus } from 'services/api'

class ModalAdminManager extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        onToggleModal: PropTypes.func,
    }
    
    static defaultProps = {
        isOpen: false,
        onToggleModal: () => { },
    }

    constructor(props) {
        super(props);
        this.state = { 
            users: []
         }
    }

    _isMounted = false;
    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted){
            getUserStatus().then(res => {
                    this.props.getDataStatus(res)
                    this.setState({users: res.data})
                })
                .catch(e=>console.log('Error fetch Status: ', e)) 
            }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render() { 
        return ( 
            <ModalAdmin 
                isOpen={this.props.open} 
                onToggleModal={this.props.toggleModal} 
                handleChange={this.props.handleChange} 
                updateUserData={this.props.updateUserData}
                status={this.props.status}
                form={this.props.form}
            />
         );
    }
}
 
export default ModalAdminManager;