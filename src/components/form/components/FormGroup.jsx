import React from 'react'
import Input from '../../../partials/input/Input'
import HelpInput from '../../../partials/help/Help'
 
const FormGroup = ({attribute, helpId, children, onHandleChange}, props) => {
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
            <HelpInput
                id={helpId}
            >{children}</HelpInput>
        </div>
     );
}
 
export default FormGroup;