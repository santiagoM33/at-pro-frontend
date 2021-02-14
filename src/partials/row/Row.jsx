import React from 'react'

const Row = (props) => {
    return ( 
        <div className='row'>
            <div className={props.className}>
                {props.children}
            </div>
        </div>
     );
}
 
export default Row;