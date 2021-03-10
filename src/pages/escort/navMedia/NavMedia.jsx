import React, {Component} from 'react'
import {IoMdPhotos} from 'react-icons/io'
import {FaVideo, FaRegMap} from 'react-icons/fa'
import {AiOutlineComment} from 'react-icons/ai'

import Photo from './components/photo'

import Comments from './components/Comments'
import FormComments from './components/FormComments'

import {saveComment} from 'services/fakeApi'

import {uid} from 'uid'


class NavMedia extends Component {
    constructor(...props){
        super(...props)
        this.state= {
            comment: null,
            commentError: false
        }
        this.onHandleComment = this.onHandleComment.bind(this)
        this.onHandleCommentError = this.onHandleCommentError.bind(this)
        //this.saveComments = this.saveComments.bind(this)
    }

    onHandleComment(value){
        let id = uid();
        saveComment(id, value)
            .then(res => {
                this.setState({comment: value})
                console.log('Registro exitoso', res)
            })
            .catch(err => console.log('Problemas con el registro del comentario', err))
    }

    onHandleCommentError(value){
        this.setState({commentError: value})
    }

    /*saveComments(){
        
    }*/

    render(){
        //console.log(this.state.comment)
        return ( 
            <div>
                <ul className="nav nav-tabs row" id="navMedia" role="tablist">
                    <li className="nav-item col-3 active" role="presentation">
                        <a className="nav-link" id="photos-tab" href="#photos" data-toggle="tab"><IoMdPhotos size={28}/></a>
                    </li>
                    <li className="nav-item col-3" role="presentation">
                        <a className="nav-link" id="videos-tab" href="#videos" data-toggle="tab"><FaVideo size={28}/></a>
                    </li>
                    <li className="nav-item col-3" role="presentation">
                        <a className="nav-link" id="map-tab" href="#map" data-toggle="tab"><FaRegMap size={28} /></a>
                    </li>
                    <li className="nav-item col-3" role="presentation">
                        <a className="nav-link" id="comments-tab" href="#comments" data-toggle="tab"><AiOutlineComment size={28} /></a>
                    </li>
                </ul>
                <div className="tab-content" id="navMedia">
                    <div id="photos" className="tab-pane fade mt-3 show active" role="tabpanel" aria-labelledby="photos-tab">
                        {this.props.loading 
                            ? <div>Loading...</div>
                            :   <Photo 
                                    dataImg={this.props.dataImg}
                                />
                        }  
                    </div>
                    <div id="videos" className="tab-pane fade mt-3" role="tabpanel" aria-labelledby="videos-tab">
                        <h4>Videos</h4>
                        <p>Some content in menu 1.</p>
                    </div>
                    <div id="map" className="tab-pane fade mt-3" role="tabpanel" aria-labelledby="map-tab">
                        <h4>Map</h4>
                        <p>Some content in menu 2.</p>
                    </div>
                    <div id="comments" className="tab-pane fade mt-3" role="tabpanel" aria-labelledby="comments-tab">
                        <h4 className='h5'>Escribe un comentario</h4>
                        {
                            <>
                                <FormComments 
                                    comment={this.state.comment}
                                    onHandleComment={this.onHandleComment}
                                    commentError={this.state.commentError}
                                    onHandleCommentError={this.onHandleCommentError}
                                />
                                <Comments 
                                    comment={this.state.comment}
                                />
                            </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NavMedia;