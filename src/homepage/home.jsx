import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import axios from "axios";
import { Link } from "react-router-dom";
import { Section, Form, ViewMoreButton } from "./homeStyle.js";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Pokedex = () => {
  const pokeRender = 12;
  const [pokemons, setPokemons] = useState([]);
  const { theme } = useContext(ThemeContext);
  const [count, setCount] = useState(pokeRender);
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(true)
  const [error, setError] = useState(false)

  // Função para aumentar a quantidade de itens no fetch
  const viewMore = () => {
    setCount(count + pokeRender);
    if (count >= 150) return;
  };
  // Array que será atribuída o valor das promises
  let pokemonPromises = [];
  useEffect(() => {
    const fetchData = async () => {
      for (let i = 1; i <= count; i++) {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemonPromises.push(data.data);
      }
      setPokemons(pokemonPromises);
    };
    fetchData();
  }, [count]);

  //função de search
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const pokeFilter = pokemons.filter((pokemon) => {
      setShowMore(false)

      if(!search) return setPokemons(pokemons)

      if(search === pokemon.name){ 
        return pokemon
      } else {
        setError(true)
      }

    });
    setPokemons(pokeFilter)
  };

  return (
    <Section style={{ color: theme.color, background: theme.background }}>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
    
        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

      </Form>
      <ul>
        { !error ? pokemons.map((pokemon, index) => {
          return (

            <Link key={index} to={`/post/${pokemon.id}`}>
              <li
                style={{ color: theme.color, background: theme.backgroundCard }}
                key={index}
              >
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt=""
                />
                <h4 style={{ color: theme.color }}>{pokemon.name}</h4>
              </li>
            </Link> 
          )
            
          ;
        }) : <h1>Pokemon não encontrado</h1> }
      </ul>

      { showMore && <ViewMoreButton onClick={viewMore}>Ver mais</ViewMoreButton> }

    </Section>
  );
};


export { Pokedex };
