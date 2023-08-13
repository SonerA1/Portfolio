import React from 'react'
import { Github, Instagram, Linkedin, Twitter } from '../components/AllSvgs'
import { styled } from 'styled-components'
import { darkTheme } from "../components/Themes"
import { motion } from 'framer-motion'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child) {
   margin: 0.5rem 0;
}

@media (max-width: 768px) {
   margin: 0 .2rem;

   &>*:not(:last-child) {
      margin: 0.1rem 0;
   }

   a>*:last-child {
      width: 15px;
      height: 15px;
   }
}
`

const Line = styled(motion.span)`
width: 2px;
max-height: 7rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

@media (max-width: 768px) {
   max-height: 1.6rem;
}
`

const SocialIcons = (props) => {
   return (
      <Icons>
         <motion.div
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.2 }}
         >
            <a style={{ color: "inherit" }} target="_blank" href= "https://github.com/SonerA1" rel="noreferrer" >
               <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </a>
         </motion.div>

         <motion.div
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.4 }}
         >
            <a style={{ color: "inherit" }} target="_blank" href= "https://www.linkedin.com/in/soner-alci/" rel="noreferrer" >
               <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </a>
         </motion.div>

         <motion.div
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.6 }}
         >
            <a style={{ color: "inherit" }} target="_blank" href= "https://www.instagram.com/soneralcii/" rel="noreferrer" >
               <Instagram width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </a>
         </motion.div>

         <motion.div
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.6 }}
         >
            <a style={{ color: "inherit" }} target="_blank" href= "https://www.twitter.com/soneralcii/" rel="noreferrer" >
               <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </a>
         </motion.div>

         <Line color={props.theme}

            initial={{
               height: 0,
            }}
            animate={{
               height: '8rem',
            }}
            transition={{
               type: 'spring', duration: 1, delay: 0.8
            }}
         />
      </Icons>
   )
}

export default SocialIcons