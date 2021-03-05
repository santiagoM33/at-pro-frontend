import React from "react";
import cx from "classnames";

const HomeCard = (props) => {
    return (
        <div className='col-sm-6 col-md-6 col-lg-3 rounded'>
            <div className={cx("card text-light", {
                [`bg-${props.color}`] : props.color
            })}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.message}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
