import { Component } from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea.jsx";

class SingleBook extends Component {

    state = {
        selected: false
    }
    render() {
        return (
            <>
                <Col xs={12} md={6} lg={4} xl={3} key={this.props.asin}>
                    <Card className="mb-3"
                        style={this.state.selected ? { boxShadow: "0 0 10px blue" } : {}}
                        onClick={() => this.setState({ selected: !this.state.selected })}
                    >
                        <Card.Img variant="top" src={this.props.img} className="object-fit-cover" />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <Card.Text className="m-0">{this.props.category}</Card.Text>
                                <Card.Text>€{this.props.price}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                    {this.state.selected && <CommentArea asin={this.props.asin} />}
                </Col>


            </>
        )
    }
}
export default SingleBook;