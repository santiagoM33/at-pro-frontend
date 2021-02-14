import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Alert = ({type, children}) => {
    return ( 
        <div className={classnames('alert',{
            [`alert-${type}`] : type
        })} 
            role="alert"
        >
        {children}</div>
     );
}

export const AlertLink = ({href, children}) => {
    return (
        <Fragment>
            <a href={href} className="alert-link">{children}</a>
        </Fragment>
    )
}

export const AlertHeading = ({children}) => {
    return (
        <Fragment>
            <h4 class="alert-heading">{children}</h4>
        </Fragment>
    )
}

export const AlertInfo = ({pos, children}) => {
    return (
        <Fragment>
            <p class={pos}>{children}</p>
        </Fragment>
    )
}

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary'])
};

Alert.defaultProps = {
    type: 'primary'
};

AlertInfo.defaultProps = {
    pos: 'mb-0'
}

export default Alert;