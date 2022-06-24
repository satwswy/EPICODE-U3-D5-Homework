import React, { Component } from 'react'
import { Card, Button, Container, Row , Col} from "react-bootstrap"

export default class SingleMovie extends Component {
    render() {
        return (
            
                        <Card >
                            <Card.Img variant="top" src={this.props.movie.Poster} />
                            <Card.Body>
                                <Card.Title>{this.props.movie.Title}</Card.Title>
                                <Card.Text>
                                    Year: {this.props.movie.Year}
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                   
        )
    }
}
