import React from 'react';
import { Container } from './button.styles';

const Button = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <p>{text}</p>
    </Container>
  );
};

export default Button;
