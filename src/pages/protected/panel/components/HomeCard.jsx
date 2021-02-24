import React from "react";

const HomeCard = (props) => {
    return (
        <div className="card text-body bg-info mt-4 mt-sm-2 col-10 offset-1 col-sm-6">
            <div className="card-header">Bienvenido {props.name}</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.message}</p>
            </div>
        </div>
    );
};

export default HomeCard;
