import React, { Component } from 'react'
import CardAlbum from '../components/gallery/CardAlbum'
import CardAddAlbum from '../components/gallery/CardAddAlbum'
import './albumStyle.css'
import { 
     CardGroup, 
     Row 
    } from 'react-bootstrap'

class Album extends Component{

    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className="container-fluid">
                <CardGroup>
                    <Row>
                        <CardAddAlbum/>
                        <CardAlbum
                            albumTittle="Jc Test"
                            img="https://res.cloudinary.com/dtfdylnjz/image/upload/v1577717582/Photos/xggeopmh4qgyscnm94qk.png"
                        />
                    </Row>
                </CardGroup>
            </div>
        )
    }
}

export default Album