import React, {Component} from "react";
import Modal from "react-modal";
import ApprovedEscort from "./ApprovedEscort";


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class ApprovedLists extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            isOpenModal: true
        }
        //this.afterOpenModal = this.afterOpenModal.bind(this)
    }
  

    render(){
        
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm col">
                <h6 className="border-bottom border-gray pb-2 mb-0">
                    Lista de Escorts a Verificar
                </h6>
                <div className='row'>
                    <div className='col-12' onClick={()=>this.setState({isOpenModal:true})}>
                        <ApprovedEscort
                            user="AngelesR"
                            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem adipisci accusantium hic odio numquam mollitia eius sunt ipsum"
                            colorImg="#d6d138"
                        />
                    </div>
                    <Modal 
                        isOpen={this.state.isOpenModal}
                        onRequestClose={() => this.setState({isOpenModal:false})}
                        shouldCloseOnOverlayClick={true}
                        ariaHideApp={false}
                        closeTimeoutMS={200}
                        contentLabel="modal"
                        bodyOpenClassName='text-center'
                        style={{
                            overlay:   {
                                backgroundColor: 'rgba(56, 54, 49, 0.75)'
                            }
                            },
                            {content : {
                                //position: 'absolute',
                                top: '30%',
                                left: '10%',
                                right: '10%',
                                bottom: 'auto',
                                
                                /*border: '1px solid #ccc',
                                background: '#fff',

                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                borderRadius: '4px',
                                outline: 'none',
                                paddingTop: '2em',
                                transform: 'translate(-50%, -50%)'*/
                              }
                            }
                        }
                    >
                        <h3>Angeles R</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sequi cupiditate est accusamus ullam voluptas dolorem pariatur, iste nam perferendis reprehenderit dolorum veniam corporis minus. Reiciendis debitis at temporibus dolore.</p>
                        <div className='row'>
                            <button className='offset-1 col-4 offset-sm-1 col-sm-4'>Accept</button>
                            <button className='offset-2 col-4 offset-sm-2 col-sm-4 btn-danger'>Decline</button>
                        </div>
                        {/*<button 
                            onClick={()=>this.setState({isOpenModal:false})}
                            className='offset-4 offset-sm-5 mt-3'
                        >Cerrar</button>*/}
                    </Modal>
                </div>
                <ApprovedEscort
                    user="DeniseP"
                    message="Esto es una prueba de componente comment"
                    colorImg="#8b32a8"
                />
                <ApprovedEscort
                    user="LucianaM"
                    message="Esto es una prueba de componente comment"
                    colorImg="#2bbac2"
                />
                <ApprovedEscort
                    user="RocioG"
                    message="Esto es una prueba de componente comment"
                    colorImg="#d43e31"
                />
            </div>
        );
    };
};

export default ApprovedLists;
