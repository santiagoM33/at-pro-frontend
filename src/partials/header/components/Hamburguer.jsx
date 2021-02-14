import React from 'react'

const Hamburguer = (props) => {
    return ( 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={props.target} aria-controls={props.controls} aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
     );
}
 
export default Hamburguer;