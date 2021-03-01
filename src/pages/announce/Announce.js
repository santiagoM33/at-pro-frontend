import React, { Component } from "react";
import "./announce.css";
import Button from '../../components/button/Button'
import Title from "../../partials/title/Title";
import Row from "../../partials/row/Row";

class Announce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flagImg: 'https://flagpedia.net/data/flags/w580/ar.png',
            countryCodeValue:'54',
            phone:''
        };
        this.onSelectCountry = this.onSelectCountry.bind(this)
        this.onHandleFlags = this.onHandleFlags.bind(this)
    }

    //Link banderas del mundo
    // https://flagpedia.net/data/flags/w580/ar.png

    onSelectCountry(e){
        this.setState({countryCodeValue: e.target.value})
    }

    onHandleFlags(){
        const select = document.getElementById('country') ;
        this.setState({flagImg: `https://flagpedia.net/data/flags/w580/${select.selectedOptions[0].dataset.countryCode.toLowerCase()}.png`})
    }

    render() {
        //console.log(this.state.flagImg)
        return (
            <div className="container">
                <div className='offset-md-2 col-md-8 card my-3 mt-sm-5 p-2 shadow-sm rounded-sm'>
                    <Title className="text-center my-3 h4">Publicar Anuncio</Title>
                    <Row className="col">
                        <form>
                            <Row className="col-12 mb-3">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Ingrese su email"
                                        className="form-control col-12 ml-3"
                                        name="emailAccount"

                                        //onChange={this.onHandleChange}
                                    />
                                </div>
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="input-group">
                                    <input
                                        type="password"
                                        placeholder="Ingrese un password entre 6 y 20 caracteres"
                                        className="form-control col-12 ml-3"
                                        name="passAccount"

                                        //onChange={this.onHandleChange}
                                    />
                                </div>
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="input-group">
                                    <input
                                        type="user"
                                        placeholder="Ingrese nombre y apellido para el anuncio"
                                        className="form-control col-12 ml-3"
                                        name="userAccount"

                                        //onChange={this.onHandleChange}
                                    />
                                </div>
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="input-group">
                                    <div className="col-3 input-group select-box" onChange={this.onHandleFlags}>
                                        <img src={this.state.flagImg} alt='' className='flag-img' id='img'/>
                                        <select 
                                            className="custom-select col-12" 
                                            id='country'
                                            onChange={this.onSelectCountry}
                                            defaultValue={this.state.countryCodeValue}
                                        >
                                            <option data-country-code="AR" value="54">Argentina (+54)</option>
                                            <option data-country-code="BO" value="591">Bolivia (+591)</option>
                                            <option data-country-code="BR" value="55">Brazil (+55)</option>
                                            <option data-country-code="CL" value="56">Chile (+56)</option>
                                            <option data-country-code="CO" value="57">Colombia (+57)</option>
                                            <option data-country-code="PY" value="595">Paraguay (+595)</option>
                                            <option data-country-code="PE" value="51">Peru (+51)</option>
                                            <option data-country-code="UY" value="598">Uruguay (+598)</option>
                                            <option data-country-code="VE" value="58">Venezuela (+58)</option>
                                        </select>
                                    </div>
                                    <div className="col-9 input-group-append">
                                        <input
                                            type="number"
                                            placeholder="Numero de celular"
                                            className="form-control"
                                            name="celAccount"

                                            //onChange={this.onHandleChange}
                                        />
                                    </div>
                                </div>
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="col input-group">
                                    <select className="custom-select">
                                        <option defaultValue>
                                            -- Selecciona tu País --
                                        </option>
                                        <option value="1">Argentina</option>
                                        <option value="2">Bolivia</option>
                                        <option value="3">Brazil</option>
                                        <option value="4">Chile</option>
                                        <option value="5">Colombia</option>
                                        <option value="6">Paraguay</option>
                                        <option value="7">Peru</option>
                                        <option value="8">Uruguay</option>
                                        <option value="9">Venezuela</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className="col-12 mb-3">
                                <div className="col input-group">
                                <Button
                                    type='button'
                                    style='danger'
                                    block='block'
                                    //onHandleClick={this.props.onHandleClick}
                                >
                                Publicar</Button>
                                </div>
                            </Row>
                        </form>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Announce;
