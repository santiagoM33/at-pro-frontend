import React from 'react';

class PaginationApproved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsPerPage: 10
        }
    }

    render() {
        const { items, pages } = this.props.data;
        const { approved } = this.props.status;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(approved.length / this.state.itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const hasPrevious = pages > 1;
        const hasNext = pageNumbers.length >= 2;
        {/*console.log('Approved: ', approved)
        console.log('Pages Remaining Approved: ', pages)
        console.log('Items Remaining Approved: ', items)
        console.log('hasPrevious Page Approved: ', hasPrevious)
        console.log('hasNext Page Approved: ', hasNext)
    console.log('pagesNumbers? Approved: ', pageNumbers)*/}
        return (
            <React.Fragment>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {hasPrevious &&
                            <li className="page-item">
                                <a className="page-link" href="#" tabIndex={!!pages ? pages - 1 : -1} aria-disabled="false">Previous</a>
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

export default PaginationApproved;