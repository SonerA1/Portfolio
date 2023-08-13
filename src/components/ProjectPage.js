import React, { useEffect, useRef } from 'react'
import { ThemeProvider, styled } from 'styled-components'
import { motion } from 'framer-motion'
import { darkTheme } from './Themes'
import { Project } from '../data/ProjectData'
import { YinYang } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import Card from '../subComponents/Card'
import BigTitle from '../subComponents/BigTitle'
import BackgroundImage from "../assets/Images/TrustMe.png"


const Box = styled.div`
background-color: ${props => props.theme.body};
background-image: url(${BackgroundImage});
height: 400vh;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 45vh;
display: flex;
justify-content: center;
align-items: center;
color: white;
z-index: 1;
`

const Rotate = styled.span`
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;
`

// Framer-motion Configuration
const container = {

   hidden: { opacity: 0 },
   show: {
      opacity: 1,

      transition: {
         staggerChildren: 0.5,
         duration: 0.5,
      }
   }
}

const ProjectPage = () => {
   const ref = useRef(null);
   const yingyang = useRef(null);

   useEffect(() => {
      let element = ref.current;

      const rotate = () => {
         const scrollValue = window.scrollY;
         const translationValue = -scrollValue * 3.1; // Adjust this value as needed
         const rotationValue = scrollValue * .7;
         element.style.transform = `translateX(${translationValue}px)`
         yingyang.current.style.transform = `rotate(${rotationValue}deg)`
      }

      window.addEventListener('scroll', rotate)

      return () => window.removeEventListener('scroll', rotate)

   }, [])


   return (
      <ThemeProvider theme={darkTheme} >
         <Box>

            <LogoComponent theme='dark' />
            <SocialIcons theme='dark' />
            <PowerButton />

            <Main ref={ref} variants={container} initial='hidden' animate='show' >
               {
                  Project.map(d =>
                     <Card key={d.id} data={d} />
                  )
               }
            </Main>

            <Rotate ref={yingyang}>
               <YinYang width={80} height={80} fill={darkTheme.text} />
            </Rotate>

            <BigTitle text="PROJECT" top='10%' right='20%' />
         </Box>
      </ThemeProvider>

   )
}

export default ProjectPage