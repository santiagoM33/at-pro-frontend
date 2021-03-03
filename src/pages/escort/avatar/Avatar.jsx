import React from 'react'
import './Avatar.css'

import Title, {SubTitle} from 'partials/title/Title';

const Avatar = (props) => {
    //console.log(props.dataImg[1].url)
    return ( 
        <div className='row'>
            <div className='mx-auto'>
                {props.loading 
                        ? <div>Loading...</div>
                        :   <img 
                                className='is-small circle'
                                src={props.dataImg[0].url}
                            />
                    }  
                
                <Title
                    className='text-center mt-3 h3 text-dark'
                >Sofia Denise</Title>
                <SubTitle
                    className='text-danger text-center h5'
                >+54 2236 458787</SubTitle>
                <SubTitle
                    className='text-center h6 text-dark'
                >80-55-85</SubTitle>
             </div>
        </div>
     );
}
 
export default Avatar;