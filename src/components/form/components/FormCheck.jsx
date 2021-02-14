import React from 'react';
import Input from '../../../partials/input/Input';
import Label from '../../../partials/label/Label';


const FormCheck = ({attribute, children, className, htmlFor}) => {
    return ( 
        <div className="form-group form-check">
            <Input 
                type={attribute.type}
                placeholder={attribute.placeholder}
                className={attribute.className}
                id={attribute.id}
                help={attribute.help}
            />
            <Label
                className={className}
                htmlFor={htmlFor}
            >{children}</Label>
        </div>
     );
}
 
export default FormCheck;