import React, { Component } from 'react';
//import Title from 'partials/title/Title';
import Row from 'partials/row/Row';

import Avatar from './avatar/Avatar';
import Contact from './contact/Contact';
import Social from './social/Social';
import PersonalData from './personalData/PersonalData';
import Description from './description/Description';
import NavMedia from './navMedia/NavMedia';

class Escort extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataImg: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png', 
            loading: true
         }
    }
    
    /*controller = new AbortController();

    async componentDidMount(){
        const signal = this.controller.signal;

        const res = await fetch('http://localhost:8005/images', { signal })
        const data = await res.json()
        this.setState({dataImg: data, loading:false});
    }
 
    componentWillUnmount(){this.controller.abort()}*/

    render() { 
        const {users, escorts} = this.props
        let user, escort;
        if(!!users.length && !!escorts.length) {
            user= users.filter(e=>e.id === 16);
            escort = escorts.filter(e=>e.userId === 33)
        }
        console.log('Users: ', users)
        console.log('Escorts', escorts)
        return ( 
            <div className='container'>
                <div className='offset-md-2 col-md-8 mt-3 mt-sm-5 p-2'>                    
                    <Row className='col-12'>
                       <Avatar
                            user={user}
                            escort={escort}
                            dataImg={this.state.dataImg}
                            loading={!this.state.loading}
                       />
                    </Row>
                </div>
                <div className='offset-md-2 col-md-8 mb-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
                    <Row className='col-12'>
                       <Contact escort={escort}/>
                    </Row>
                </div>
                <div className='offset-md-2 col-md-8 my-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
                    <Row className='col-12'>
                       <PersonalData />
                    </Row>
                </div>
                {/*<div className='offset-md-2 col-md-8 my-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
                    <Row className='col-12'>
                        <Social />
                    </Row>
                </div>
                <div className='offset-md-2 col-md-8 my-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
                    <Row className='col-12'>
                        <Description />
                    </Row>
                </div>
                <div className='offset-md-2 col-md-8 my-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
                    <Row className='col-12'>
                        <NavMedia 
                            dataImg={this.state.dataImg}
                            loading={this.state.loading}
                            user={this.props.user}
                            authed={this.props.authed}
                        />
                    </Row>
        </div>*/}
            </div>
         );
    }
}
 
export default Escort;