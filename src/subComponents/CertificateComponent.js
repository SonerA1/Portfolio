import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Box = styled(motion(NavLink))`
width: calc(10rem + 15vw);
text-decoration: none;
height: 25rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;

display: flex;
flex-direction: column;
z-index: 2;

&:hover {
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
   transition: all 0.3s ease;
}

@media (max-width: 768px) {
   display: grid;
   grid-auto-rows: calc(6rem + 5vw);
   min-height: 35vh;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 70%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;

${Box}:hover &{
   border: 1px solid ${props => props.theme.body};
}

@media (max-width: 768px) {
   height: 100%;
}
`

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover &{
   border-bottom: 1px solid ${props => props.theme.body};
}

@media (max-width: 768px) {
   font-size: calc(.8em + .7vw);
   height: 3.5rem;
}
`

const HashTags = styled.div`
padding: 0.6rem 0;
display: flex;
flex-wrap: wrap;
min-height: 1rem;

@media (max-width: 768px) {
   margin-top: -1rem;
   max-height: 2rem;
}
`

const Tag = styled.span`
padding-right: 0.5rem;

@media (max-width: 768px) {
   font-size: calc(.7em + .8vw);
}
`

const Container = styled(motion.div)`
display: grid;
grid-template-columns: repeat(2, 2fr);
justify-content: center;
align-items: center;
gap: 1.5rem;

@media (max-width: 768px) {
   display: grid;
   grid-auto-rows: calc(25rem + 8vw);
   min-height: 40vh;
   margin-left: 25%;
   margin-bottom: 7%;
   column-gap: 5rem;
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

const CertificateComponent = (props) => {
   const { name, tags, imgSrc, link } = props.certificate;
   return (
      <Container
         variants={Item}
      >
         <Box to={link} target="_blank">
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <HashTags>
               {
                  tags.map((t, id) => {
                     return <Tag key={id}>#{t}</Tag>
                  })
               }
            </HashTags>
         </Box>
      </Container>
   )
}

export default CertificateComponent