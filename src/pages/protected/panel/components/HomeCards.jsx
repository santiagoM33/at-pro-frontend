import React,{Component} from 'react'
import HomeCard from './HomeCard'

class HomeCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row text-white-50 rounded shadow-sm">
                <HomeCard 
                    name='Santiago Monaco'
                    message='Parece que ahora lo puedo personalizar un poco mas'
                />
            </div>
         );
    }
}
 
export default HomeCards;