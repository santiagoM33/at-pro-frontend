import React from 'react'

import CardBody from './components/CardBody'
import CardTitle from './components/CardTitle'
import CardText from './components/CardText'

import CardImg from './components/CardImg'
import CardHeader from './components/CardHeader'


const Card = (props) => {
    return ( 
        <div className="card mt-4 mx-2">
            <CardImg 
                src={props.user.thumbnails}
                type='top'
            />
            <CardHeader>{props.user.name}</CardHeader>
            <CardBody>
                <CardTitle>{props.user.titulo}</CardTitle>
                <CardText>{props.user.descripcion}</CardText>
            </CardBody>
        </div>
     );
}
 
export default Card;