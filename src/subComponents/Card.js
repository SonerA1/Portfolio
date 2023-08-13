import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Github } from '../components/AllSvgs';
import { motion } from 'framer-motion';

const Box = styled(motion.li)`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1.5rem 2rem;
margin-right: 8rem;
width: 16rem;
height: 100%;
color:  ${props => props.theme.body};
background-color: ${props => props.theme.text};
border-radius: 0 40px 0 40px;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
cursor: pointer;

&:hover {
   background-color: ${props => props.theme.body};
   color:  ${props => props.theme.text};
   border: 1px solid ${props => props.theme.text};
}

@media (max-width: 768px) {
   width: 40vw;
   margin: 0;
   margin-right: 4rem;
}
`

const Title = styled.h2`
font-size:calc(1em + 0.5vw);
margin-bottom: 0.5rem;

@media (max-width: 768px) {
   font-size: calc(1.2em + 1vw);
}
`

const Images = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 90%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
border-radius: 0 40px 0 40px;

${Box}:hover &{
   border: 1px solid ${props => props.theme.body};
}

@media (max-width: 768px) {
   height: 60%;
}
`

const Description = styled.h2`
font-size:calc(0.6em + 0.3vw);
font-family: 'Karla', sans-serif;
font-weight: 500;
margin-top: .6rem;

@media (max-width: 768px) {
   display: none;
}
`

const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.2rem;
margin: 0.6rem 0;
display: flex;
flex-wrap: wrap;

${Box}:hover &{
   border-top: 2px solid ${props => props.theme.text};
}

@media (max-width: 768px) {
   margin: 0.6rem 0;
}
`

const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.5em + 0.3vw);
font-weight: 600;

@media (max-width: 768px) {
   font-size: calc(0.7em + 0.5vw);
}
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;

@media (max-width: 768px) {
   font-size: calc(0.9em + 0.9vw);
}
`

const Link = styled(NavLink)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 0.2rem calc(.5rem + 1vw);
border-radius: 0 0 0 40px;
font-size: calc(1em + 0.5vw);

${Box}:hover &{
   background-color: ${props => props.theme.text};
   color: ${props => props.theme.body};
}

@media (max-width: 768px) {
   padding: 0.5rem calc(1.1rem + .8vw);
   font-size: calc(.6em + 0.4vw);
}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;

${Box}:hover &{
   &>*{
      fill: ${props => props.theme.text};
   }
}
`

// Framer-motion configuration
const Item = {
   hidden: {
      scale: 0,
   },

   show: {
      scale: 1,

      transition: {
         type: 'string',
         duration: 0.5,
      }
   }
}

const Card = (props) => {
   const { id, name, description, tags, img, demo } = props.data;
   return (
      <Box key={id} variants={Item}>
         <Title>{name}</Title>
         <Images img={img} />
         <Description>
            {description}
         </Description>
         <Tags>
            {
               tags.map((t, id) => {
                  return <Tag key={id}>#{t}</Tag>
               })
            }
         </Tags>

         <Footer>
            <Link to={demo} target='_blank' >
               Source Code
            </Link>
            <Git to={demo} target='_blank' >
               <Github width={30} height={30} />
            </Git>
         </Footer>
      </Box>
   )
}

export default Card