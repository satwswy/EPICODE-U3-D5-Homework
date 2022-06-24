import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class Details extends Component {
    state = {
        details:[]
    }
    fetchDetails = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=1116749d&i=${this.props.id}&plot=full`)
        const data = await response.json()
        this.setState({
            details: data,
        })
        
    }
    componentDidMount = async()=> {
       await this.fetchDetails()
    }
  render() {
    return (
      <div><ListGroup>
      <ListGroup.Item>Actors: {actors.split(",").map((actor)=>(<div>actor</ div>))} </ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup></div>
    
    )
  }
}
