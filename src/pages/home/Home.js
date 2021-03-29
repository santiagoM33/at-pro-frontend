import React, { Fragment, Component } from 'react';
import Footer from 'partials/footer/Footer';
import HeaderMain from './components/HeaderMain';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class Home extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            users: [],
            isFetch: true
        }
        this.getUsers = this.getUsers.bind(this);
        this.lowerCaseFirstLetter = this.lowerCaseFirstLetter.bind(this);
    }
    
    controller = new AbortController();

    getUsers() {
        const signal = this.controller.signal;
        const URI = 'http://localhost:8005';
        fetch(`${URI}/users`, { signal })
            .then(res => res.json())
            .then(resJson => this.setState({users: resJson}))
    }

    componentDidMount() {
        this.getUsers()
    }

    componentWillUnmount(){this.controller.abort()}
    
    lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.substr(1).toLowerCase();
      }
  
    render() {    
        const nombres = this.state.users.map(({user})=> user)
        const nombresToString = nombres.toString();
        const enMinuscula = this.lowerCaseFirstLetter(nombresToString)
        const file = enMinuscula.split(' ').join('-').split(',');
        return ( 
            <Fragment>
                <main className='container-fluid'>
                    <HeaderMain />
                    <article className='row'>
                        { 
                            this.state.users.map((data,i)=> {                             
                                return <section className='col-12 col-sm-6 col-md-4 my-1' key={data.id}>
                                    <Card key={data.id}>
                                        <CardImg top width="100%" src="http://res.cloudinary.com/imagesatpro/image/upload/v1614468768/ithb4gqycy9hlwkrgm5y.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">{data.user}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                            <CardText>{data.phone}</CardText>
                                            <Button onClick={()=> this.props.history.push(file[i])}>Ver mas</Button>
                                        </CardBody>
                                    </Card>
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