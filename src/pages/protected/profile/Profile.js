import React, { Fragment, Component } from "react";
import Title from "partials/title/Title";
import Row from "partials/row/Row";
import { FormPublish } from "components/form/Form";

import { NavLink, Redirect } from "react-router-dom";

import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { logout } from "data/config";

import Comments from "../panel/components/Comments";
import Suggestions from "../panel/components/Suggestions";
import HomeCards from "../panel/components/HomeCards";

import HeaderPanel from "../panel/components/HeaderPanel";
import HeaderMenuOffcanvas from "../panel/components/HeaderMenuOffcanvas";

class Profile extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            loading: false,
            isMenuOpened: false,
            isOpen: false,
            authenticated: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleHamburguer = this.handleHamburguer.bind(this);
    }

    handleClick() {
        // toggles the menu opened state
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }
    handleHamburguer() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
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
                        className="container"
                        style={{ fontSize: "1.2em" }}
                    >
                        <div className="container-fluid">
                            <Title className="text-center my-3 h3">
                                Informacion Personal
                            </Title>
                            <Row className="col">
                                <form>
                                    <Row className="col-12 mb-3">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                placeholder="Ingresa tu Alias"
                                                className="form-control col-12 ml-3"
                                                name="alias"

                                                //aria-describedby={"fName-error"}
                                                //ref={this.fNameRef}

                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="provincia"
                                                multiple={false}
                                            >
                                                <option selected>
                                                    -- Nacionalidad --
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                placeholder="Documento"
                                                className="form-control col-12 ml-3"
                                                name="documento"

                                                //aria-describedby={"fName-error"}
                                                //ref={this.fNameRef}

                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="barrio"
                                                multiple={false}
                                            >
                                                <option selected>
                                                    --Edad --
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                placeholder="Ingresa tu numero de contacto"
                                                className="form-control col-12 ml-3"
                                                name="celular"

                                                //aria-describedby={"fName-error"}
                                                //ref={this.fNameRef}

                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="ciudad"
                                                multiple={false}
                                            >
                                                <option selected>
                                                    -- Medidas Pecho --
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="barrio"
                                                multiple={false}
                                            >
                                                <option selected>
                                                    -- Medidas Cintura --
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="barrio"
                                                multiple={false}
                                            >
                                                <option selected>
                                                    -- Medidas Cadera --
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </Row>
                                </form>
                            </Row>
                        </div>
                    </OffCanvasBody>
                    <OffCanvasMenu className="container">
                        <HeaderMenuOffcanvas />

                        <ul className="navbar-nav mr-auto">
                            {this.state.authenticated === true && (
                                <Fragment>
                                    <li className="nav-item active mt-3">
                                        <NavLink
                                            className="nav-link text-dark"
                                            to="/panel"
                                            activeClassName="active"
                                        >
                                            Dashboard{" "}
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link text-dark"
                                            to="#"
                                        >
                                            Notifications
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link text-dark"
                                            to="/publish"
                                        >
                                            Publish
                                        </NavLink>
                                    </li>
                                </Fragment>
                            )}
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
                                    <NavLink
                                        className="dropdown-item text-dark"
                                        to="#"
                                    >
                                        Profile
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item text-dark"
                                        to="#"
                                    >
                                        Another action
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item text-dark"
                                        to="#"
                                    >
                                        Something else here
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text-dark"
                                    to="/login"
                                    onClick={() => {
                                        logout();
                                        //Funciona pero me detecta el null en roleID al cerrar session
                                        //<Redirect to='/login'/>
                                        window.location.href = "/login";
                                    }}
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </OffCanvasMenu>
                </OffCanvas>
            </Fragment>
        );
    }
}

export default Profile;