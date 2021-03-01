import React, { Component } from 'react';
import Title from 'partials/title/Title';
import Row from 'partials/row/Row';

class Escort extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container'>
                <div className='offset-md-2 col-md-8 card my-3 mt-sm-5 p-2 shadow-sm rounded-sm'>
                    <Title
                        className='text-center my-3 h5 text-dark'
                    >Escort Name</Title>
                    
                    <Row className='col-12'>
                       
                    </Row>
                </div>
        </div>

         );
    }
}
 
export default Escort;