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
        this.state = {  }
    }

    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted){
            getUserStatus().then(res => {
                    this.props.getDataStatus(res)
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
                handleChange={this.props.handleChange} 
                onToggleModal={this.props.toggleModal} 
                updateStatus={this.props.updateUserData}
                formData={this.props.form}
                status={this.props.status}
            />
         );
    }
}
 
export default ModalAdminManager;