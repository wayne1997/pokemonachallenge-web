import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useParams } from "react-router-dom";
import {useAxiosPokemon} from "../hooks/useAxiosPokemon";

export default function PokemonDetails() {
    let {name} = useParams();
    
    const {pokemon, pokemonEvolution} = useAxiosPokemon(name);
    return (
    <Container>
        <NavigationBar />
        <Container className="mt-5 p-5">
            <Row xs={1} md={2} lg={2}>
                <Col>
                    <Container className="nes-container with-title is-rounded text-center">
                    <Image
                     src= {pokemon.image}
                     fluid
                    />
                    </Container>
                </Col>
                <Col>
                    <Container className="text-center" >
                        <span className="title text-capitalize" >{ pokemon.name || 'No encontrado'  }</span>
                        <Container className="text-start mt-3 nes-list">
                            <ul className="nes-list is-disc">
                                <li className="scopes">
                                    Peso: {pokemon.weigth || '0.0'}kg
                                </li>
                                <li className="scopes">
                                    Tamaño: {pokemon.size || '0.0'}m
                                </li>
                                <li className="scopes text-capitalize">
                                    Evolución: { pokemonEvolution?.name || 'N/A'}
                                </li>                   
                            </ul>
                        </Container>
                        <Container>
                            <Row>
                                <p> Descripción </p>
                            </Row>
                            <Row className="text-start">
                                <p> {pokemon.description} </p>
                            </Row>
                        </Container>
                        <Link to={'/'} className="nes-btn is-success scopes text-decoration-none" >
                            Volver
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}
