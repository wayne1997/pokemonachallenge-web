import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokemonCard from './PokemonCard';
import {useAxiosPokemonList} from '../hooks/useAxiosPokemons';
import './PokemonList.css';

export default function PokemonList() {
  const { isLoading, pokemons } = useAxiosPokemonList();

  return (
    <>
     <Container className='justify-content-center'>
     <Container className=" col-auto nes-container mt-5  with-title is-centered PokemonListContainer">
          <p className="title">Galería pokémon</p>
          <Container>
            <Row xs={1} md={2} lg={3}>
              {
                isLoading === true ?
                <p className="nes-text is-error">Cargando...</p> 
               : pokemons.map(( pokemon )=>( <PokemonCard  key={pokemon.id}  {...pokemon} />  ))
              }  
            </Row>
          </Container>
      </Container>
     </Container>
    </>
  )
}
