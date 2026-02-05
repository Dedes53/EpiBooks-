import SingleBook from "./SingleBook";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function BookList(props) {
    return (
        <>
            <Container>
                <Button variant="light">Light</Button>
            </Container>
            <Container className="my-4">
                <Row>
                    {
                        props.book.map((book) => (
                            <SingleBook
                                key={book.asin}
                                asin={book.asin}
                                img={book.img}
                                title={book.title}
                                category={book.category}
                                price={book.price}
                            />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default BookList;