import React from 'react'
import CardAlbum from './CardAlbum'
import {Col} from 'react-bootstrap'

const GalleryList = (props) => (
    <React.Fragment>
        {props.albums.map(album =>{
            return(
                <Col sm={6}>
                    <CardAlbum
                        albumTittle={album.albumTittle}
                        img={album.img}
                    />
                </Col>
            )
        })}
    </React.Fragment>
)

export default GalleryList