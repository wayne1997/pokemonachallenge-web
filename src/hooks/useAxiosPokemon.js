import { useEffect, useState } from "react"
import { getPokemon } from "../services/getPokemon";

export const useAxiosPokemon = ( criteria ) => {
    const [ pokemon, setPokemon ] = useState({});
    const [ pokemonEvolution, setPokemonEvolution ] = useState({});

    const getPokemonByName = async() =>{
        const {evolution, types,...poke} = await getPokemon(criteria);
        setPokemon(poke);
        setPokemonEvolution(evolution);        
    }
    useEffect( ()=>{
        getPokemonByName();
    });
    return {
        pokemon,
        pokemonEvolution
    }
}