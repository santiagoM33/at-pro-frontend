import React, { Component } from 'react';
//import Title from 'partials/title/Title';
import Row from 'partials/row/Row';

import Avatar from './avatar/Avatar';
import Contact from './contact/Contact';
import Social from './social/Social';
import PersonalData from './personalData/PersonalData';

class Escort extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container'>
                <div className='offset-md-2 col-md-8 mt-3 mt-sm-5 p-2'>                    
                    <Row className='col-12'>
                       <Avatar />
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
        </div>

         );
    }
}
 
export default Escort;