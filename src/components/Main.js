import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { keyframes, styled } from 'styled-components'
import { motion } from 'framer-motion'
import { YinYang } from './AllSvgs'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6 {
   font-family: 'Karla', sans-serif;
   font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;`

const rotate = keyframes`
from {
   transform: rotate(0);
}
to {
   transform: rotate(360deg);
}
`

const Center = styled.div`
position: absolute;
top: ${props => props.click ? "85%" : "50%"};
left: ${props => props.click ? "92%" : "50%"};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child {
   animation: ${rotate} infinite 1.5s linear;
}

&>:last-child {
   display: ${props => props.click ? "none" : "inline-block"};
   padding-top: 1rem;
}

@media (max-width: 768px) {
   width: 140px;
   height: 140px;
   font-size: calc(.4em + .4vw);

   &>:last-child {
      padding-top: .5rem;
   }
}
`

const DarkDiv = styled.div`
background-color: #000;
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const NavLinkStyled = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
text-decoration: none;
z-index: 1;

@media (max-width: 768px) {
   font-size: calc(.4em + .4vw);
}
`

const CONTACT = styled(NavLinkStyled)`
top: 2rem;
right: calc(1rem + 2vw);

@media (max-width: 768px) {
   top: .7rem;
}
`

const CERTIFICATE = styled(NavLinkStyled)`
top: 54%;
right: calc(.5rem + .5vw);
transform:  rotate(90deg) translate(-50%, -50%);

@media (max-width: 768px) {
   right: calc(-.5rem + .1vw);
}
`

const PROJECT = styled(NavLinkStyled)`
color: ${props => props.click ? props.theme.body : props.theme.text};
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);

@media (max-width: 768px) {
   left: calc(.5rem + 1vw);
}
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLinkStyled)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: relative;

@media (max-width: 768px) {
   top: calc(.5rem + 1vw);
}
`

const SKILLS = styled(NavLinkStyled)`
position: relative;

@media (max-width: 768px) {
   top: calc(.5rem + 1vw);
}
`

const Main = () => {

   const [click, setClick] = useState(false)

   const handleClick = () => setClick(!click)

   return (
      <MainContainer >
         <DarkDiv click={click} />
         <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' : 'light'} />
            <SocialIcons theme={click ? 'dark' : 'light'} />

            <Center click={click}>
               <YinYang onClick={() => handleClick()} width={click ? 90 : 200} height={click ? 90 : 200} fill='currentColor' />
               <span>click here</span>
            </Center>

            <CONTACT to="/contact">
               <motion.h2

                  initial={{
                     y: -200,
                     transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  animate={{
                     y: 0,
                     transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
               >
                  Contact Me
               </motion.h2>
            </CONTACT>

            <CERTIFICATE to="/certificate">
               <motion.h2

                  initial={{
                     y: -200,
                     transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  animate={{
                     y: 0,
                     transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
               >
                  Certificate
               </motion.h2>
            </CERTIFICATE>

            <PROJECT to="/project" click={click}>
               <motion.h2

                  initial={{
                     y: -200,
                     transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  animate={{
                     y: 0,
                     transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
               >
                  Project
               </motion.h2>
            </PROJECT>

            <BottomBar>
               <ABOUT to="/about" click={click}>
                  <motion.h2

                     initial={{
                        y: 200,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                     }}
                     animate={{
                        y: 0,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                     }}

                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                  >
                     AboutMe
                  </motion.h2>
               </ABOUT>
               <SKILLS to="/skills">
                  <motion.h2

                     initial={{
                        y: 200,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                     }}
                     animate={{
                        y: 0,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                     }}

                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                  >
                     MySkills
                  </motion.h2>
               </SKILLS>
            </BottomBar>


         </Container>
         {click ? <Intro click={click} /> : null}
      </MainContainer>
   )
}

export default Main