import React, {Fragment} from 'react'
 
const FormGroup = ({attribute, onHandleChange, value}) => {
    return ( 
        <Fragment>
            <input 
                type={attribute.type}
                placeholder={attribute.placeholder}
                className={attribute.className}

                id={attribute.id}
                name={attribute.name}
                aria-describedby={attribute.help} 

                value={value}
                onChange={onHandleChange}
            />
        </Fragment>
     );
}
 
export default FormGroup;