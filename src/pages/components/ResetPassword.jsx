import React, { Fragment } from "react";
import FormEmail from '../../components/form/Form';
import CardBody from "../../components/card/components/CardBody";
//import CardTitle from "../../components/card/components/CardTitle";
import CardText from "../../components/card/components/CardText";
//import CardHeader from "../../components/card/components/CardHeader";

const ResetPassword = (props) => {
    
    return (
        <Fragment>
            <div className="card mt-5 mx-2">
                <CardBody>
                    <CardText>Ingresa tu email para recibir un enlace que ayude a cambiar su password</CardText>
                    <FormEmail 

                    />
                </CardBody>
            </div>
        </Fragment>
    );
};

export default ResetPassword;
