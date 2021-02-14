import React from 'react'

const FooterLink = (props) => {
    return ( 
        <li>
            <a href={props.href}>{props.children}</a>
        </li>
     );
}
 
export default FooterLink;