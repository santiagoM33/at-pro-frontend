import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';



const Button = ({type, style, children}) => {
    return ( 
        <button type={type} className={classnames('btn',{
            [`btn-${style}`] : style
        })}>
        {children}</button>
     );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOf(['primary', 'secondary'])
}

Button.defautProps = {
    type: 'button',
    style: 'primary'
}
 
export default Button;