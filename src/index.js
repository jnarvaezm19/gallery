import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Album from './pages/album'
import Photo from './pages/photo'
import './indexStyle.css'
import {
     Row, 
     Col
    } from 'react-bootstrap'

const container = document.getElementById('root')

ReactDOM.render(
        <Row>
            <Col className="center"
                 xs={12} 
                 md={4} 
                 lg={3}>
                <h4>Albums</h4>
                <Album/>
            </Col>
            <Col className="center"
                 xs={12} 
                 md={8} 
                 lg={9}>
                <h4>Photos</h4>
                <Photo/>
            </Col>
        </Row>
,container)
