import React, {Component} from 'react'
import './CardStyle.css'
import {
     Card, 
     Col
    } from 'react-bootstrap'

class CardAlbum extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    render(){
        const {
            img,
            albumTittle
        } = this.props;
        return (
                <Card>
                    <Card.Img variant="top" 
                            src={img} />
                    <Card.ImgOverlay>
                        <Card.Text>
                            {albumTittle}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
        )
    }
}

export default CardAlbum