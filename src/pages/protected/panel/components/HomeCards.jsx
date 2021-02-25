import React,{Component} from 'react'
import HomeCard from './HomeCard'

class HomeCards extends Component {
    constructor(...props) {
        super(...props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row rounded shadow-sm my-2 card-group">
                
                    <HomeCard 
                        title='+ 103 me gustas'
                        message='Sus fotos tienen nuevos me gustas'
                        color='primary'
                    />
               
                    <HomeCard 
                        title='+ 103 me gustas'
                        message='Sus fotos tienen nuevos me gustas'
                        color='warning'
                    />
                    <HomeCard 
                        title='+ 103 me gustas'
                        message='Sus fotos tienen nuevos me gustas'
                        color='danger'
                    />
               
                    <HomeCard 
                        title='+ 103 me gustas'
                        message='Sus fotos tienen nuevos me gustas'
                        color='success'
                    />
            
            </div>
         );
    }
}
 
export default HomeCards;