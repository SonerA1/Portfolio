import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { motion } from "framer-motion"
import { Certificate } from "../data/CertificateData"
import CertificateComponent from "../subComponents/CertificateComponent"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"
import SocialIcons from "../subComponents/SocialIcons"
import RopeComponent from "../subComponents/RopeComponent"
import BigTitle from "../subComponents/BigTitle"

const MainContainer = styled(motion.div)`
background-color: rgba(0, 0, 0, 0.5);
background-size: cover;
background-repeat: no-repeat;
background-position: center;,
`


const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
min-height: 100vh;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10rem 2rem;

@media (max-width: 768px) {
   padding: 5rem 2rem;
}
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
z-index: 2;
`

// Framer-motion configuration

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

const CertificatePage = () => {
   const [numbers, setNumbers] = useState(0)

   useEffect(() => {
      let num = (window.innerHeight - 70) / 30;
      setNumbers(parseInt(num))
   }, [])


   return (
      <MainContainer
         variants={container}
         initial='hidden'
         animate='show'
         exit={{
            opacity: 0, transition: { duration: 0.5 }
         }}
      >
         <Container>
            <LogoComponent />
            <PowerButton />
            <SocialIcons />
            <RopeComponent numbers={numbers} />

            <Center>
               <Grid>
                  {
                     Certificate.map(certificate => {
                        return <CertificateComponent key={certificate.id} certificate={certificate} />
                     })
                  }
               </Grid>
            </Center>

            <BigTitle text="CERTIFICATE" top='5rem' left='5rem' />
         </Container>
      </MainContainer>
   )
}

export default CertificatePage