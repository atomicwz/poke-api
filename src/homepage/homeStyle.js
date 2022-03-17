import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100VH;
  text-align: center;

  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    max-width: 1100px;
    margin: 0 auto;
    align-items: center;

    @media (max-width: 1030px){
      grid-template-columns: 1fr 1fr;
      gap: 50px;
  }

  @media (max-width: 800px){
    grid-template-columns: 1fr;
    gap: 0;
    width: 95%;
}
  }
  
  li{
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    padding: 20px;
    margin-top: 20px;
    width: 80%;
    height: 350px;
    border: 3px solid black;

    @media (max-width: 800px){
      width: 100%;
    }
  }

  li img{
    margin: 0 auto;
  }

  ul h4{
    text-align: center;
    font-family: "Permanent Marker", cursive;
    font-size: 1.5rem;
    color: rgb(0, 0, 0, 0.75);
    text-transform: uppercase;
    margin-top: 20px;
  }

  ul h1{
    font-size: 1.4rem;
    grid-column: 1/3
  }
  img{
  &:hover {
    transform: scale(1.1);
    transition: 0.4s;
  }
  max-width: 250px;
  max-height: 300px;
;
  }

`;

export const Form = styled.form`
  margin: 0 auto;
  @media (max-width: 800px){
    width: 70%;
  }
  input{
    padding: 20px 10px;
    margin-right: 5px;
    width: 25rem;
    background: rgba(1,1,1,.5);
    border-radius: 10px;
    border: none;
    outline: none;
    color: white;

    @media (max-width: 800px){
      width: 50%;
    }

    @media (max-width: 450px){
      width: 60%;
    }
  }


}
  button{
    padding: 20px;
    background: rgba(1,1,1,.8);
    border-radius: 10px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    @media (max-width: 800px){
      padding: 20px;
    }
  }
  input:focus{
    background: rgba(1,1,1,.8);
  }

  button:hover{
    background: rgba(1,1,1,.4);
  }
`
export const ViewMoreButton = styled.button`
margin: 0 auto;
display: block;
width: 10%;
padding: 15px;
border: none;
background: rgb(0, 0, 0);
background: linear-gradient(
  61deg,
  rgba(0, 0, 0, 1) 40%,
  rgba(28, 25, 40, 0.8) 80%
);
border-radius: 10px;
color: white;
margin-top: 35px;
font-family: "Mochiy Pop P One", sans-serif;
cursor: pointer;
&:hover {
  transform: scale(1.05);
  transition: 0.4s;
}
@media (max-width: 800px){
  width: 30%;
}
@media (max-width: 500px){
  width: 40%;
}
`;