import React from 'react'
import { ThemeProvider, keyframes, styled } from 'styled-components'
import { darkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import android from "../assets/Images/Android.png"
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
z-index: -1;
`

const float = keyframes`
0% { transform: translateY(-20px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-20px)}
`

const Android = styled.div`
position: absolute;
top: 8%;
right: 15%;
width: 16vw;
animation: ${float} 4s ease infinite;
z-index: 2;

img {
   max-width: 100%;
}

@media (max-width: 768px) {
   width: 10vw;
   top: 12%;
   right: 10%;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 60%;
min-height: 60vh;
z-index: 2;
line-height: 1.5;
overflow: auto;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(7rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;

@media (max-width: 768px) {
   width: 55%;
   font-size: calc(0.7rem + .8vw);
   padding: 1rem;
   top: 6rem;
   left: calc(4rem + 3vw);
}
`

const AboutPage = () => {
   return (
      <ThemeProvider theme={darkTheme} >

         <LogoComponent theme='dark' />
         <SocialIcons theme='dark' />
         <PowerButton />
         <Box>

            <Android>
               <img src={android} alt='King' />
            </Android>

            <Main>
               Hi, I'm Soner. I'm 27 and self-taught Android/Backend Developer.
               <br /> <br />
               I graduated from two seperate department. One of them is Built Instructure, other one is Business Department. After graduation, I have 7 years of insurance history. I don't want to follow that path and quit from my job.
               <br /> <br />
               Becoming a programmer has always been my dream job. Therefore, my new journey started... I have been working on it with passion, curiosity and a strong will for one and half year.
               <br /> <br />
               I'm interested in the whole android and backend stack like trying new things and building great projects.
               <br /> <br />
               I like listen to music, walking around and take a stroll.
            </Main>

            <BigTitle text="ABOUT" top='5%' left='5%' />

         </Box>

      </ThemeProvider>
   )
}

export default AboutPage