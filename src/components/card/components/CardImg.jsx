import React from 'react';
import classnames from 'classnames'

const CardImg = ({src, type, alt}) => {
    return (
        <img src={src} className={classnames({
            [`card-img-${type}`] : type
        })} alt={alt} />
    )
}

export default CardImg;