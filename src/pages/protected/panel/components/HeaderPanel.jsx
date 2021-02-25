import React from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const HeaderPanel = (props) => {
    return (
        <header className="container bg-light">
            <div className="row align-items-center">
                <div className="col-6 col-md-6 pt-2">
                    <div className="navbar navbar-expand-lg">
                        <Link className="navbar-brand ml-3" to="/panel">
                            <h3 className="h6">AT PRO</h3>
                        </Link>
                    </div>
                </div>
                <div className="offset-4 col-2 offset-md-5 col-md-1 align-self-end">
                    <Hamburger
                        size={20}
                        label="Show menu"
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
