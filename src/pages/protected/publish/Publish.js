import React, { Fragment, Component } from "react";
import Title from "../../../partials/title/Title";
import Row from "../../../partials/row/Row";

import { NavLink, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { logout } from "../../../data/config";

import HeaderPanel from "../dashboard/components/HeaderPanel";
import HeaderMenuOffcanvas from "../dashboard/components/HeaderMenuOffcanvas";

class Publish extends Component {
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
        const history = createBrowserHistory();
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
                                Publicar Anuncio
                            </Title>
                            <Row className="col">
                                <form>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="provincia"
                                                multiple={false}
                                            >
                                                <option defaultValue>
                                                    -- Elige una Provincia --
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
                                                name="ciudad"
                                                multiple={false}
                                            >
                                                <option defaultValue>
                                                -- Elige una Ciudad --
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
                                                <option defaultValue>
                                                -- Elige un Barrio --
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
                                                type="text"
                                                placeholder="Ingrese un título a su anuncio"
                                                className="form-control col-12 ml-3"
                                                name="firstName"

                                                //aria-describedby={"fName-error"}
                                                //ref={this.fNameRef}

                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control col-12 ml-3"
                                                rows="3"
                                                placeholder="Ingrese una descripción a su anuncio"
                                            ></textarea>
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control col-12 ml-3"
                                                rows="3"
                                                placeholder="Servicios ofrecidos. Ej: Atención a parejas, Bucal al natural, Hasta el final..."
                                            ></textarea>
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
                                            to="/dashboard"
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
                                        to="/wallet"
                                    >
                                        Wallet
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item text-dark"
                                        to="/profile"
                                    >
                                        Profile
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item text-dark"
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text-dark"
                                    to="/login"
                                    onClick={() => {
                                        this.props.handleLogout()
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

export default Publish;
