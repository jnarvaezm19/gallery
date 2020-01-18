import React, { Component } from 'react'
import CardPhoto from '../components/photo/CardPhoto'
import {
    CardGroup, 
    Row
   } from 'react-bootstrap'

class Photo extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <CardGroup>
                <Row>
                    <CardPhoto/>
                </Row>
            </CardGroup>
        )
    }
}

export default Photo
