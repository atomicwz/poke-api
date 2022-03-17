import styled from "styled-components";

export const Section = styled.section`
    padding: 50px 0px;
    display: flex;
    flex-direction: 20px;
    gap: 20px;

p{
  text-align: left;
  text-transform: capitalize;
}

h3,h4{
  text-align: left;
  font-family: 'Mochiy Pop P One', sans-serif;
}
h1,h2{
    text-align: center;
}


h4{
  padding: 0;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  text-align: left;
}

h5{
    text-align: left;
    text-transform: uppercase;
    padding: 5px;
    border-radius: 10px;
    margin: 15px 0 5px 0;
    font-family: 'Permanent Marker', cursive;
    font-size: 0.95rem;
}
`
export const PokePerfil = styled.div`
    max-width: 50%;
    margin: 0 auto;
    padding: 20px;
    gap: 20px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    overflow-y: auto; 

    @media (max-width: 1030px){
        max-width: 70%;
        margin-top: 40px;
    }
    
`
export const Perfil = styled.div`
border: 2px solid black;
border-radius: 15px;
display: flex;
flex-direction: column;
width: 40%;
padding: 15px;
background: rgba(22,20,112,.5);

h1{
  font-family: 'Permanent Marker', cursive;
  font-size: 2.3rem;
  margin: 0;
  padding: 0;
}

@media (max-width: 1030px){
    width: 60%;
}

@media (max-width: 700px){
    width: 90%;

    h1{
        font-size: 1.7rem;
    }
}
`

export const Info = styled.div`

border: 2px solid black;
border-radius: 15px;
background: #9095fc;
padding: 10px;
width: 60%;

@media (max-width: 1030px){
    width: 90%;
}
`

export const PokeTypes = styled.div`
    margin: 20px auto;
    width: 90%;
    padding: 5px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid rgba(1,1,1,.4);

p{
  text-align: left;
  font-family: 'Permanent Marker', cursive;
}
`
export const Weight = styled.div`
width: 90%;
border-radius: 5px;
border: 1px solid rgba(1,1,1,.4);
padding: 5px;
margin: 10px auto;
 p{
  padding: 5px;
  border-radius: 10px;
  font-family: 'Mochiy Pop P One', sans-serif;
  text-align: left;
 }
`
export const Skills = styled.div`
border-radius: 5px;
border: 1px solid rgba(1,1,1,.4);
width: 90%;
margin: 0 auto;
text-align: center;
padding: 5px;
  p{
  margin: 0px;
  max-width: 95%;
  color: rgba(255,255,255,1);
  }
  div{
    widht: 100%;
    margin: 0 auto;
  }
}
`

export const Back = styled.a`
padding: 0 5px 5px 5px;
border-radius: 5px;
font-size: 1.4rem;
color: white;
text-decoration: none;
cursor: pointer;
background: rgba(255,255,255,.3);
transition: .3s;
&:hover{
  color: black;
  background:rgba(255,255,255,1);
}


`