//import {Redirect} from 'react-router-dom';

export const logout = () =>{
    localStorage.clear('user')
    {/*<Redirect to='/login'/>*/}
}