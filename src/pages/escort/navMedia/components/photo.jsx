import React from 'react'
import './photo'

const Photo = (props) => {
    //console.log(props.dataImg)
    return (  
        <div className='row'>
            {props.dataImg.map(img=> {
                return (
                        <div className='col-4 photo' key={img.id} >
                            <img  src={img.url} className="img-fluid mb-2"/>
                        </div>
                        )
            }) 
            }
        </div>
     );
}
 
export default Photo;