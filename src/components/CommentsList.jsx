import ListGroup from 'react-bootstrap/ListGroup';

function CommentsList(props) {
    return (
        <ListGroup>
            <p className="text-center">Recensioni:</p>
            {props.list.map((comm) =>
                <ListGroup.Item key={comm.elementId}>
                    <p>Cosa ne penso:<br /> {comm.comment}</p>
                    <p>Voto: {comm.rate}/5</p>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default CommentsList;