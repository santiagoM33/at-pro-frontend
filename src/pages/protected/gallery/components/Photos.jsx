import React, { Component } from "react";
//import Photo from "./Photo";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <CloudinaryContext cloudName="imagesatpro">
                    <div className='row'>
                        <div className='col-6'>
                            <Image publicId="https://res.cloudinary.com/imagesatpro/image/upload/v1614456387/zqwwkfgjd5yiwq0euzgg.jpg" width="150" crop="scale" />
                        </div>
                        <div className='col-6'>
                            <Image publicId="https://res.cloudinary.com/imagesatpro/image/upload/v1614456433/syzdgclp29qpo6htwktg.jpg" width="150" crop="scale" />
                        </div>
                        <div className='col-6'>
                            <Image publicId="https://res.cloudinary.com/imagesatpro/image/upload/v1614456454/yfigkt39sw9htnml9ihh.jpg" width="150" crop="scale" />
                        </div>
                    </div>
                </CloudinaryContext>
            </div>
        );
    }
}

export default Photos;
