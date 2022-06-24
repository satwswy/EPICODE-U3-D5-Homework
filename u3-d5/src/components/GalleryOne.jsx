import React, { Component } from 'react'
import SingleMovie from './SingleMovie'
import { Container, Col, Row } from 'react-bootstrap'

export default class GalleryOne extends Component {
    state = {
        movies: []
    }
    componentDidMount = () => {
        this.fetchGalleryOneMovies()
    }
    fetchGalleryOneMovies = async () => {
        try {
            const url = "http://www.omdbapi.com/?apikey=1116749d&s=harry%20potter"
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                movies: data.Search
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return (

            <Container>
                <Row className="justify-content-center mt-3">
                    {this.state.movies.map(movie => {
                        return (

                            <Col key={movie.imdbID} xs={6} md={4} lg={3} className="text-center">
                                <SingleMovie  movie={movie} />
                            </Col>


                        )
                    })}
                </Row>
            </Container>

        )
    }
}