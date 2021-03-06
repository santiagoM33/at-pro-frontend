import React, { Fragment, Component } from "react";
import {saveImages} from "../../../services/fakeApi";
import Title from "../../../partials/title/Title";
import Row from "../../../partials/row/Row";

import { NavLink, Redirect } from "react-router-dom";

import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { logout } from "data/config";

import HeaderPanel from "../dashboard/components/HeaderPanel";
import HeaderMenuOffcanvas from "../dashboard/components/HeaderMenuOffcanvas";

import {uploadImages} from "./upload/UploadFile";
import Photos from "./components/Photos";

class Gallery extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            loading: false,
            isMenuOpened: false,
            isOpen: false,
            authenticated: false,
            nameImg: '',
            imgSelected: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleHamburguer = this.handleHamburguer.bind(this);
        this.onHandleImg = this.onHandleImg.bind(this);
        this.onSendData = this.onSendData.bind(this);
    }

    handleClick() {
        // toggles the menu opened state
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }
    handleHamburguer() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onHandleImg(e){
        this.setState({
            nameImg: e.target.files[0].name,
            imgSelected: e.target.files[0]
        })
    }

    onSendData(){
        uploadImages(this.state.imgSelected)
            .then(resJson=> {
                saveImages(resJson)
            })
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
                                Galeria Personal
                            </Title>
                            <Row className="col">
                                <form>
                                    <Row className="col-12 mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    onClick={this.onSendData}
                                                >
                                                    Add Image
                                                </button>
                                            </div>
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="gallery_input"
                                                    onChange={this.onHandleImg}
                                                />
                                                <label
                                                    className="custom-file-label"
                                                    htmlFor="gallery_input"
                                                >
                                                    Choose file
                                                </label>
                                            </div>
                                        </div>
                                    </Row>
                                </form>
                            </Row>
                            <Row className="col">
                                <Photos/>
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

export default Gallery;
