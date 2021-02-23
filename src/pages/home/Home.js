import React, { Fragment, Component } from 'react';
import Footer from 'partials/footer/Footer';
import HeaderMain from './components/HeaderMain';
import Card from 'components/card/Card';

class Home extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            users: [],
            isFetch: true
        }
        this.getUsers = this.getUsers.bind(this)
    }
    

    getUsers() {
        const URI = 'http://localhost:8005';
        fetch(`${URI}/users`)
            .then(res => res.json())
            .then(resJson => this.setState({users: resJson}))
    }

    componentDidMount() {
        this.getUsers()
    }
    
    render() { 
        return ( 
            <Fragment>
                <main className='container-fluid'>
                    <HeaderMain />
                    <article className='row'>
                        { 
                            this.state.users.map((user, i)=> {                             
                                return <section className='col-12 col-sm-6 col-md-4 my-1'>
                                <Card
                                    key={user.id}
                                    user={this.state.users[i]} 
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