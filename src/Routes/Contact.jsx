import React from 'react';
import Form from '../Components/Form';
import { useGlobalContext } from '../Components/context/global.context';

const Contact = () => {
  const { state } = useGlobalContext();
  
  const handleFormSubmit = (formData) => {
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
  };

  const bodyClass = `${state.darkMode ? 'dark-app-container' : 'app-container'}`;

  return (
    <div className={bodyClass}>
    <div>
      <h2>Contactenos</h2>
      <Form onSubmit={handleFormSubmit} />
    </div>
    </div>
  );
};

export default Contact;
