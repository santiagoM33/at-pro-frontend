import React from 'react';
import Hamburguer from './components/Hamburguer';
import Collapse from './components/Collapse';
import NavLink from './components/NavLink';
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
                <Collapse id='navbarNav'>
                    
                </Collapse>
            </div>
            <nav>
                <form className="my-1 my-lg-0">
                    <div className="row  input-group">
                        <input className="form-control col-8 col-md-10" type="search" placeholder="¿Donde estas?" aria-label="Search" />
                        <select className="form-control col-4 col-md-2">
                            <option>+ 0 km</option>
                        </select>
                    </div>
                </form>
                <form className="my-1 my-lg-0">
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