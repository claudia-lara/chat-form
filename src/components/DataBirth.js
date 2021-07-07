import React, { useState, Fragment, useEffect } from 'react';
import { InputSelect, DivShadowBack, Title, Description } from '../styledComponent/styles.styled';
const DataBirth = ({ form, changeForm }) => {
    const [days, setDays] = useState([])
    const [months] = useState(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'])
    const [year, setYears] = useState([])


    const fillSelects = () => {
        let arrayD = [];
        let arrayY = [];
        for (let i = 1; i < 32; i++) {
            if (i < 10) {
                arrayD.push(`0${i}`);
            } else {
                arrayD.push(`${i}`);
            }
        }
        setDays(arrayD);

        for (let y = 1900; y < 2006; y++) {
            arrayY.push(y);
        }
        setYears(arrayY);
    }

    useEffect(() => {
        fillSelects();
    }, [])
    return (
        <Fragment>
            <DivShadowBack>
                <Title>¿Cuál es tu fecha de nacimiento?</Title>
                <InputSelect name='dia' value={form.dia} onChange={changeForm} >
                    {days.map((day, index) => (
                        <option key={index} value={day}>{day}</option>
                    ))}
                </InputSelect>
                <InputSelect placeholder="Mes" name='mes' value={form.mes} onChange={changeForm} >
                    {months.map((month, index) => (
                        <option key={index} value={(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}>{month}</option>
                    ))}
                </InputSelect>
                <InputSelect placeholder="Año" name='anio' value={form.anio} onChange={changeForm} >
                    {year.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </InputSelect>
            </DivShadowBack>
            <br />
            <DivShadowBack bkground={form.dia !== '' ? 'pink' : ' '} shadow=' '>
                {form.dia !== '' && <Description>{form.dia}/{form.mes}/{form.anio}</Description>}
            </DivShadowBack>
        </Fragment >
    )
}

export default DataBirth;