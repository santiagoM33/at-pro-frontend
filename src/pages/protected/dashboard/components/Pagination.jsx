import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsPerPage: 8
        }
    }

    render() {
        /*const { items, pages } = this.props.data;
        const pending = this.props.status;
        const hasPrevious = pages > 1
        
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(pending.length / this.state.itemsPerPage); i++) {
            pageNumbers.push(i);
        }*/
        return (
            <React.Fragment>
            {/*<nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {hasPrevious ? 
                        <li className="page-item">
                            <a className="page-link" href="#" tabIndex={pages-1} aria-disabled="false">Previous</a>
                        </li>
                    :   <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex='-1' aria-disabled="true">Previous</a>
                        </li>
                    }
                    {!!pages &&
                    <React.Fragment>
                        <li className="page-item"><a className="page-link" href="#">{pages-1}</a></li>
                        <li className="page-item"><a className="page-link" href="#">{pages}</a></li>
                        <li className="page-item"><a className="page-link" href="#">{pages+1}</a></li>
                    </React.Fragment>
                    }
                    <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
                </nav>*/}
                <div></div>
                </React.Fragment>
        )
    }
}

export default Pagination;