import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import ModalAddAlbum from './ModalAddAlbum'

function CardAddAlbum(props){
    const [modalShow, setModalShow] = React.useState(false)
    return(
        <React.Fragment>
            <Col sm={6}>
                <Card className="center">
                    <Card.Body>
                        <Card.Title>
                            <Button className="btn-floating btn-large waves-effect waves-light red addAlbum pulse"
                                    onClick={() => setModalShow(true)}
                                    variant="primary">
                                +
                            </Button>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <ModalAddAlbum 
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> 
        </React.Fragment>
    )
}

export default CardAddAlbum
