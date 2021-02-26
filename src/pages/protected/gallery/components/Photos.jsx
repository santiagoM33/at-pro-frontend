import React, { Component } from 'react'
import Photo from './Photo'

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Photo />
            </div>
         );
    }
}
 
export default Photos;