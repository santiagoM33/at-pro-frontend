import React, { Component } from 'react'
import './Avatar.css'

class Avatar extends Component {
    constructor(...props){
        super(...props)
        this.state={
            enabled: true
        }
    }

    render() {
        let pictureClassName = '';
        if(size === 'small') {
            pictureClassName = 'is-small rounded-circle'
        } else if (size === 'large') {
            pictureClassName = 'is-large rounded-circle'
        }

        const imgClassName = this.state.enabled ? '' : 'disabled';
    return ( 
            <picture className={pictureClassName}>
                {id ? 
                    (
                        <img 
                            onClick={() => {
                                this.setState({enabled: !this.state.enabled})
                            }}
                            className={this.props.imgClassName}
                            src={this.props.src} 
                            size='small'
                        />
                    )
                    : 
                    (
                        <img 
                            src="https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg" 
                            alt="Desconocido/a"
                        />
                    )
                }
                <strong>{enabled ? Name : 'Desactivado/a'}</strong>
            </picture>
        );
    }
    static defaultProps = {
        Name: "Invitado/a",        
    }
    
}
 
export default Avatar;
