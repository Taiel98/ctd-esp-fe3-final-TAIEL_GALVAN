import React, { useState } from "react";


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeMail = (e) => setMail(e.target.value);
  const onSubmitForm = (e) => {
    e.preventDefault();

    const esNombreValido = validarNombre(nombre)

    if(!esNombreValido){
      alert("Por favor verifique su información nuevamente");
    }else{
      alert(`Gracias ${nombre}, te contactaremos cuanto antes vía mail`)
    }
  }
  
  const validarNombre = (nombre) => {
    const sinEspacios = nombre.trim();

    if(sinEspacios.length > 2) {
      return true;
    }else{
      return false;
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input 
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={onChangeNombre}
        />
        <input 
          type="email"
          placeholder="mail"
          value={mail}
          onChange={onChangeMail}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
