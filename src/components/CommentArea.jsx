import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment.jsx";

// variabili componente
const fetchURL = `https://striveschool-api.herokuapp.com/api/comments/`;
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q0Njg1ZTNiMTAwMTViNWVkOTAiLCJpYXQiOjE3NzAzMDMyOTYsImV4cCI6MTc3MTUxMjg5Nn0.J_uMfQej1JyBhgkd_AVpMD9K7vyOqzIbX-ddI3JhOLc"

class CommentArea extends Component {

    state = {
        comments: []
    }

    getComments() {

        fetch(fetchURL + this.props.asin, {
            headers: {
                Authorization: "Bearer " + key
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("Errore nel recupero dei commenti")
                }
            })
            .then((data) => {
                this.setState({ comments: data })
            })
            .catch((err) => {
                console.log(err)
            })
    };

    componentDidMount() {
        this.getComments()
    }

    render() {
        return (
            <>
                <CommentsList list={this.state.comments} />
                <AddComment asin={this.props.asin} refreshComments={this.getComments} />
            </>

        )
    }
}

export default CommentArea;