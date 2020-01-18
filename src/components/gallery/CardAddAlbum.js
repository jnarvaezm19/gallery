import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'

class CardAddAlbum extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <Col sm={6}>
                <Card className="center">
                    <Card.Body>
                        <Card.Title>
                            <Button className="btn-floating btn-large waves-effect waves-light red addAlbum pulse">
                                +
                            </Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CardAddAlbum
