import React from 'react';
import FooterMedia from './components/FooterMedia';

const Footer = () => {
    return ( 
        
    <footer className="bd-footer text-muted">
      <div className="container-fluid p-3 p-md-5 bg-secondary text-light">
        <div className='row'>
          <div className='col-12 col-sm-3 col-md-2'>
            <FooterMedia />
          </div>
          <div className='col-12 col-sm-5 col-md-6'>
            <p>Designed and built with all the love in the world by the <a href="/docs/4.6/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</p>
          </div>
          <div className='col-12 col-sm-4 col-md-4'>
          <p>Currently v4.6.0. Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 bg-dark'>
            <p className='text-center'>Todos los derechos reservados &copy;</p>
          </div>
        </div>
      </div>
    </footer>
     );
}
 
export default Footer;