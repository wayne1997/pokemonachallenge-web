import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

export default function PokemonCard({ name, image, size }) {
  return (
    <Col className='align-content-center'>
      <Card className="nes-container  is-rounded  m-3">
        <Container className='PokemonCardContainerImage'>
          <Card.Img
            fluid="true"
            className='PokemonCardImage'
            variant='top'
            src={image} />
        </Container>
        <Card.Body className='text-center p-0 justify-content-center'>
          <Container className='col-auto p-0 text-center'>
            <Card.Title className='text-truncate PokemonCardTitle pb-2'>
              {name}
            </Card.Title>
            <Card.Subtitle className="scopes">
              Tamaño: { size }m
            </Card.Subtitle>
          </Container>
          <Container className="col-auto mt-2 p-0 text-center">
            <Link to={"pokemon/" + name} className='nes-btn is-error  PokemonCardBodyButton text-decoration-none' > Detalles </Link>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  )
}