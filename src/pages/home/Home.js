import React, { Fragment, Component } from 'react';
import Header from '../../partials/header/Header';
import Footer from '../../partials/footer/Footer';

import HeaderMain from './components/HeaderMain';
import Card from '../../components/card/Card';

import Alert, {AlertLink} from '../../components/alert/Alert';
import Button from '../../components/button/Button';

class Home extends Component {
    state = {
        users: [],
        isFetch: true
    }

    componentDidMount() {
        const URI = 'http://localhost:8005';
        const ep = '/users';
        fetch(`${URI}${ep}`)
            .then(res => res.json())
            .then(resJson => this.setState({users: resJson}))
    }
    
    render() { 
        return ( 
            <Fragment>
                <Header>AltoGato</Header>
                    <main className='container-fluid'>
                        <HeaderMain />
                        <article className='row'>
                            { 
                                Object.keys(this.state.users).map((key) => {                             
                                    return <section className='col-12 col-sm-6 col-md-4 my-1'>
                                    <Card
                                        key={key}
                                        user={this.state.users[key]} 
                                    />
                                    </section>
                                })
                            }                       
                        </article>
                    </main>
                <Footer />
            </Fragment>
         );
    }
}
 
export default Home;