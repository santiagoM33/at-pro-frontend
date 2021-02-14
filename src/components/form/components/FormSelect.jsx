import React from 'react'
import Label from '../../../partials/label/Label'
import Option from '../../../partials/formOption/option'

const FormSelect = ({attribute, children}) => {
    return ( 
        <div className="form-group">
            <Label
                htmlFor={attribute.htmlFor}
            >{attribute.label}</Label>
            <select className="form-control" id={attribute.id}>
                <Option>{children}</Option>
            </select>
        </div>
     );
}
 
export default FormSelect;