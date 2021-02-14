import React from 'react'
import Input from '../../../partials/input/Input'
import SpanError from '../../../partials/help/Help'
 
const FormGroup = ({attribute, spanError, children, onHandleChange}, props) => {
    return ( 
        <div className="form-group">
            <Input 
                type={attribute.type}
                placeholder={attribute.placeholder}
                className={attribute.className}

                id={attribute.id}
                name={attribute.name}
                value={props.value}

                onHandleChange={onHandleChange}
                help={attribute.help}

            />
            <SpanError
                id={spanError}
            >{children}</SpanError>
        </div>
     );
}
 
export default FormGroup;