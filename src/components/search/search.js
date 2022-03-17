import React, { useState } from "react";
import styled from "styled-components";



const InputSearch = () => {

    return (
        <div>
            <form>
                <Input type="search" placeholder="Find Pokemons" />
            </form>
        </div>
    )
}
export { InputSearch }


const Input = styled.input`
background:rgba(1,1,1,.2);
margin: 0 35%;
border: none;
border-radius: 10px;
padding: 15px;
width: 25%;
border-bottom: 2px solid rgba(1,1,1,.5);
&:focus{
    outline: none;
    background:rgba(1,1,1,.6);
    color: white;
    font-weigth: bold;
};
&:hover{
    background:rgba(1,1,1,.6);
    color: white;
    font-weigth: bold;
}
`