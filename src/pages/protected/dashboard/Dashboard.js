import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
//import { createBrowserHistory } from "history";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
//import Comments from './components/Comments'
//import Suggestions from './components/Suggestions'
import HeaderPanel from './components/HeaderPanel'
import HeaderMenuOffcanvas from './components/HeaderMenuOffcanvas'
import Status from "./components/Status";

class Dashboard extends Component {

    constructor(...props){
        super(...props);
        this._isMounted = false;
        this.state= {
            loading: true,
            isMenuOpened: false,
            isOpen: false,
            role: 2,
            authenticated: false,
            isMounted: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleHamburguer = this.handleHamburguer.bind(this);
        this.handleRole = this.handleRole.bind(this);
    }

    handleClick(){this.setState({ isMenuOpened: !this.state.isMenuOpened })}
    handleHamburguer(){this.setState({isOpen: !this.state.isOpen})}

    handleRole(){
        let data = JSON.parse(localStorage.getItem('user'))
        data.roleId === 3 
            ? (
                this.setState({role: data.RoleId}) 
            )
            : (
                this.setState({role: 2})
            )

            if(this.state.role === data.roleId) {
                    this.setState({authenticated: true})
            }
            this.setState({loading: false})
    }

    componentDidMount(){
        this._isMounted = true;
        if( this._isMounted){
            this.handleRole()
        }
        
    }

    /*componentDidUpdate(prevProps, prevState){
        console.log('PrevProps: ', prevProps)
        console.log('PrevState: ', prevState)
        if(prevProps.role !== this.state.role){
           
        }
    }*/
    componentWillUnmount(){this._isMounted = false;}

    
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
                    {<div className='col-12'>
                        Status: {this.props.loggedInStatus}
                    </div>}
                    
                    <Status users={this.props.users} 
                            getUsers={this.props.getUsers} 
                            pagination={this.props.pagination} 
                            token={this.props.token}
                    />
                    

                </OffCanvasBody>
                <OffCanvasMenu className='container'>

                    <HeaderMenuOffcanvas />    
                               
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mt-3">
                                <NavLink
                                    className="nav-link text-dark"
                                    to="/dashboard"
                                    activeClassName="active"
                                >
                                    Dashboard{" "}
                                        <span className="sr-only">(current)</span>
                                </NavLink>
                                    </li>
                            {this.state.authenticated === true &&
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="/notifications">
                                            Notifications
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="/publish">
                                            Publish
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="/gallery">
                                            Gallery
                                        </NavLink>
                                    </li>
                                </Fragment>
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" to="/favorites">
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
                                    className="dropdown-menu bg-light"
                                    aria-labelledby="dropdown01"
                                >
                                    <NavLink className="dropdown-item text-dark" to="/wallet">
                                        Wallet
                                    </NavLink>
                                    <NavLink className="dropdown-item text-dark" to="/profile">
                                        Profile
                                    </NavLink>
                                    <NavLink className="dropdown-item text-dark" to="/about">
                                        About
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className='nav-link text-dark'
                                    to='/login'
                                    onClick={()=> {
                                        this.props.handleLogout()                             
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

export default Dashboard;
