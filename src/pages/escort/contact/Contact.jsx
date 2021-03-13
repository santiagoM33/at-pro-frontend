import React from 'react'
import {FaWhatsapp, FaPhone} from 'react-icons/fa'
import {BiShare} from 'react-icons/bi'


const Contact = () => {
    return ( 
        <div className='row'>
            <div className='col-12'>
                <a href="https://api.whatsapp.com/send?phone=2236973571&text=Hola desde ATPRO" className="offset-2 col-3 btn btn-outline-success"><FaWhatsapp size={28}/></a>
             
                <a href="tel:+542236973571" className="col-3 btn btn-outline-success"><FaPhone size={22}/></a>
             
                <a href="https://wa.me/?text=http://localhost:3000/escort" className="col-3 btn btn-outline-danger"><BiShare size={22}/></a>
            </div>
        </div>
     );
}
 
export default Contact;