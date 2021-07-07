import React, { useState, Fragment } from 'react';
import { InputTxt, DivShadowBack, Title, Description } from '../styledComponent/styles.styled';


const DataName = ({ form, changeForm }) => {



    return (
        <Fragment>
            <DivShadowBack>
                <Title>¿Cuál es tu nombre?</Title>
                <InputTxt type="text" placeholder="Nombre" name='nombre' onChange={changeForm} />
                <InputTxt type="text" placeholder="Segundo nombre" name='segNombre' onChange={changeForm} />
                <InputTxt type="text" placeholder="Apellido paterno" name='apePat' onChange={changeForm} />
                <InputTxt type="text" placeholder="Apellido materno" name='apeMat' onChange={changeForm} />
            </DivShadowBack>
            <br />
            <DivShadowBack bkground={form.nombre !== '' ? 'pink' : ' '} shadow=' '>
                <Description>{form.nombre} {form.segNombre} {form.apePat} {form.apeMat}</Description>
            </DivShadowBack>
        </Fragment>
    )
}
export default DataName;