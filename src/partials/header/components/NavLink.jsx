import React from 'react';
import classnames from 'classnames';


const NavLink = (props) => {
    return ( 
        <a className={classnames('nav-link', {
            'active' : true
        })} href="#">{props.children}</a>
     );
}
 
export default NavLink;