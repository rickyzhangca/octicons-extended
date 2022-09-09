import React from 'react';
import { Container } from './button.styles';

const Button = ({ icon, text, onClick }) => {
  return (
    <Container onClick={onClick}>
      {icon}
      <p>{text}</p>
    </Container>
  );
};

export default Button;
