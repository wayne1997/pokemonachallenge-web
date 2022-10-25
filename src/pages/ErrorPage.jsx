import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import Container from "react-bootstrap/Container";

export default function ErrorPage() {
    const error = useRouteError();
    return (

        <Container className="mt-5">
            <Container className="nes-container  is-rounded">
                <Container className="message-list">
                    <Container className="message -right">
                        <Container className="nes-balloon form-left">
                            <p>¡Oooh, tuvimos un problema! Descripción de error: {error.statusText || error.message}</p>
                        </Container>
                        <i className="nes-ash" ></i>
                    </Container>
                </Container>
            </Container>
        </Container>

    );
}