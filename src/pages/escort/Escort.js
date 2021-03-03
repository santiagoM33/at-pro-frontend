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
    
    async componentDidMount(){
        const controller = new AbortController();
        const signal = controller.signal;

        const res = await fetch('http://localhost:8005/images', { signal })
        const data = await res.json()
        this.setState({dataImg: data, loading:false});
    }

    render() { 
        return ( 
            <div className='container'>
                <div className='offset-md-2 col-md-8 mt-3 mt-sm-5 p-2'>                    
                    <Row className='col-12'>
                       <Avatar 
                        dataImg={this.state.dataImg}
                        loading={this.state.loading}
                       />
                    </Row>
                </div>
                <div className='offset-md-2 col-md-8 my-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
                    <Row className='col-12'>
                       <Contact />
                    </Row>
                </div>
                <div className='offset-md-2 col-md-8 my-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
                    <Row className='col-12'>
                       <PersonalData />
                    </Row>
                </div>
                <div className='offset-md-2 col-md-8 my-1 mt-sm-5 p-2 shadow-sm rounded-sm'>                    
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
                        />
                    </Row>
                </div>
        </div>

         );
    }
}
 
export default Escort;