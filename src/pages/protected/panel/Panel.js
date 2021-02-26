import React, { Fragment, Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import {logout} from 'data/config'

import Comments from './components/Comments'
import Suggestions from './components/Suggestions'
import HomeCards from './components/HomeCards'

import HeaderPanel from './components/HeaderPanel'
import HeaderMenuOffcanvas from './components/HeaderMenuOffcanvas'

class Panel extends Component {

    constructor(...props){
        super(...props)
        this.state= {
            loading: false,
            isMenuOpened: false,
            isOpen: false,
            authenticated: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleHamburguer = this.handleHamburguer.bind(this);
    }

    handleClick() {
        // toggles the menu opened state
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
      }
    handleHamburguer() {
        this.setState({isOpen: !this.state.isOpen})
    }

    
    /*------------------- */
    //
     /*------------------- */

    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('user'))
            if(data.roleId === 2) {
                this.setState({authenticated: true})
            }
    }

    render() {
        return this.state.loading === true
        ? <h2>Cargando...</h2>
        : (
            <Fragment>
                <HeaderPanel 
                    toggled={this.state.isOpen} 
                    toggle={this.handleHamburguer} 
                    onToggle={this.handleClick} 
                />
            <OffCanvas
                width={200}
                transitionDuration={300}
                effect={"push"}
                isMenuOpened={this.state.isMenuOpened}
                position={"left"}
            >
                <OffCanvasBody
                    className='container'
                    style={{ fontSize: "1.2em" }}
                >
                    
                    <Comments />

                    <Suggestions />

                </OffCanvasBody>
                <OffCanvasMenu className='container'>

                    <HeaderMenuOffcanvas />    
                               
                        <ul className="navbar-nav mr-auto">
                            {this.state.authenticated === true &&
                                <Fragment>
                                    <li className="nav-item active mt-3">
                                        <NavLink
                                            className="nav-link text-dark"
                                            to="/panel"
                                            activeClassName="active"
                                        >
                                            Dashboard{" "}
                                            <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="#">
                                            Notifications
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="/publish">
                                            Publish
                                        </NavLink>
                                    </li>
                                </Fragment>
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" to="#">
                                    Favorites
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" to="#">
                                    Switch account
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link text-dark dropdown-toggle"
                                    to="#"
                                    id="dropdown01"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Settings
                                </NavLink>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdown01"
                                >
                                    <NavLink className="dropdown-item text-dark" to="#">
                                        Profile
                                    </NavLink>
                                    <NavLink className="dropdown-item text-dark" to="#">
                                        Another action
                                    </NavLink>
                                    <NavLink className="dropdown-item text-dark" to="#">
                                        Something else here
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className='nav-link text-dark'
                                    to='/login'
                                    onClick={()=> {
                                        logout();
                                        //Funciona pero me detecta el null en roleID al cerrar session
                                        /*this.props.resetUser();
                                        <Redirect to='/logout'/>*/
                    
                                        window.location.href ='/login';
                                        }
                                    }
                                >
                                Logout</NavLink>
                            </li>
                        </ul>
                </OffCanvasMenu>
            </OffCanvas>
        </Fragment>
        );
    }
}

export default Panel;
