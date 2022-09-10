import React from 'react';
import { Container } from './button.styles';

const Button = ({ icon, text, onClick, children }) => {
  return (
    <Container onClick={onClick}>
      {icon}
      <p>{text}</p>
      {children}
    </Container>
  );
};

export default Button;
