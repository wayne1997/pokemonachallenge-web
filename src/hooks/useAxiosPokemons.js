import { useState, useEffect } from "react"
import { getPokemones } from "../services/getPokemons";


export const useAxiosPokemonList =  () => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState( [] );

    const obtainPokemons = async() =>{
        const response = await getPokemones();
        setPokemons( response );
        setIsLoading(false);
    }

    useEffect(() => {
      obtainPokemons();
    },[]);

    return {
        isLoading,
        pokemons,
    }
}