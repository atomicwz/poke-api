import { PostDetails } from '../post'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

async function home(pokeId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    const pokeData = response.json()
    return pokeData
}

const Post = () => {

    const { id } = useParams()
    
    const [pokemon, setPokemon] = useState()
    

    useEffect(() => {
        const fetchData = async () => {
            const fetch = await home(id)
            setPokemon(fetch)
        }
        fetchData()

    }, [])

    return (
        <>
            {pokemon !== undefined ? <PostDetails pokemonId={pokemon} /> : 'pokemon nao encontrado'}
        </>

    )

}

export { Post }