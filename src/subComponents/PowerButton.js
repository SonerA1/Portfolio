// Home Button
import React from 'react'
import { styled } from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { NavLink } from 'react-router-dom'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.7rem;
height: 2.7rem;

display: flex;
justify-content: center;
align-items: center;
z-index: 3;
cursor: pointer;

&:hover {
   box-shadow: 0 2px 14px 18px rgba(160, 160, 160, 0.5);
   background-color: rgba(160, 160, 160, 0.5);
}

&>*:first-child {
   text-decoration: none;
   color: inherit;
}

&>*:last-child {
   width: 100%;
   height: auto;
}

@media (max-width: 768px) {
   width: 1.6rem;
   height: 1.6rem;
   padding: 0.2rem;
   top: 1rem;
   
   &>*:last-child{
      position: fixed;
      top: 1px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 1.2rem;
      height: 1.2rem;
   }
}
`

const PowerButton = () => {
   return (
      <Power>
         <NavLink to="/">
            <PowerBtn fill="currentColor" />
         </NavLink>
      </Power>
   )
}

export default PowerButton