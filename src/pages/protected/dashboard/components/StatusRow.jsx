import React from 'react';
import { updateStatus } from '../../../../services/api'

const StatusRow = (props) => {
    

    const catchDataUser= user => {
        props.catchUser(user)
        console.log('Usuario: ',user)
    }
    
    return (
        <tr key={props.user.id} className='text-center'>
            <td>{props.index}</td>
            <td>{props.user.alias}</td>
            <td>{props.user.email}</td>
            <td>{props.user.status}</td>
            <td className='text-center'>{props.user.roleId}</td>
            {props.user.status === 'pending' 
            ?   <td className='text-center'><button className="btn btn-success" onClick={
                        ()=>updateStatus(props.user.id, {status:'approved'}).then(res=>console.log('Respuesta: ', res))
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    </button>
                    {"  "}
                    <button className="btn btn-danger" onClick={
                        ()=>updateStatus(props.user.id, {status:'rejected'})
                        }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </td>
            :   <td className='text-center'><button className="btn btn-info" onClick={
                    () => catchDataUser(props.user),
                    () => props.toggleShow()
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                </button></td>
            }
        </tr>
    )
}

export default StatusRow;