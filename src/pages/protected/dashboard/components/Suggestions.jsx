import React, { Component } from "react";
import Suggestion from './Suggestion'

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">
                    Suggestions
                </h6>
                <Suggestion 
                    names='Santiago Monaco'
                    user='santiagoM'
                    colorImg='#007bff'
                />
                <small className="d-block text-right mt-3">
                        <a href="#">All suggestions</a>
                </small>
            </div>
        );
    }
}

export default Suggestions;
