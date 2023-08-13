// IconComponent.js
import React from 'react';
import { styled } from 'styled-components';

const IconBox = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

&:hover {
  /* Add hover styles if needed */
}

@media (max-width: 768px) {
  width: ${props => props.size * 0.8}px; /* Adjust width for smaller screens */
  height: ${props => props.size * 0.8}px; /* Adjust height for smaller screens */
}
`;

const IconComponent = ({ src, size }) => {
  return (
    <IconBox size={size} style={{ backgroundImage: `url(${src})` }} />
  );
};

export default IconComponent;