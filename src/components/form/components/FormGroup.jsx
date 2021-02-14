import React from 'react'
//import Input from '../../../partials/input/Input'
import SpanError from '../../../partials/help/SpanError'
 
const FormGroup = ({attribute, spanError, children, onHandleChange}, props) => {
    return ( 
        <div className="col-12 form-group">
            <input 
                type={attribute.type}
                placeholder={attribute.placeholder}
                className={attribute.className}

                id={attribute.id}
                name={attribute.name}
                aria-describedby={attribute.help} 

                value={props.value}
                onChange={onHandleChange}
                

            />
            <SpanError
                id={spanError}
            >{children}</SpanError>
        </div>
     );
}
 
export default FormGroup;