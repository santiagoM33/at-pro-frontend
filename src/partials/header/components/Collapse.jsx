import React from 'react'

const Collapse = (props) => {
    return ( 
        <div className="collapse navbar-collapse" id={props.id}>
            <div className='navbar-nav'>{props.children}</div>
        </div>
     );
}
 
export default Collapse;