import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'


const ModalAddAlbum = (props) => (
    <Modal  {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add New Album
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
    </Modal>
)


export default ModalAddAlbum
