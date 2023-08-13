import React from 'react'
import { styled } from 'styled-components'
import { darkTheme } from '../components/Themes'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
font-family: 'Dancing Script', cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
font-size: calc(2rem + 1vw);

@media (max-width: 768px) {
  font-size: calc(1rem + 1vw);
  left: 1rem;
  top: .7rem;
}
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      {/* Site name initials */}
      SA
    </Logo>
  )
}

export default LogoComponent