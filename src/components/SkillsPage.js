import React from 'react'
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './Themes'
import { Android, Backend, Frontend } from './AllSvgs'
import { Icon } from "../data/IconData"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from '../subComponents/BigTitle'
import Icons from '../subComponents/Icons'

const GlobalStyles = createGlobalStyle`
body {
   margin: 0;
   padding: 0;
   overflow: hidden;
   background-color: ${props => props.theme.body};
}
`

const IconBox = styled(motion.div)`
&>*:nth-child(n) {
   position: absolute;
   opacity: 0.4;
   z-index: 1;
   width: 150px;
   height: 150px;
}

&>*:nth-child(n):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(1) {
   top: 3%;
   left: 5%;
}

&>*:nth-child(2) {
   top: 3%;
   left: 90%;
}

&>*:nth-child(3) {
   top: 3%;
   left: 55%;
}

&>*:nth-child(4) {
   top: 85%;
   left: 55%;
}

&>*:nth-child(5) {
   top: 85%;
   left: 40%;
}
&>*:nth-child(5):hover {
   opacity: 0.8;
}

&>*:nth-child(6) {
   top: 30%;
   left: 5%;
}

&>*:nth-child(7) {
   top: 60%;
   left: 5%;
}
&>*:nth-child(7):hover {
   opacity: 0.8;
}

&>*:nth-child(8) {
   top: 5%;
   left: 5%;
   opacity: 0.1;
   z-index: 1;
}
&>*:nth-child(8):hover {
   opacity: 0.3;
}

&>*:nth-child(9) {
   top: 85%;
   left: 5%;
}

&>*:nth-child(10) {
   top: 30%;
   left: 90%;
}
&>*:nth-child(10):hover {
   opacity: 0.8;
}

&>*:nth-child(11) {
   top: 85%;
   left: 90%;
}

&>*:nth-child(12) {
   top: 3%;
   left: 40%;
}
&>*:nth-child(12):hover {
   opacity: 0.8;
}

&>*:nth-child(13) {
   top: 3%;
   left: 20%;
}
&>*:nth-child(13):hover {
   opacity: 0.8;
}

&>*:nth-child(14) {
   top: 3%;
   left: 70%;
}
&>*:nth-child(14):hover {
   opacity: 0.8;
}

&>*:nth-child(15) {
   top: 85%;
   left: 70%;
}
&>*:nth-child(15):hover {
   opacity: 0.8;
}
&>*:nth-child(16) {
   top: 85%;
   left: 20%;
}
&>*:nth-child(16):hover {
   opacity: 0.8;
}
&>*:nth-child(17) {
   top: 60%;
   left: 90%;
}
&>*:nth-child(17):hover {
   opacity: 0.8;
}

@media (max-width: 768px) {
   &>*:nth-child(n) {
      position: absolute;
      opacity: 0.4;
      margin-top: 1rem;
      z-index: 1;
      width: 50px;
      height: 50px;
   }

   &>*:nth-child(n):hover {
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;
   }
}
`

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100%;
height: 100vh;
margin-left: -2rem;

position: relative;
display: flex;
justify-content: space-around;
align-items: center;

&>*:last-child {
   position: absolute;
   color: ${props => props.theme.text};
   opacity: .4;
   top: 40%;
   left: 40%;
   transform: rotate(90deg);
}

@media (max-width: 768px) {
   width: 100%;
   height: 95vh;

   &>*:last-child {
      top: 40%;
      left: 30%;
   }
}
`

const Main = styled.div`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
padding: 2rem;
width: 25%;
max-width: 500px;
height: 70vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: grid;
grid-template-columns: repeat(1fr, 2fr);
justify-content: space-between;
margin-top: 2rem;

&:hover {
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
}

ul {
   display: grid;
   grid-template-columns: 1fr 1fr;
   column-gap: 1.3rem;
}

