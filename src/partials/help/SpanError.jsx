import React from 'react'

const SpanError = (props) => {
    return ( 
        <small id={props.id} className="form-text text-muted">{props.children}</small>
     );
}
 
export default SpanError;