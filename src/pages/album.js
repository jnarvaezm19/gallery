import React, { Component } from 'react'
import GalleryList from '../components/gallery/GalleryList'
import CardAddAlbum from '../components/gallery/CardAddAlbum'
import './albumStyle.css'
import { 
     CardGroup, 
     Row 
    } from 'react-bootstrap'

class Album extends Component{

    constructor(props){
        super(props)
        this.state = {
            albums : [
                {
                    id: 1,
                    albumTittle: "Jc Test",
                    img: "https://res.cloudinary.com/dtfdylnjz/image/upload/v1577717582/Photos/xggeopmh4qgyscnm94qk.png"
                },
                {
                    id: 2,
                    albumTittle: "Michell Album",
                    img: "https://res.cloudinary.com/dtfdylnjz/image/upload/v1578515034/Photos/jlhmh0nyqtu157zex91r.png"
                },
                {
                    id: 3,
                    albumTittle: "Secrect Album",
                    img: "https://res.cloudinary.com/dtfdylnjz/image/upload/v1578089051/Photos/bt9cdsxxxhat1ujr4m9v.jpg"
                }
            ]
        }
    }
    
    render(){
        return(
            <div className="container-fluid">
                <CardGroup>
                    <Row>
                        <CardAddAlbum/>
                        <GalleryList
                            albums = {this.state.albums}
                        />
                    </Row>
                </CardGroup>
            </div>
        )
    }
}

export default Album