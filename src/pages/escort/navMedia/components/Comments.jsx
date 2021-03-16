import React, {Component} from 'react'
import Comment from './Comment'


class Comments extends Component {
    constructor(...props) {
        super(...props);
        this.state = { 
            comments: []
        }
        this.pullComments = this.pullComments.bind(this)
    }

    pullComments(){
        const BASE_URI = 'http://localhost:8010';
        
        fetch(`${BASE_URI}/comments`).then(res=> {return res.json()})
            .then(resJson => 
                this.setState({comments: resJson})
            )
            .catch(err=>console.log('No es posible traer los datos de la db comments', err))
    }

    componentDidMount(){
        this.pullComments()
    }

    componentDidUpdate(prevProps,prevState){
        console.log('State: ',this.state.comments)
        console.log('Prev: ',prevState)
        //if(this.state.comments[0].id !== prevState.comments.id){
            //this.pullComments()
        //}
        /*console.log(this.state.comments[0].id)
        console.log(prevState.comments.id)*/
    }

    render() { 
        return ( 
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">
                            Comentarios
                </h6>
                {this.state.comments.map(data => {
                    return <Comment 
                        key={data.id} 
                        user='santiagoM'
                        message={data.comment}
                        colorImg='#007bff'
                    />
                })}
            </div>
         );
    }
}
 
export default Comments;