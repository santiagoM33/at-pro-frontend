import React, { Fragment, Component } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import {logout} from 'data/config'

class Panel extends Component {

    constructor(...props){
        super(...props)
        this.state= {
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
    //Buckup de getDataUser
     /*------------------- */

    componentDidUpdate(prevProps,prevState){
        //console.log(this.props,'----------', prevProps)
        if(this.props.user !== prevProps.user) {
            let data = JSON.parse(localStorage.getItem('user'))
            if(data.user.roleId === 2) {
                this.setState({authenticated: true})
            } 
        }
    }
    
    render() {
        //console.log(this.state.authenticated)
        return (
            <Fragment>
                <header className='container bg-light'>
                <div className='row align-items-center'>
                        <div className='col-6 pt-2'>
                                <div className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand ml-3" to="/panel">
                                        <h3 className='h6'>AT PRO</h3>
                                    </Link>
                                </div>
                            
                        </div>
                        <div className='col-3 offset-3 align-self-end'>
                            <Hamburger
                                size={18}
                                label="Show menu"
                                toggled={this.state.isOpen} 
                                toggle={this.handleHamburguer} 
                                onToggle={this.handleClick}
                            />
                        </div>
                    </div>
                    </header>
            <OffCanvas
                width={200}
                transitionDuration={300}
                effect={"push"}
                isMenuOpened={this.state.isMenuOpened}
                position={"left"}
            >
                <OffCanvasBody
                    className='container'
                    style={{ fontSize: "1.4em" }}
                >
                    <div className="d-flex align-items-center p-3 mt-4 text-white-50 bg-purple rounded shadow-sm">
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-header">Bienvenido!!</div>
                            <div className="card-body">
                                <h5 className="card-title">Menu offcanvas</h5>
                                <p className="card-text">No logro integrarlo bien xD</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">
                            Recent updates
                        </h6>
                        <div className="media text-muted pt-3">
                            <svg
                                className="bd-placeholder-img mr-2 rounded"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#007bff"
                                />
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                                    32x32
                                </text>
                            </svg>

                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">
                                    @username
                                </strong>
                                Playing ping pong all night long, everything's
                                all neon and hazy. Yeah, she's so in demand.
                                She's sweet as pie but if you break her heart.
                                But down to earth. It's time to face the music
                                I'm no longer your muse. I guess that I forgot I
                                had a choice.
                            </p>
                        </div>
                        <div className="media text-muted pt-3">
                            <svg
                                className="bd-placeholder-img mr-2 rounded"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#e83e8c"
                                />
                                <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
                                    32x32
                                </text>
                            </svg>

                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">
                                    @username
                                </strong>
                                Standing on the frontline when the bombs start
                                to fall. Heaven is jealous of our love, angels
                                are crying from up above. Can't replace you with
                                a million rings. Boy, when you're with me I'll
                                give you a taste. There’s no going back. Before
                                you met me I was alright but things were kinda
                                heavy. Heavy is the head that wears the crown.
                            </p>
                        </div>
                        <div className="media text-muted pt-3">
                            <svg
                                className="bd-placeholder-img mr-2 rounded"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#6f42c1"
                                />
                                <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
                                    32x32
                                </text>
                            </svg>

                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">
                                    @username
                                </strong>
                                Will you do the same for me? It's time to face
                                the music I'm no longer your muse. Heard it's
                                beautiful, be the judge and my girls gonna take
                                a vote. I can feel a phoenix inside of me.
                                Heaven is jealous of our love, angels are crying
                                from up above. Yeah, you take me to utopia.
                            </p>
                        </div>
                        <small className="d-block text-right mt-3">
                            <a href="#">All updates</a>
                        </small>
                    </div>

                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">
                            Suggestions
                        </h6>
                        <div className="media text-muted pt-3">
                            <svg
                                className="bd-placeholder-img mr-2 rounded"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#007bff"
                                />
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                                    32x32
                                </text>
                            </svg>

                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">
                                        Full Name
                                    </strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <svg
                                className="bd-placeholder-img mr-2 rounded"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#007bff"
                                />
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                                    32x32
                                </text>
                            </svg>

                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">
                                        Full Name
                                    </strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <svg
                                className="bd-placeholder-img mr-2 rounded"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#007bff"
                                />
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                                    32x32
                                </text>
                            </svg>

                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">
                                        Full Name
                                    </strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </div>
                        <small className="d-block text-right mt-3">
                            <a href="#">All suggestions</a>
                        </small>
                    </div>
                </OffCanvasBody>
                <OffCanvasMenu className='container bg-secondary'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col pt-2'>
                                <div className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand ml-3 text-light" to="/panel">
                                        <h3 className='h6'>AT PRO</h3>
                                    </Link>
                                </div>   
                            </div>
                        </div>
                    </div>    
                               
                        <ul className="navbar-nav mr-auto">
                            {this.state.authenticated === true &&
                            <Fragment>
                                <li className="nav-item active">
                                    <NavLink
                                        className="nav-link text-light"
                                        to="#"
                                        activeClassName="active"
                                    >
                                        Dashboard{" "}
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="#">
                                        Notifications
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="#">
                                        Publish
                                    </NavLink>
                                </li>
                            </Fragment>
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="#">
                                    Favorites
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="#">
                                    Switch account
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link text-light dropdown-toggle"
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
                                    <NavLink className="dropdown-item text-light" to="#">
                                        Profile
                                    </NavLink>
                                    <NavLink className="dropdown-item text-light" to="#">
                                        Another action
                                    </NavLink>
                                    <NavLink className="dropdown-item text-light" to="#">
                                        Something else here
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className='nav-link text-light'
                                    to='/login'
                                    onClick={()=> {
                                        logout();
                                        //<Redirect to='login'/>
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
