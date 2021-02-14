import React from 'react'

const Link = (props) => {
    return ( 
        <a href={props.href} className={props.className}>{props.children}</a>
     );
}

export const LinkBTN = ({href, type, children}) => {
    return ( 
        <a href={href} className={type}>{children}</a>
     );
}
 
export default Link;