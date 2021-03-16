import React, { Fragment, Component } from "react";
import { TimePicker, DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
//import moment from 'moment';
import Title from "../../../partials/title/Title";
import Row from "../../../partials/row/Row";

import { NavLink, Redirect } from "react-router-dom";

import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import medidasP from "./data/pecho.json";
import medidasC from "./data/cintura.json";
import medidasCd from "./data/cadera.json";

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


            documento: '',
            nacimiento: '',
            age: '',

            pecho: '',
            cintura: '',
            cadera: '',

            fullTime: false,
            semana: '',
            sabado: '',
            domingo: '',
            feriado: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleHamburguer = this.handleHamburguer.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.updateCheckboxFeriado = this.updateCheckboxFeriado.bind(this);
        this.updateCheckboxFullTime = this.updateCheckboxFullTime.bind(this);
    }

    //semanaRef = React.createRef();

    handleChange(e){
        let name = e.target.name;
        console.log(e)
        //let index = e.target.selectedIndex;
        this.setState({[name]: e.target.value});
        //this.setState({semana: });
    }

    handleClick() {
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }
    handleHamburguer() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onChangeDate(e){
        const day = e._d.getDate();
        const month = e._d.getMonth()+1;
        const year = e._d.getFullYear();
        let nacimiento = `${day}-${month}-${year}`;
        const fecha = new Date().getFullYear();
        let age = fecha - year;
        this.setState({
            age: age,
            nacimiento: nacimiento
        })
    }

    onChangeTime(){

    }

    updateCheckboxFullTime(e){
        const {checked} = e.target;
        this.setState({
            feriado: checked
        })
    }

    updateCheckboxFeriado(e){
        const {checked} = e.target;
        this.setState({
            fullTime: checked
        })
    }

    render() {
        const format = 'HH:mm';
        //console.log(this.state.nacimiento)
        //console.log(this.state.feriado)
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
                                                placeholder="Documento*"
                                                className="form-control col-11 ml-3"
                                                name="dni"
                                                maxLength={8}
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                                //pattern="[0-9]{0,8}"
                                                //aria-describedby={"dni-error"}
                                                //onChange={this.onHandleChange}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <DatePicker className="form-control col-11 ml-3" placeholder='Ingrese su fecha de nacimiento' onChange={this.onChangeDate}/>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="pecho"
                                                multiple={false}
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                            >
                                                <option value>
                                                    -- Medidas Pecho --
                                                </option>
                                                {medidasP.map(medida => {
                                                    return <option key={medida.id} value={medida.pecho}>{medida.pecho}</option>
                                                })}
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="cintura"
                                                multiple={false}
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                            >
                                                <option defaultValue>
                                                    -- Medidas Cintura --
                                                </option>
                                                {medidasC.map(medida => {
                                                    return <option key={medida.id} value={medida.cintura}>{medida.cintura}</option>
                                                })}
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12">
                                        <div className="input-group mb-3">
                                            <select
                                                className="custom-select col-11 col-sm-12 ml-3"
                                                name="cadera"
                                                multiple={false}
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                            >
                                                <option defaultValue>
                                                    -- Medidas Cadera --
                                                </option>
                                                {medidasCd.map(medidas => {
                                                    return <option key={medidas.id} value={medidas.cadera}>{medidas.cadera}</option>
                                                })}
                                            </select>
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <h4 className='h5 col'>Horarios</h4>
                                        <div className ="input-group col mb-3">
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <input 
                                                        type="checkbox" 
                                                        name='fullTime'
                                                        defaultChecked={this.state.fullTime}
                                                        onChange={this.updateCheckboxFullTime}
                                                    />
                                                </div>
                                            </div>
                                            <label className='col'>Fulltime</label>
                                        </div>
                                        <div className="col-12 input-group">
                                            <label className='h6'>Lunes a Viernes</label>
                                                <TimePicker.RangePicker  minuteStep={15} defaultValue={moment('9:10', format)} format={format} onChange={this.onChangeTime} selected={this.state.semana}/>
                                                {/*<TimePicker style={{ width: 75 }} minuteStep={15} defaultValue={moment('21:40', format)} format={format} onChange={this.onHandleChange} disabled/>*/}
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="col-12 input-group">
                                            <label className='h6'>Sabado</label>
                                                <TimePicker.RangePicker minuteStep={15} defaultValue={moment('12:00', format)} format={format} onChange={this.onChangeTime}/>
                                                {/*<TimePicker style={{ width: 85 }} minuteStep={15} defaultValue={moment('20:30', format)} format={format} onChange={this.onHandleChange}/>*/}
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="col-12 input-group">
                                            <label className='h6'>Domingos</label>
                                                <TimePicker.RangePicker minuteStep={15} defaultValue={moment('14:00', format)} format={format} onChange={this.onChangeTime}/>
                                                {/*<TimePicker style={{ width: 85 }} minuteStep={15} defaultValue={moment('20:00', format)} format={format} onChange={this.onHandleChange}/>*/}
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <div className="input-group col mb-3">
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <input 
                                                        type="checkbox"
                                                        name='feriado'
                                                        defaultChecked={this.state.feriado}
                                                        onChange={this.updateCheckboxFeriado} 
                                                    />
                                                </div>
                                            </div>
                                            <label className='col'>Feriados</label>
                                        </div>
                                    </Row>
                                    <Row className="col-12 mb-3">
                                        <button className='btn btn-primary'>Actualizar</button>
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
