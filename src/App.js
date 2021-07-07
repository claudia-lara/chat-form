import React, { useState } from 'react';
import DataName from './components/DataName';
import DataBirth from './components/DataBirth';
import DataContact from './components/DataContact';
import ButtonInit from './components/ButtonInit';
import { DivContainer, Data, Result } from './styledComponent/styles.styled';
import axios from 'axios';

function App() {
  const [mostrarData, setMostrarData] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    segNombre: '',
    apePat: '',
    apeMat: '',
    dia: '02',
    mes: '01',
    anio: '1996',
    email: '',
    numberPhone: ''
  });

  const changeForm = ({ target }) => {
    const { value, name } = target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value
    })
  }

  const createSession = async () => {
    const { nombre, segNombre, apePat, apeMat, dia, mes, anio, email, numberPhone } = form
    sessionStorage.setItem('nombre', nombre)
    sessionStorage.setItem('segNombre', segNombre)
    sessionStorage.setItem('apePat', apePat)
    sessionStorage.setItem('apeMat', apeMat)
    sessionStorage.setItem('dia', dia)
    sessionStorage.setItem('mes', mes)
    sessionStorage.setItem('anio', anio)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('numberPhone', numberPhone);
    let fechaNacimiento = `${anio}-${mes}-${dia}`;
    const response = await axios.post('http://localhost:5000/api/chat-form', {
      nombre: nombre || '',
      segNombre: segNombre || '',
      apePat: apePat || '',
      apeMat: apeMat || '',
      fechaNacimiento: fechaNacimiento,
      email: email || '',
      numberPhone: numberPhone || ''
    });
    const { data } = response;
    if (data.response !== null && data.response !== '') {
      setMostrarData(true);
    }
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <DivContainer>
        <DataName form={form} changeForm={changeForm} />
        <br />
        <DataBirth form={form} changeForm={changeForm} />
        <br />
        <DataContact form={form} changeForm={changeForm} />
        <br />
        <ButtonInit createSession={createSession} />
        <br />
        {mostrarData && (
          <Result>
            <Data><b>Los siguientes datos fueron insertados correctamente</b></Data>
            <Data><b>Fecha de nacimiento:</b> {form.dia} {form.mes} {form.anio}</Data>
            <Data><b>Correo electrónico:</b> {form.email}</Data>
            <Data><b>Teléfono celular:</b> {form.numberPhone}</Data>
            <Data><b>Nombre:</b> {form.nombres} {form.segNombre} {form.apePat} {form.apeMat}</Data>
          </Result>
        )}

      </DivContainer>
    </div>
  );
}

export default App;
