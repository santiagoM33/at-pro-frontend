import React, { Component } from "react";
import "./Photos.css";
//import Photo from "./Photo";
import { Image, Transformation, CloudinaryContext, Placeholder } from "cloudinary-react";
//import { makeCancelable, getData } from "services/api";

class Photos extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            dataImg: [],
            loading: true
        };
    }
    

    async componentDidMount(){
        const controller = new AbortController();
        const signal = controller.signal;

        const res = await fetch('http://localhost:8005/images', { signal })
        const data = await res.json()
        this.setState({dataImg: data, loading:false});
    }

    componentWillUnmount(){
        
    }
    

    render() {
        //console.log(this.state.dataImg)
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        if (!this.state.dataImg) {
            return <div>No encontramos imagenes</div>
        }
        return (
            <div>
                <CloudinaryContext cloudName="imagesatpro">
                    <div className='row'>
                        {this.state.dataImg.map((img, i) => {
                            return <div className='col-12 col-sm-10 col-md-4 m-1 m-sm-0' key={img.id} >
                                <Image 
                                    publicId={img.public_id} 
                                    version={img.version} 
                                    dpr="auto"
                                    responsive
                                    width="auto"
                                    responsiveUseBreakpoints="true"
                                    crop="scale"
                                    loading = "lazy"
                                    className='img-cloudinary'
                                >
                                    {/*<Transformation rawTransformation="h_200,w_120,c_fill,e_sepia,r_10" />
                                    <Placeholder  type = "blur"  /> */}
                                </Image>
                            </div>
                        })}
                    </div>
                </CloudinaryContext>
            </div>
        );
    }
}

export default Photos;
