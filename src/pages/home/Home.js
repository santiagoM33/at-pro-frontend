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
        this.lowerCaseFirstLetter = this.lowerCaseFirstLetter.bind(this);
    }

    componentDidMount() {
        this.props.getEscorts()
    }
    
    lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.substr(1).toLowerCase();
      }
  
    render() {    
        /*const nombres = this.state.users.map(({user})=> user)
        const nombresToString = nombres.toString();
        const enMinuscula = this.lowerCaseFirstLetter(nombresToString)
        const file = enMinuscula.split(' ').join('-').split(',');*/

        const escorts = this.props.escorts
        
        return ( 
            <Fragment>
                <main className='container-fluid'>
                    <HeaderMain />
                    <article className='row'>
                        {
                            escorts.map((data,i)=> {                             
                                return <section className='col-12 col-sm-6 col-md-4 my-1' key={data.id}>
                                    <Card key={data.id}>
                                        <CardImg top width="100%" src="http://res.cloudinary.com/imagesatpro/image/upload/v1614468768/ithb4gqycy9hlwkrgm5y.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">{data.alias}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                            <CardText>{data.email}</CardText>
                                            <Button onClick={()=> this.props.history.push(data.alias.toLowerCase())}>Ver mas</Button>
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