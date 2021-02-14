import React from 'react'
 
const Input = (props) => {
    return ( 
        <input 
            type={props.type} 
            className={props.className} 
            placeholder={props.placeholder}

            id={props.id} 
            name={props.name}
            value={props.value}
            
            aria-describedby={props.help} 
            onChange={props.onHandleChange}
        />
     );
}
 
export default Input;