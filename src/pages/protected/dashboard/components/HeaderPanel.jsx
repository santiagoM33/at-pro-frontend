import React from "react";
import './HeaderPanel.css'
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { CgProfile } from "react-icons/cg";

const HeaderPanel = (props) => {
    return (
        <header className="container bg-light">
            <div className="row align-items-center">
                <div className="col-4 col-md-4 pt-2">
                    <div className="navbar navbar-expand-lg">
                        <Link className="navbar-brand ml-3" to="/">
                            <h3 className="h6">AT PRO</h3>
                        </Link>
                    </div>
                </div>
                <div className='offset-5 col-1 offset-md-6 col-md-1'>
                    <Link to='/profile'><CgProfile size={20} className='text-dark'/></Link>
                </div>
                <div className="col-1 col-md-1 pb-1 align-self-end">
                    <Hamburger
                        size={20}
                        label="Show menu"
                        direction="right"
                        toggled={props.toggled}
                        toggle={props.toggle}
                        onToggle={props.onToggle}
                    />
                </div>
            </div>
        </header>
    );
};

export default HeaderPanel;
