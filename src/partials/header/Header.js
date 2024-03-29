import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Hamburguer from './components/Hamburguer';
import classNames from 'classnames'
import { GoSearch } from "react-icons/go";
import { logout } from "data/config";

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isHome: false,
            isMobile: true
        }
    }   
        
    
    render() {
        const logo = '/images/logo_at_pro.png'
        let component, {history} = this.props;
        switch (history.location.pathname) {
            case '/':
            case '/login':
            case '/register':
            case '/announce':
                component = <header className='border-bottom border-danger'>
                    <div className="navbar navbar-expand-lg navbar-light bg-light">
                        <h1>
                            <Link className="navbar-brand text-dark" to="/">
                                <img src={logo} width="90" height="60"></img>
                            </Link>
                        </h1>
                        <Hamburguer 
                            classNames='dark'
                            target='#navbarNav'
                            controls='navbarNav'
                            toggle='collapse'
                        >
                        </Hamburguer>
                        <div className="collapse navbar-collapse row" id='navbarNav'>
                            <div className={`navbar-nav offset-lg-8 container`} >
                            {this.props.authed === true 
                                ?    <>
                                    <NavLink activeClassName='active' className='text-dark col-4 offset-md-3 col-md-3' to='/dashboard'>Dashboard</NavLink>  
                                    <div className='col-4 col-md-6'>
                                        <NavLink className='nav-link text-dark' to='/login'
                                            onClick={()=> {
                                                this.props.handleLogout()                             
                                                }
                                            }
                                        >Logout</NavLink>
                                    </div>
                                    </> 
                                :    <>
                                    <NavLink activeClassName='active' className='text-dark col-4 col-lg-4' to='/login'>Login</NavLink>  
                                    <NavLink activeClassName='active' className='text-dark col-4 col-lg-4' to='/register'>Register</NavLink>
                                    <div className='col-4 col-lg-4'>
                                        <NavLink activeClassName='active' className='text-light btn btn-danger pl-1' to='/announce'>Announce</NavLink>
                                    </div>
                                    </> 
                                }                  
                            </div>
                        </div>
                    </div>
                </header>
            break;
            case '/dashboard':
            case '/profile':
            case '/publish':
            case '/gallery':
                component = null
            break;
            default:
                component = <header className='border-bottom border-danger'>
                    <div className="navbar navbar-expand-lg navbar-light bg-light">
                        <h1>
                            <Link className="navbar-brand text-dark" to="/">
                                <img src={logo} width="90" height="60"></img>
                            </Link>
                        </h1>
                        <Hamburguer 
                            classNames='dark'
                            target='#navbarNav'
                            controls='navbarNav'
                            toggle='collapse'
                        >
                        </Hamburguer>
                        <div className="collapse navbar-collapse row" id='navbarNav'>
                            <div className='navbar-nav offset-lg-8'>
                                {this.props.authed === true 
                                ?    <>
                                    <NavLink activeClassName='active' className='text-dark col-4 col-lg-4' to='/dashboard'>Dashboard</NavLink>  
                                    <div className='col-4 col-lg-4'>
                                        <NavLink className='nav-link text-dark' to='/login'
                                            onClick={()=> {
                                                this.props.handleLogout()                             
                                                }
                                            }
                                        >Logout</NavLink>
                                    </div>
                                    </> 
                                :    <>
                                    <NavLink activeClassName='active' className='text-dark col-4 col-lg-4' to='/login'>Login</NavLink>  
                                    <NavLink activeClassName='active' className='text-dark col-4 col-lg-4' to='/register'>Register</NavLink>
                                    <div className='col-4 col-lg-4'>
                                        <NavLink activeClassName='active' className='text-light btn btn-danger pl-1' to='/announce'>Announce</NavLink>
                                    </div>
                                    </> 
                                }                    
                            </div>
                        </div>
                    </div>
                </header>
            break;
        }
    return ( 
        <>
            {component}
        </>
     );
    }
}
 
export default withRouter(Header);