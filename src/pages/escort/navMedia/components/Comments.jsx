import React, {Component} from 'react'
import Comment from './Comment'


class Comments extends Component {
    constructor(...props) {
        super(...props);
        this.state = {  }
    }

    

    render() { 
        return ( 
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">
                            Comentarios
                </h6>
                {}
                <Comment  
                    user='santiagoM'
                    message={this.props.comment}
                    colorImg='#007bff'
                />
                {/*<Comment 
                    user='Mc Nano'
                    message='Que onda vieja, haciendo componentes con React?'
                    colorImg='#32a84e'
                />*/}
            </div>
         );
    }
}
 
export default Comments;