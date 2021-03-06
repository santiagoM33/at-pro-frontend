import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';



const Button = ({type, style, block, color, signIn,children}) => {
    return ( 
        <button type={type} onClick={signIn} className={classnames('btn',{
            [`btn-${style}`] : style,
            [`btn-${block}`] : block,
            [`bg-${color}`] : color

        })}>
        {children}</button>
     );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    //style: PropTypes.oneOf(['primary', 'secondary'])
}

Button.defautProps = {
    type: 'button',
    style: 'primary',
    block: 'block'
}
 
export default Button;