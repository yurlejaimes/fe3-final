import React, { useState } from 'react';
import { useGlobalContext } from './context/global.context';

const Form = ({ onSubmit }) => {

  const { state } = useGlobalContext();
 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.inquiry) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Enviar formulario
    onSubmit(formData);

    // Limpiar formulario después de enviar
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      inquiry: '',
    });
  };

    const formClassName = `${state.darkMode ? 'form-container-dark' : 'form-container'}`;

    return (
      <div className={formClassName}>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input className="form-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Apellido:
          <input className="form-input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Consulta:
          <textarea className="form-textarea" name="inquiry" value={formData.inquiry} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
    );
};

export default Form;
