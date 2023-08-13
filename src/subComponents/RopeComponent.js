import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import { Tassel, Rope } from '../components/AllSvgs'


const Container = styled.div`
position: relative;
`

const Slider = styled.div`
position: fixed;
top: 0;
right: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(-100%);

@media (max-width: 768px) {
   right: 0.5rem; /* Adjust right position for smaller screens */
}
`

const PreDisplay = styled.div`
position: absolute;
top: -2rem;
right: 1.5rem;

@media (max-width: 768px) {
   right: 0.5rem; /* Adjust right position for smaller screens */
}
`

const TasselComponent = (props) => {
   const ref = useRef(null);
   const hiddenRef = useRef(null);

   useEffect(() => {
      const handleScroll = () => {

         let scrollPosition = window.scrollY;
         let windowSize = window.innerHeight;
         let bodyHeight = document.body.offsetHeight;

         let diff = Math.max(bodyHeight - (scrollPosition + windowSize))
         // diff*100/scrollposition
         let diffP = (diff * 100) / (bodyHeight - windowSize)

         ref.current.style.transform = `translateY(${-diffP}%)`

         if (window.scrollY > 5) {
            hiddenRef.current.style.dsplay = 'none'
         } else {
            hiddenRef.current.style.dsplay = 'block'
         }
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
   }, [])


   return (
      <Container>
         <PreDisplay ref={hiddenRef} className='hidden'>
            <Tassel width={130} height={130} fill='currentColor' />
         </PreDisplay>
         <Slider ref={ref}>
            {
               [...Array(props.numbers)].map((x, id) => {
                  return <Rope key={id} width={120} height={120} style={{ transform: "rotateX(120deg)", margin: "-2.57rem 0"}} fill='currentColor' className="Tassel" />
               })
            }
            <Tassel width={130} height={130} fill='currentColor' style={{ marginTop: "-1.3rem", marginLeft: ".6rem"}} />
         </Slider>
      </Container>
   )
}

export default TasselComponent