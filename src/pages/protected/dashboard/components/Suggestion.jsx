import React from "react";

const Suggestion = (props) => {
    return (
        <div className="media text-muted pt-3">
            <svg
                className="bd-placeholder-img mr-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill={props.colorImg} />
                <text x="50%" y="50%" fill={props.colorImg} dy=".3em">
                    32x32
                </text>
            </svg>

            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <strong className="text-gray-dark">{props.names}</strong>
                    <a href="#">Follow</a>
                </div>
                <span className="d-block">@{props.user}</span>
            </div>
        </div>
    );
};

export default Suggestion;
