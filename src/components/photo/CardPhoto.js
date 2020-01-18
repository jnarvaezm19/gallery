import React, { Component } from 'react'
import { MediaBox } from 'react-materialize'
import {
     Col, 
     Card
    } from 'react-bootstrap'

class CardPhoto extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <Col sm={12}
                 md={4}>
                <Card>
                    <MediaBox>
                        <img
                            alt=""
                            src="https://materializecss.com/images/sample-1.jpg"
                            width="650"
                        />
                    </MediaBox>
                    <Card.ImgOverlay className="ImgOverlayPhoto">
                        <Card.Text>
                            asdsad asdasd 
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        )
    }
}

export default CardPhoto
