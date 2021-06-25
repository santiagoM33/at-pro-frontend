import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsPerPage: 10
        }
    }

    render() {
        const { items, pages } = this.props.data;
        const { rejected } = this.props.status;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(rejected.length / this.state.itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const hasPrevious = pages > 1
        const hasNext = pageNumbers.length >= 2;
        console.log('Rejected: ', rejected)
        console.log('Pages Remaining Rejected: ', pages)
        console.log('Items Remaining Rejected: ', items)
        console.log('hasPrevious Page Rejected: ', hasPrevious)
        console.log('pagesNumbers?:  Rejected', pageNumbers.length)
        return (
            <React.Fragment>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {hasPrevious ?
                            <li className="page-item">
                                <a className="page-link" href="#" tabIndex={pages - 1} aria-disabled="false">Previous</a>
                            </li>
                            : <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex='-1' aria-disabled="true">Previous</a>
                            </li>
                        }
                        {!!pages &&
                            <React.Fragment>
                                {pageNumbers.map((page,i)=>{
                                    <li className="page-item" key={i}><a className="page-link" href="#">{page}</a></li>
                                })}
                            </React.Fragment>
                        }
                         {hasNext &&
                            <li className="page-item">
                                <a className="page-link" tabIndex={hasNext} href="#">Next</a>
                            </li>
                        }
                    </ul>
                </nav>
                {/*<div></div>*/}
            </React.Fragment>
        )
    }
}

export default Pagination;