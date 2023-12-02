import React from 'react';
import { useGlobalContext } from './context/global.context';

const Footer = () => {
  const { state } = useGlobalContext();
  const footerClassName = `footer ${state.darkMode ? 'dark-mode' : 'footer'}`;

  return (
    <footer className={footerClassName}>
      <p>© DH 2023 Yurle Jaimes. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
