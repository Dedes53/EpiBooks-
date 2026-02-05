import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <>
            <Container className="my-4 text-center">
                <Alert variant="success">
                    <Alert.Heading>Benvenuto in EpiBook!</Alert.Heading>
                    <p className="mb-0">
                        Il migliore negozio di libri che tu possa trovare online!
                    </p>
                </Alert>
            </Container>
        </>
    )
};

export default Welcome;