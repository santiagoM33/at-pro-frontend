import React, { Fragment } from 'react';
import Hamburguer from './components/Hamburguer';
import {Link} from 'react-router-dom';
import { GoSearch } from "react-icons/go";

const Header = (props) => {
    return ( 
        <header>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <h1><a className="navbar-brand" href="#">{props.children}</a></h1>
                <Hamburguer 
                    target='#navbarNav'
                    controls='navbarNav'
                >
                </Hamburguer>
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <div className='navbar-nav'>
                        <Link to='/'>Home</Link>
                        {
                            props.authed
                            ?
                                <Fragment>
                                    <Link to='/panel'>Panel de control</Link>
                                    <Link 
                                        to='/logout'
                                        onClick={()=> {
                                            //logout();
                                            this.setState({authed:false})
                                            this.props.onHandleClick()
                                        }}
                                    >Logout</Link>
                                </Fragment>
                            :
                                <Fragment>
                                    <Link to='/register'>Register</Link>
                                    <Link to='/login'>Login</Link>
                                </Fragment>
                        }
                        
                    </div>
                </div>
            </div>
            
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
        </header>
     );
}

export const HeaderLog = (props) => {
    return ( 
        <header>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <h1><a className="navbar-brand" href="#">{props.children}</a></h1>
            </div>
        </header>
     );
}
 
 
 
export default Header;