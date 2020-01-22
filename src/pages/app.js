import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Master from './master'
import NotFound from '../components/NotFound/NotFound'

const App = (props) => (
    <BrowserRouter>
        <Switch>
            <Route  exact
                path="/"
                component={Master} />
            <Route  component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App