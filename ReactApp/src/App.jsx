import { useState } from 'react';
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: "Nombre",
    contact: "Contacto",
    LinkdIn: "LinkdIn"
  });

  return (
    <div id="app">
      <InputForm form={form} setForm={setForm} />
      <Form form={form} />
    </div>
  );
}

function InputForm({ form, setForm }) {
  return (
    <div className='inputForm'>
      Nombre completo:<input
        value={form.name}
        onChange={e => {
          setForm({
            ...form,
            name: e.target.value
          });
        }}
        placeholder='Ingrese su nombre'
      />
      Contacto:<input
        value={form.contact}
        onChange={e => {
          setForm({
            ...form,
            contact: e.target.value
          });
        }}
        placeholder='Ingrese su contacto'
      />
      Email:<input
        value={form.LinkdIn}
        onChange={e => {
          setForm({
            ...form,
            LinkdIn: e.target.value
          });
        }}
        placeholder='Ingrese su LinkdIn'
      />
      LinkdIn:<input
        value={form.LinkdIn}
        onChange={e => {
          setForm({
            ...form,
            LinkdIn: e.target.value
          });
        }}
        placeholder='Ingrese su LinkdIn'
      />
    </div> 
  );
}


function Form({ form }) {
  return (
    <div className='form'>
      <h2>Contacto</h2>
      <hr />
      <p>{form.name}</p> 
      <p>{form.contact}</p> 
      <p>{form.LinkdIn}</p> 
      <hr />
    </div> 
  );
}

export default App