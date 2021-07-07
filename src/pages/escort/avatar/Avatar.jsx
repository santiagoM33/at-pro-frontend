import React from 'react'
import './Avatar.css'

import Title, {SubTitle} from 'partials/title/Title';

const Avatar = ({user, loading, dataImg, escort}) => {
   
    return ( 
        <div className='row'>
            <div className='pl-5 mx-auto'>
                {loading 
                        ? <div>Loading...</div>
                        :   <img 
                                className='is-small circle'
                                src={!!escort && escort.profilePicture || dataImg }
                            />
                }  
                <Title
                    className='text-center mt-3 h3 text-dark'
                >{!!user && user[0].alias || 'Invitado'}</Title>
                <SubTitle
                    className='text-danger text-center h5'
                >{!!escort && escort[0].phone || 'N/A'}</SubTitle>
                <SubTitle
                    className='text-center h6 text-dark'
                >80-55-85</SubTitle>
             </div>
        </div>
     );
}
 
export default Avatar;