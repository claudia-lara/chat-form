import React, { useState, Fragment } from 'react';
import { InputTxt, DivShadowBack, Title, Description } from '../styledComponent/styles.styled';


const DataContact = ({ form, changeForm }) => {

    return (
        <Fragment>
            <DivShadowBack>
                <Title>Datos de contacto</Title>
                <InputTxt type="text" placeholder="Correo electrónico" name='email' onChange={changeForm} />
                <InputTxt type="text" placeholder="Teléfono celular" maxLength={10} name='numberPhone' onChange={changeForm} />
            </DivShadowBack>
            <br />
            <DivShadowBack bkground={form.email !== '' ? 'pink' : ' '} shadow=' ' style={{padding: 10}}>
                {form.email !== '' && (
                    <Description>
                        Correo electrónico: {form.email}
                        <br />
                        Teléfono: {form.numberPhone}
                    </Description>
                )
                }
            </DivShadowBack>
        </Fragment>
    )
}
export default DataContact;