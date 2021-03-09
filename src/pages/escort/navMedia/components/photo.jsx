import React from 'react'
import './photo.css'

const Photo = (props) => {
    //console.log(props.dataImg)
    return (  
        <div className='gallery'>
            {props.dataImg.map(img=> {
                return (
                    <img  key={img.id} src={img.url}/>
                )
            }) 
            }
        </div>
     );
}
 
export default Photo;