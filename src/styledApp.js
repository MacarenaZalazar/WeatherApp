import styled from 'styled-components'

export const AppCont = styled.div`
text-align: center;
height: 100vh;
width:100%;
object-fit: contain;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
display:flex;
flex-direction: column;
align-content: center;
justify-content:center;
background-image: url(${props => props.img});
background-size: cover;
background-repeat: no-repeat;
  
`