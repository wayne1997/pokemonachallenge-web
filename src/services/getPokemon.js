import axios from "axios"
export const getPokemon = async ( name ) => {
    const url = `${import.meta.env.VITE_APP_API_URL}/pokemon/${name}`;
    const response = await axios.get(url); 
    return  response.data;
}