@media (max-width: 768px) {
   width: 30%;
   padding: .7rem;
   padding-left: .5rem;
   margin-left: 1rem;
   max-height: 45vh;
   

   ul {
      display: grid;
      grid-template-columns: 1fr;
   }
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(.7em + 1vw);

${Main}:hover &{
   &>*{
      fill: ${props => props.theme.body};
   }
}

&>*:first-child {
   width: 40px;
   height: 40px;
   margin-right: 1rem;
}

@media (max-width: 768px) {
   font-size: calc(.5em + .5vw);

   &>*:first-child {
      width: 30px;
      height: 30px;
   }
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.3em + .8vw);
padding: 0.5rem 0;

strong {
   margin-bottom: 1rem;
   text-transform: uppercase;
}
ul, p {
   margin-left: 2rem;
}

${Main}:hover &{
   color: ${props => props.theme.body};
}

@media (max-width: 768px) {
   padding: 0.1rem 0;
   font-size: calc(.3em + .4vw);

   strong {
      font-size: calc(.7em + .7vw);
   }

   ul, p {
      margin-left: .7rem;
   }
}
`

const SkillsPage = () => {
   return (
      <>
         <GlobalStyles />
         <ThemeProvider theme={lightTheme} >
            <Box>

               <LogoComponent theme='light' />
               <SocialIcons theme='light' />
               <PowerButton />
               <motion.div
                  initial={{
                     opacity: 0,
                  }}
                  animate={{
                     opacity: 1,
                  }}
                  transition={{
                     type: 'spring', duration: 4, delay: 1
                  }}

               >
                  <IconBox>
                     {
                        Icon.map((data) => (
                           <Icons key={data.id} src={data.imgSrc} />
                        ))}
                  </IconBox>
               </motion.div>

               <Main>
                  <Title>
                     <Backend /> Backend Developer
                  </Title>
                  <Description>
                     I enjoy learning various new methods to create products from my perspective in this area. Therefore I have limitless enthusiasm and ambition to do it.
                  </Description>
                  <Description>
                     <strong>Backend Skills</strong>
                     <p>
                        Java, Spring, C#, Sql-SqlLite-MySql-PostgreSql, Postman, Docker, Redis
                     </p>
                  </Description>
                  <Title>
                     <Frontend /> Frontend Developer
                  </Title>
                  <Description>
                     <strong>Frontend Skills</strong>
                     <p>
                        Html, Css, Bootstrap, JavaScript
                     </p>
                  </Description>
                  <Description>
                     <strong>Tools</strong>
                     <p>GIT, IntelliJ, Eclipse, VS Code,</p>
                  </Description>
               </Main>

               <Main className='android'>
                  <Title>
                     <Android /> Android Developer
                  </Title>
                  <Description>
                     I love to create design which speaks, Keep it clean, minimal and simple.
                  </Description>
                  <Description>
                     <strong>Skills</strong>
                     <p>
                        Kotlin, Firebase, Cloud
                     </p>
                  </Description>
                  <Description>
                     <strong>Technologies</strong>
                     <ul>
                        <li>
                           Room
                        </li>
                        <li>
                           Hilt-Dagger-
                        </li>
                        <li>
                           UnitTests
                        </li>
                        <li>
                           Retrofit
                        </li>
                        <li>
                           Flow
                        </li>
                        <li>
                           Full Compose
                        </li>
                        <li>
                           Coroutine
                        </li>
                        <li>
                           ViewModel
                        </li>
                        <li>
                           RxJava2
                        </li>
                        <li>
                           Lifecyle
                        </li>
                        <li>
                           Navigation
                        </li>
                        <li>
                           SharedPreference
                        </li>
                        <li>
                           Glide
                        </li>
                        <li>
                           LiveData
                        </li>
                        <li>
                           DataBinding
                        </li>
                        <li>
                           ViewBinding
                        </li>
                        <li>
                           Dependency Injection
                        </li>
                        <li>
                           MVVM Architecture
                        </li>

                     </ul>
                  </Description>
               </Main>


               <BigTitle text="SKILLS" />
            </Box>
         </ThemeProvider>
      </>
   )
}

export default SkillsPage