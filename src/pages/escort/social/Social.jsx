import React from 'react'

const Social = () => {
    return ( 
        <div className='row'>
            <div className='col-4 offset-md-1 col-md-3'>
                <span className='offset-5 h5'>30</span>
                <p className='offset-2'>Me gustas</p>
            </div>
            <div className='col-4 offset-md-1 col-md-4'>
                <span className='offset-5 offset-md-3 h5'>20</span>
                <p>Publicaciones</p>
            </div>
            <div className='col-4 col-md-3'>
                <span className='offset-4 offset-md-3 h5'>55</span>
                <p>Seguidores</p>
            </div>
        </div>
     );
}
 
export default Social;