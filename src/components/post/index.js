import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Section, Back, PokeTypes, PokePerfil, Weight, Skills, Info, Perfil } from './postStyle'


async function getSkill(url) {
  const response = await fetch(url)
  const pokemons = await response.json()
  return pokemons
}

const PostDetails = (props) => {
  const pokemon = props.pokemonId
  const abilities = pokemon.abilities
  const url = abilities.map((item) => {
    return item.ability.url
  })

  const { theme } = useContext(ThemeContext);

  const [skill, setSkill] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = url.map(async (item) => {
        return (
          await getSkill(item)
        )
      })
      const results = await Promise.all(data)
      setSkill(results)
    }

    fetchData()
  }, [])

  return (
    <Section style={{ color: theme.color, background: theme.background }}>
      <PokePerfil style={{ background: theme.backgroundCard }} >

        <Perfil style={{ background: theme.backgroundProfile }}>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
        </Perfil>

        <Info style={{ color: theme.color, background: theme.backgroundProfile }}>

          <h2>Descriptions</h2>

          <PokeTypes>
            <h4>Elemental:</h4>
            {pokemon.types.map((tipo, index) => {
              return (
                <p key={index}>{tipo.type.name}</p>
              )
            })}
          </PokeTypes>

          <Weight>
            <h4>Weight:</h4>
            <p>{pokemon.weight}Kg</p>
          </Weight>

          <Skills>

            <h4>Skills:</h4>
            {skill !== undefined ? skill.map((info, index) => {
              return (
                <div key={index}>
                  <h5>{info.name}</h5>
                  <p style={{ color: theme.colorSkill }}>{info.effect_entries[0].effect}</p>
                </div>
              )
            }) : 'Pokemon não encontrado.'}
          </Skills>


        </Info>
        <Link to="/">
          <Back><FontAwesomeIcon icon={faHouse} /></Back>
        </Link>
      </PokePerfil>

    </Section>
  );
};



export { PostDetails };
