import React, { Fragment, Component } from "react";
import Title from "../../../partials/title/Title";
import Row from "../../../partials/row/Row";

import { NavLink, Redirect } from "react-router-dom";

import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { medidas } from "./data/medidas.json";

import HeaderPanel from "../dashboard/components/HeaderPanel";
import HeaderMenuOffcanvas from "../dashboard/components/HeaderMenuOffcanvas";

class Profile extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            loading: false,
            isMenuOpened: false,
            isOpen: false,
            authenticated: false,


            documento: null,
            age: null,
            pecho: null,
            cintura: null,
            cadera: null,

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
                                    {/*<Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="provincia"
                                                multiple={false}
                                            >
                                                <option defaultValue>
                                                    -- Nacionalidad --
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </Row>*/}
                                    <Row className="col-12 mb-3">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                placeholder="Documento*"
                                                className="form-control col-12 ml-3"
                                                name="dni"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                placeholder="Ingresa su edad"
                                                className="form-control col-12 ml-3"
                                                name="age"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="pecho"
                                                multiple={false}
                                            >
                                                <option defaultValue>
                                                    -- Medidas Pecho --
                                                </option>
                                                {/*medidas.pecho.map(pecho => {
                                                    
                                                })*/}
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
                                                <option defaultValue>
                                                    -- Medidas Cadera --
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <h4 className='h5 col'>Horarios</h4>
                                        <div class="input-group col mb-3">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <input type="checkbox" />
                                                </div>
                                            </div>
                                            <label className='col'>Fulltime</label>
                                        </div>
                                        <div className="col-12 input-group">
                                            <label className='h6'>Lunes a Viernes</label>
                                            <input
                                                type="number"
                                                placeholder="----------"
                                                className="form-control col ml-3"
                                                name="sHorarioInicio"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                            <input
                                                type="number"
                                                placeholder="----------"
                                                className="form-control col ml-3"
                                                name="sHorarioFin"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="col-12 input-group">
                                            <label className='h6'>Sabado</label>
                                            <input
                                                type="number"
                                                placeholder="----------"
                                                className="form-control col ml-3"
                                                name="sabadohorarioInicio"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                            <input
                                                type="number"
                                                placeholder="----------"
                                                className="form-control col ml-3"
                                                name="sabadoHorarioFin"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="col-12 input-group">
                                            <label className='h6'>Domingos</label>
                                            <input
                                                type="number"
                                                placeholder="----------"
                                                className="form-control col ml-3"
                                                name="DomingoHorarioInicio"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                            <input
                                                type="number"
                                                placeholder="----------"
                                                className="form-control col ml-3"
                                                name="DomingoHorarioFin"
                                                //aria-describedby={"fName-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div class="input-group col mb-3">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <input type="checkbox" />
                                                </div>
                                            </div>
                                            <label className='col'>Feriados</label>
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                    <h4 className='h5 col'>Información extra</h4>
                                        <div class="input-group col mb-3">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <input type="checkbox" />
                                                </div>
                                            </div>
                                            <label className='col'>Acepta tarjeta?</label>
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div class="input-group col mb-3">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <input type="checkbox" />
                                                </div>
                                            </div>
                                            <label className='col'>Whatsapp</label>
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

export default Profile;
