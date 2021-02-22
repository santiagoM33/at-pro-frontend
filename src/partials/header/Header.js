import React, { Fragment, Component } from 'react';
import Hamburguer from './components/Hamburguer';
import {Link} from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { logout } from "../../data/config";

class Header extends Component {

    state = {
        isHome: false
    }

    componentDidMount() {
        // Actualiza el título del documento usando la API del navegador
        if (window.location.pathname === '/') {
            this.setState({isHome: true})
        } else {
            this.setState({isHome: false})
        }
      };
    
        
    
    render() {
        //console.log(this.state.isHome)
    return ( 
        <header>
            <div className="navbar navbar-expand-lg navbar-light bg-secondary">
                <h1><Link className="navbar-brand text-light" to="/home">{this.props.children}</Link></h1>
                <Hamburguer 
                    classNames='light'
                    target='#navbarNav'
                    controls='navbarNav'
                    toggle='collapse'
                >
                </Hamburguer>
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <div className='navbar-nav'>
                        <Link className='text-light' to='/'>Home</Link>
                        <Link className='text-light' to='/register'>Register</Link>
                        <Link className='text-light' to='/login'>Login</Link>
                        {/*
                            this.props.user
                            ?
                                <Fragment>
                                    <Link className='text-light' to='/panel'>Panel de control</Link>
                                    <Link 
                                        className='text-light' 
                                        to='/logout'
                                        onClick={()=> {
                                            logout();
                                            //this.setState({authed:false})
                                            this.props.onHandleClick()
                                        }}
                                    >Logout</Link>
                                </Fragment>
                            :
                                <Fragment>
                                    <Link className='text-light' to='/register'>Register</Link>
                                    <Link className='text-light' to='/login'>Login</Link>
                                </Fragment>
                                    */}
                        
                    </div>
                </div>
            </div>
            { this.state.isHome === true &&
            <nav>
                <form className="pl-4 ml-2 my-1 my-lg-0">
                    <div className="row  input-group">
                        <input className="form-control col-8 col-md-10" type="search" placeholder="¿Donde estas?" aria-label="Search" />
                        <select className="form-control col-4 col-md-2">
                            <option>+ 0 km</option>
                            <option>+ 5 km</option>
                            <option>+ 10 km</option>
                            <option>+ 15 km</option>
                            <option>+ 20 km</option>
                        </select>
                    </div>
                </form>
                <form className="pl-4 ml-2 my-1 my-lg-0">
                <div className="row input-group">
                        <input className="form-control mr-sm-2 col-10 col-md-11" type="search" placeholder="Search" aria-label="Search" />                       
                        <button className="btn btn-success my-sm-0 col-2 col-md-1" type="submit"><GoSearch /></button>
                    </div>                    
                </form>
            </nav>
            }
        </header>
     );
    }
}

export const HeaderLog = (props) => {
    return ( 
        <header>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <h1><Link className="navbar-brand" to="#">{props.children}</Link></h1>
            </div>
        </header>
     );
}

 
 
 
export default Header;