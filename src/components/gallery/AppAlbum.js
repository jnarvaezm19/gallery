import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Album from '../../pages/album'
import NotFound from '../NotFound/NotFound'

const AppAlbum = (props) => (
    <BrowserRouter>
        <Switch>
            <Route  exact
                path="/"
                component={Album} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default AppAlbum