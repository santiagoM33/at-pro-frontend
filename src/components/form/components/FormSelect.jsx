import React from 'react'
import Label from '../../../partials/label/Label'

const FormSelect = ({attribute, categories, multiple}) => {
    
    const fCategories = categories.filter(elem => elem.id !== 1);

    return ( 
        <div className='input-group mb-3'>
            <Label
                htmlFor={attribute.htmlFor}
            >{attribute.label}</Label>
            <select 
                className="custom-select" 
                id={attribute.id}
                multiple={multiple}
                
            >
                
                {
                    
                    fCategories.map(elem => (
                        <option key={elem.id} value={elem.id}>{elem.name}</option>
                    ))
                }
                
            </select>
        </div>
     );
}
 
export default FormSelect;