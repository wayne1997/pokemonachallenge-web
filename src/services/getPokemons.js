import axios from "axios";

export const getPokemones = async ( name ) => {
    const url = `${import.meta.env.VITE_APP_API_URL}/pokemon`;
    const {data=[]} = await axios.get(url);
    const pokemons = data.map( pokemon => ({ 
        id: pokemon.id,
        name: pokemon.name,
        size: pokemon.size,
        image: pokemon.image,
    })); 
    return  pokemons;
}