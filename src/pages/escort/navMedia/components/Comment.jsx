import React from "react";
import './Comment.css'

const Comment = (props) => {
    return (
        <div className="media text-muted pt-3">
            {/*------------ Avatar place -----------*/}
            <svg
                className="bd-placeholder-img mr-2 xs-circle mt-2"
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
            {/*------------------------- */}
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@{props.user}</strong>
                {props.message}
            </p>
        </div>
    );
};

export default Comment;
