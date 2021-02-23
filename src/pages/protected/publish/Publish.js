import React, {Fragment, Component} from 'react';
import Title from 'partials/title/Title';
import Row from 'partials/row/Row';
import { FormPublish } from 'components/form/Form';

class Publish extends Component {
    state = { }
    render() { 
        return ( 
            <Fragment>
                <div className='container-fluid'>
                    <Title
                        className='text-center my-3 h3'
                    >Publicar Anuncio</Title>
                    <Row
                     className='col'
                    >
                        <FormPublish />
                    </Row>
                </div>
            </Fragment>
         );
    }
}
 
export default Publish;