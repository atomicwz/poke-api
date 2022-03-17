import { PostDetails } from '../post'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

async function homeName(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokeData = response.json()
    return pokeData
}

const teste = () => {
    return (
        <>
            {pokemon !== undefined ? <PostDetails pokemonName={name}/> : 'pokemon nao encontrado'}
        </>

    )

}

export default InputSearch