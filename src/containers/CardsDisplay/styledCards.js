import styled from 'styled-components'

export const FavsDiv = styled.div`
height:100vh;
display: flex;
justify-content: center;
`
export const ContainerDiv = styled.div`
display: grid;
gap: 2rem;
align-content:flex-start;
grid-template-columns: repeat(4, 1fr);
margin: 5rem;
grid-auto-rows: minmax(100px, auto);
@media screen and (max-width: 768px){
   display: flex;
   flex-direction:column;
}
`
export const NothingDiv = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 100%;
`