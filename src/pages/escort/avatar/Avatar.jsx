import React from 'react'
import './Avatar.css'

import Title, {SubTitle} from 'partials/title/Title';

const Avatar = () => {
    return ( 
        <div className='row'>
            <div className='mx-auto'>
                <img 
                    className='is-small circle'
                    src="https://41.media.tumblr.com/239d35ff643a2bd62720c36b1aa7eefe/tumblr_ntsyumZcvh1twvy79o1_1280.jpg"
                />
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