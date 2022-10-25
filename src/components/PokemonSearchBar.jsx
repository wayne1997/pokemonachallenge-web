import { useState } from "react";
import {useNavigate} from "react-router-dom";
import  Container  from "react-bootstrap/Container";
import './pokemonSearchBar.css'


export default function PokemonSearchBar( ) {
  const[ inputValue, setInputValue ] = useState('Charizar');
  const navigate = useNavigate();

  const onInputChange = ( { target } ) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`pokemon/${inputValue.toLowerCase()}`);
  }

  return (
    <Container 
    className="mt-5 pt-3 text-center">
        <form onSubmit={onSubmit}>
          <div 
        className="nes-field search-container">
            <i className="nes-charmander" ></i>
            <label htmlFor="pokemon_field" className="title" >Escribe el nombre del pokémon</label>
            <input
             type="text" 
             id="pokemon_field" 
             className="nes-input is-error main-input" 
             placeholder={inputValue} 
             onChange={ (event) =>  onInputChange( event ) }
             />
        </div>
        <div>
            <button type="submit" className="nes-btn is-error main-input" > Buscar pokémon</button>
        </div>
        </form>
    </Container>
  )
}
