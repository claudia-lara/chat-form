import React, { useState, Fragment } from 'react';
import { DivShadowBack, Description, Button } from '../styledComponent/styles.styled';


const ButtonInit = ({ createSession, form }) => {
    return (
        <Fragment>
            <DivShadowBack>
                <Description padding='10px'>Si tus datos son correctos por favor continuemos</Description>
            </DivShadowBack>
            <br />
            <DivShadowBack bkground={' '} shadow=' '>
                <Button onClick={() => createSession()}>Iniciar</Button>
            </DivShadowBack>
        </Fragment>
    )
}
export default ButtonInit;