import React from "react";
import {Link} from "react-router-dom";

const HeaderMenuOffcanvas = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col pt-2">
                    <div className="navbar navbar-expand-lg">
                        <Link
                            className="navbar-brand ml-1 text-light"
                            to="/panel"
                        >
                            <h3 className="h6">.</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenuOffcanvas;
