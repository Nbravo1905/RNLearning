import React, {useEffect, useRef, useState} from 'react'

import { pokemonApi } from '../api/pokemonApi';
import { PokemonResponse, Pokemon, Result } from '../interfaces/pokemonInterface';

export const usePokemon = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=25');
  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);

  }

  const mapPokemonList = ( pokemonList: Result[] ) => {

    const newPokemons: Pokemon[] = pokemonList.map( ({ name, url }) => {

      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id,name,picture};

    });

    setPokemons([
      ...pokemons,
      ...newPokemons
    ]);

    setIsLoading(false);
  }

  useEffect(() => {

    loadPokemons();

  },[]);


  return {
    pokemons,
    isLoading,
    loadPokemons
  }
  

}